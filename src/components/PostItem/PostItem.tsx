import "./PostItem.css";
import { Modal } from "../Modal/Modal";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type PostItemProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const PostItem = ({ post }: { post: PostItemProps }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const { userId, id, title, body } = post;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    console.log('создаем портал');
    setShowModal(true);
  }

  const handleModalClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    console.log('закрываем портал');
    setShowModal(false);
    navigate(`/posts/:${id}`)
  }

  return (
    <div className="postItem" onClick={handleClick}>
      {showModal && createPortal(<Modal children="Переход на другую страницу" onClose={(event) => { handleModalClose(event) }} />, document.body)}
      <span className="postUserId">{userId}</span>
      <span className="postId">{id}</span>
      <span className="postTitle">{title}</span>
      <p className="postBody">{body}</p>
    </div >
  );
};
