import axios from "axios";
import { createPortal } from "react-dom";
import { useState } from "react";
import { URL_COMMENTS } from "../../constants";
import { Modal } from "..";

export const AddComment = ({ id }: { id: string }): JSX.Element => {
  const [newComment, setNewComment] = useState<string>("");
  const [showModalSendComment, setShowModalSendComment] = useState<boolean>(false);

  const addComment = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('показываем модалку');
    setShowModalSendComment(true);
    try {
      const res = await axios.post(`${URL_COMMENTS}/${id}`);
      console.log("res.data", res.data);
      console.log("comment added");
      setNewComment("");
    } catch (error) {
      console.log("error", error);
      setNewComment("");
    }
  };
  const handleModalClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    console.log('закрываем модалку');
    setShowModalSendComment(false);
  }

  return (
    <div>
      <h3>Add Comment</h3>
      <form onSubmit={addComment}>
        <textarea
          value={newComment}
          className="textarea"
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
      </form>
      {showModalSendComment && createPortal(<Modal
        children="Отправляем комментарий к посту"
        onClose={(event) => { handleModalClose(event) }}
      />, document.body)}
    </div>
  );
};
