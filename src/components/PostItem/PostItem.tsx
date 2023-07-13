import "./PostItem.css";

type PostItemProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostItem = ({ post }: { post: PostItemProps }) => {

  return (
    <div className="postItem">
      <span className="postUserId">{post.userId}</span>
      <span className="postId">{post.id}</span>
      <span className="postTitle">{post.title}</span>
      <p className="postBody">{post.body}</p>
    </div>
  );

}