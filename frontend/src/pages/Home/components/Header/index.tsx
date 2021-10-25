import styles from "./styles.less";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.user}>
        <span className={styles.name}>海怪</span>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/17061654?v=4" alt="头像"/>
      </div>
    </header>
  )
}

export default Header
