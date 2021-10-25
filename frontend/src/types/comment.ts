import {User} from "@/types/user";

export interface Comment {
  id: string; // 评论 Id
  content: string; // 回复内容
  replyFrom: User; // 评论者
  replyTo?: User; // 被评论的人
  createdAt: number; // 评论时间
}
