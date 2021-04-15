import React, { useEffect, useState } from 'react';
import TableConstructor from './report'
import styles from './fetch.module.css'
const baseurl = "https://mango-meadow-01b737303.azurestaticapps.net/api/surveys/"
const guid = "f08fae74-fce9-42ef-96d3-b577f7936d87"

function FetchData(){
    //Survey Details part
    const [surveyName, setSurveyName] = useState(null)
    const [endDate, setEndDate] = useState([])
    const [surveyLoading, setSurveyLoading] = useState(true)
    const [error, setError] =useState(null)

    //Answers part
    const [questions, setQuestions] = useState([])
    const [qLoading, setQLoading] = useState(true)

    //Score part
    const [score, setScore] = useState(null)
    const [rating, setRating] = useState(null)
    const [sLoading, setSLoading] = useState(true)

    useEffect(async () => {
        //Survey Details part
        fetch(baseurl + guid)
        .then(res => res.json())
        .then(
            (result) => {
                setSurveyLoading(false)
                setSurveyName(result.survey.name);
                setEndDate(result.survey.endDate.split('-')[1].split('0')[1])
            },
            (error) =>{
                setSurveyLoading(false)
                setError(error)
            }
        )

        //Answers part
        const qResponse = await fetch(baseurl + guid + '/responses/' + guid);
        const qData = await qResponse.json();
        const qItem = qData;

        setQuestions(qItem.answers)
        setQLoading(false);

        //Score part
        const sResponse = await fetch(baseurl + guid + '/responses/' + guid + '/scores');
        const sData = await sResponse.json();
        const sItem = sData;

        setScore(sItem.score)
        setRating(sItem.rating)
        setSLoading(false);
    }, [])

    if(error){
        return <div>Error: {error.message}</div>
    } else if(surveyLoading){
        return (
            <div>
                <h3>Survey Details Loading...</h3>
                <div className={styles.loader}><p></p></div>
            </div>
        )
    }else if(qLoading){
        return (
            <div>
                <h3>Question Details Loading...</h3>
                <div className={styles.loader}><p></p></div>
            </div>
        )
    }else if(sLoading){
        return (
            <div>
                <h3>Score Details Loading...</h3>
                <div className={styles.loader}><p></p></div>
            </div>
        )
    }else
    return (
            <TableConstructor
                name = {surveyName}
                month = {endDate}
                questions = {questions}
                score = {score}
                rating = {rating}
            />
    )
}

export default FetchData;