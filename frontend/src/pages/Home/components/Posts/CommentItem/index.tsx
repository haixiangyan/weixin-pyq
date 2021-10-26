import {FC} from "react";
import Person from "@/pages/Home/components/Posts/Person";

interface Props {
}

const CommentItem: FC<Props> = () => {
  return (
    <li>
      <Person userId="1" name="张三"/>：ACM 的比赛
    </li>
  )
}

export default CommentItem
