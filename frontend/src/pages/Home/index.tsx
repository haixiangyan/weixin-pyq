import styles from './index.less';

const Home = () => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div className={styles.user}>
          <span className={styles.name}>海怪</span>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/17061654?v=4" alt="头像"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
