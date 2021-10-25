import styles from "./styles.less";
import {FC} from "react";

interface Props {
  banner: string;
  name: string;
  avatar: string;
}

const Header: FC<Props> = (props) => {
  const { banner, name, avatar } = props;

  return (
    <header className={styles.header} style={{ backgroundImage: `url('${banner}')` }}>
      <div className={styles.user}>
        <span className={styles.name}>{name}</span>
        <img className={styles.avatar} src={avatar} alt="头像"/>
      </div>
    </header>
  )
}

export default Header
