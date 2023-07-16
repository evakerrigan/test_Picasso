import "./PostItem.css";

import { useNavigate } from "react-router-dom";

type PostItemProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const PostItem = ({ post }: { post: PostItemProps }) => {
  const navigate = useNavigate();

  const { userId, id, title, body } = post;

  return (
    <div className="postItem" onClick={() => navigate(`/posts/:${id}`)}>
      <span className="postUserId">{userId}</span>
      <span className="postId">{id}</span>
      <span className="postTitle">{title}</span>
      <p className="postBody">{body}</p>
    </div>
  );
};
