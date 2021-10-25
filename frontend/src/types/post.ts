import {User} from "@/types/user";
import {Comment} from "@/types/comment";

type ImageMedia = {
  urls: string[]; // 多图片
}

type VideoMedia = {
  url: string; // 单视频
}

type LinkMedia = {
  title: string; // 标题
  description: string; // 描述
  url: string; // 链接
  icon: string; // Link icon
}

export interface Post {
  id: string; // Id
  media: ImageMedia | VideoMedia | LinkMedia; // 多媒体
  createdAt: number; // 创建时间
  text?: string; // 文本
  comments: Comment[] // 评论
  author: User; // 发朋友圈的人
}
