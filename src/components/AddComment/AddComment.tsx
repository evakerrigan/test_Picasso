import axios from "axios";
import { useState } from "react";
import { URL_COMMENTS } from "../../constants";
import { Modal } from "..";
import { Box, Button, TextField, Typography } from "@mui/material";

export const AddComment = ({ id }: { id: string }): JSX.Element => {
  const [newComment, setNewComment] = useState<string>("");
  const [showModalSendComment, setShowModalSendComment] = useState<boolean>(false);

  const addComment = async (e: React.FormEvent) => {
    e.preventDefault();
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
    setShowModalSendComment(false);
  }

  return (
    <Box>
      <form onSubmit={addComment}>
        <TextField
          id="filled-multiline-static"
          label="Add comment"
          multiline
          rows={4}
          variant="filled"
          sx={{ width: "100%", margin: "1rem 0" }}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button variant="contained" type="submit">Добавить комментарий</Button>
      </form>
      {showModalSendComment && (
        <Modal onClose={(event) => { handleModalClose(event) }} >
          <Typography>Отправляем комментарий к посту</Typography>
        </Modal>
      )}
    </Box >
  );
};
