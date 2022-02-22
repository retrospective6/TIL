import React from 'react';
import * as Styled from './PostList.styles';
import { ViewType } from './PostList.styles';
import Post from '@/types/Post';
import PostListItem from '@/components/common/PostList/PostListItem';

export interface PostListProps {
  posts: Post[];
  type?: ViewType;
}

export default function PostList(props: PostListProps): JSX.Element {
  const { posts, type = 'default' } = props;
  return (
    <Styled.Container type={type}>
      {posts.map((post) => (
        <div key={post.id} className="post-list-item">
          <PostListItem post={post} />
        </div>
      ))}
    </Styled.Container>
  );
}
