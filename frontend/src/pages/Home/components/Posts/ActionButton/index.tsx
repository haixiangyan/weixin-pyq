import {FC} from "react";
import styles from './styles.less';
import {EllipsisOutlined, HeartOutlined, MessageOutlined} from "@ant-design/icons";

interface Props {
  panelVisible: boolean;
  setPanelVisible: (visible: boolean) => void;
  onLike: () => void;
}

const ActionButton: FC<Props> = (props) => {
  const {panelVisible, onLike, setPanelVisible} = props;

  return (
    <span className={styles.wrapper}>
      <button className={styles.actionButton} onClick={() => setPanelVisible(true)}>
        <EllipsisOutlined/>
      </button>

      {panelVisible && (
        <div className={styles.panel}>
          <button onClick={onLike}>
            <HeartOutlined/>
            <span className={styles.text}>点赞</span>
          </button>

          <span className={styles.divider}/>

          <button onClick={() => setPanelVisible(false)}>
            <MessageOutlined/>
            <span className={styles.text}>评论</span>
          </button>
        </div>
      )}
    </span>
  )
}

export default ActionButton;
