import {FC} from "react";
import CommentItem from "@/pages/Home/components/Posts/CommentItem";
import styles from './styles.less';
import Person from "@/pages/Home/components/Posts/Person";
import {HeartOutlined} from "@ant-design/icons";
import ActionButton from "@/pages/Home/components/Posts/ActionButton";

const PostItem: FC = () => {
  return (
    <li className={styles.postItem}>
      <div className={styles.avatarWrapper}>
        <img src="https://avatars.githubusercontent.com/u/17061654?v=4" alt="头像"/>
      </div>

      <div className={styles.contentWrapper}>
        {/*名字*/}
        <Person userId="1" name="小圆"/>

        {/*文字*/}
        <p className={styles.text}>
          Halloween kills属实是给👴看乐了，只是对我来说系列电影必须硬着头皮看完/::)￼下一部不管多难看我也能给他看了，就是求他别再拍[Lol]
        </p>

        {/*操作*/}
        <div className={styles.actions}>
          <span className={styles.time}>2天前</span>
          <ActionButton onComment={() => {}} onLike={() => {}} />
        </div>

        <div className={styles.commentArea}>
          {/*点赞*/}
          <div className={styles.like}>
            <span className={styles.likeIcon}>
              <HeartOutlined />
            </span>
            <ul>
              <Person userId="1" name="张三" />
              ，
              <Person userId="1" name="张三" />
            </ul>
          </div>

          {/*评论*/}
          <ul>
            <CommentItem />
          </ul>
        </div>

        {/*分割*/}
        <div className={styles.divider} />
      </div>
    </li>
  )
}

export default PostItem
