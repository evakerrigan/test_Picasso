import axios from "axios";
import { useState } from "react";
import { URL_COMMENTS } from "../../constants";

export const AddComment = ({ id }: { id: string }): JSX.Element => {
  const [newComment, setNewComment] = useState<string>("");

  const addComment = async (e: React.FormEvent) => {
    e.preventDefault();
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
    </div>
  );
};
