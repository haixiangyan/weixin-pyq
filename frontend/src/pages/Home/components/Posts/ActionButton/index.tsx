import {FC} from "react";
import styles from './styles.less';
import {EllipsisOutlined} from "@ant-design/icons";

interface Props {
  onLike: () => void;
  onComment: () => void;
}

const ActionButton: FC<Props> = (props) => {
  const { onLike, onComment } = props;

  return (
    <span>
      <button className={styles.actionButton}>
        <EllipsisOutlined />
      </button>
    </span>
  )
}

export default ActionButton;
