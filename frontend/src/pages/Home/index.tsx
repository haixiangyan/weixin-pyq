import Header from "@/pages/Home/components/Header";
import PostItem from "@/pages/Home/components/Posts/PostItem";
import styles from './index.less';

const Home = () => {
  return (
    <div className={styles.app}>
      <Header
        name="海怪"
        avatar="https://avatars.githubusercontent.com/u/17061654?v=4"
        banner="https://avatars.githubusercontent.com/u/17061654?v=4"
      />

      <ul style={{ marginTop: 12 }}>
        <PostItem />
        <PostItem />
      </ul>
    </div>
  );
}

export default Home;
