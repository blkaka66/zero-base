import styles from './App.module.css';



function App() : JSX.Element{
  return (
    <>
      <div className={styles.entire}>
        <div className={styles.imgDiv}>
          {/* <img src='/assets/aa.png'>

          </img> */}
        </div>

        <div className={styles.underDiv}>
          <div className={styles.title}>
            게임
          </div>
          <div className={styles.omakase}>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
