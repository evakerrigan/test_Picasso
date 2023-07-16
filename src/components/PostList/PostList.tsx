import { PostItem } from "../PostItem/PostItem";

type PostItemProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostListProps = {
  posts: PostItemProps[];
};

export const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="PostList">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};
