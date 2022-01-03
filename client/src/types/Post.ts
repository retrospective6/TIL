import User from '@/types/User';

export default interface Post {
  id: number;
  user: User;
  title: string;
  content: string;
  thumbnail: Thumbnail;
  description: string;
  likes: number;
  comments: number;
  createdAt: string;
  tags?: string[];
  visibleLevel: VisibleLevel;
}

export type VisibleLevel = 'public' | 'private';

export type Thumbnail = {
  img?: string;
  gradient?: ThumbnailColor;
};

export type ThumbnailColor = {
  start: string;
  end: string;
};
