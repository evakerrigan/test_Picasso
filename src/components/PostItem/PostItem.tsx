import "./PostItem.css";

import { useNavigate } from "react-router-dom";

type PostItemProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostItem = ({ post }: { post: PostItemProps }) => {

  const navigate = useNavigate();

  return (
    <div className="postItem" onClick={() => (navigate(`/posts/:${post.id}`))}>
      <span className="postUserId">{post.userId}</span>
      <span className="postId">{post.id}</span>
      <span className="postTitle">{post.title}</span>
      <p className="postBody">{post.body}</p>
    </div>
  );

}