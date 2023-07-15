import axios from "axios";
import { useState } from "react";

const URL_COMMENTS_ADD = "https://jsonplaceholder.typicode.com/comments";

export const AddComment = (id: string): JSX.Element => {

  const [newComment, setNewComment] = useState<string>('');

  const addComment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL_COMMENTS_ADD}/${id}`);
      console.log('res.data', res.data);
      alert('Comment added');
      setNewComment('');
    } catch (error) {
      console.log('error', error);
      setNewComment('');
    }
  }

  return (
    <div>
      <h3>Add Comment</h3>
      <form onSubmit={addComment}>
        <textarea value={newComment} className="textarea" onChange={(e) => setNewComment(e.target.value)}></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
