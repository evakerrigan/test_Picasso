import { Modal } from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import React from "react";

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
    setShowModal(true);
  }

  const handleModalClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowModal(false);
    navigate(`/posts/:${id}`)
  }

  return (
    <Box onClick={handleClick}
      sx={{
        cursor: "pointer",
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "1rem",
        margin: "0.5rem",
        width: "25%",
        transitionDuration: "2s",
        '&:hover': {
          background: "#1976d2;",
        },
      }}
    >
      {showModal && (
        <Modal open={showModal} onClose={(event) => { handleModalClose(event) }} >
          <Typography>Переход на другую страницу</Typography>
        </Modal>
      )}
      <Typography className="postUserId" >{userId}</Typography>
      <Typography className="postId">{id}</Typography>
      <Typography className="postTitle">{title}</Typography>
      <Typography className="postBody">{body}</Typography>
    </Box >
  );
};
