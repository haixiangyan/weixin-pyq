import {FC} from "react";
import styles from './styles.less';

interface Props {
  userId: string; // 用户 Id
  name: string; // 用户名
}

const Person: FC<Props> = (props) => {
  const { userId, name } = props;

  const openProfile = () => {
    console.log('userId', userId);
  }

  return (
    <span onClick={openProfile} className={styles.person}>{name}</span>
  )
}

export default Person;
