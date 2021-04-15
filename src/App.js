import styles from './App.module.css';
import FetchData from './fetcher'


function App() {
  return (
    <div className={styles.main}>
      <div className={styles.reportFormat}>
        <FetchData/>
      </div>
    </div>
  );
}

export default App;
