import styles from './report.module.css'
import React, { useState } from 'react'

const TableConstructor = (props) => {
    const months = {
        '1': 'January',
        '2': 'February',
        '3': 'March',
        '4': 'April',
        '5': 'May',
        '6': 'June',
        '7': 'July',
        '8': 'August',
        '9': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    };

    let icon = props.rating

    return(
        <div className={styles.table}>
            <div className={styles.header}>
                <div className={styles.surveyHead}>
                    <header className={styles.mainHead}>
                        <h3>{props.name}</h3>
                    </header>
                    <header className={styles.subHead}>
                        <h3>Survey Ending in {months[props.month]}</h3>
                    </header>
                </div>
                <div className={styles.rating}>
                        <div className={styles.points}>
                            <div>Score: {props.score}</div>
                            <div>Rating: {props.rating}</div>
                        </div>
                        <div className={styles.iconBox}>
                            <div>Score Type:</div>
                            {icon=="Poor" && <div className={styles.icon1}><p></p></div>}
                            {icon=="Mediocre" && <div className={styles.icon2}><p></p></div>}
                            {icon=="Passable" && <div className={styles.icon3}><p></p></div>}
                            {icon=="Good" && <div className={styles.icon4}><p></p></div>}
                            {icon=="Excellent" && <div className={styles.icon5}><p></p></div>}
                        </div>
                </div>
            </div>
            
            <div className={styles.tableData}>
                <div className={styles.tableRow}>
                    {props.questions.map(item => (
                        <div className={styles.QnA}> 
                            <li className={styles.question}>
                                <p style={{fontWeight: 'bold', marginRight: '5px'}}>
                                    Question: 
                                </p> 
                                {item.questionText}
                            </li>
                            <div lassName={styles.answerBox}>
                                <li className={styles.answer}> 
                                    <p style={{fontWeight: 'bold', marginRight: '5px'}}>
                                        Answer:
                                    </p> 
                                    {item.answer.text}
                                </li> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TableConstructor