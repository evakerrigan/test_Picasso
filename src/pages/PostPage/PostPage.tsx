import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddComment } from "../../components/AddComment/AddComment";
import { Box, Typography } from "@mui/material";
import { useGetCommentsQuery, useGetPostQuery, useGetUsersQuery } from "../../api/api";
import { CommentDTO, UserInfoDTO } from "../../types";

export const PostPage = (): JSX.Element => {
  const navigate = useNavigate();

  const params = useParams();

  const id = params.id;

  // проверка на неправильный id, если он неправильный, то переходит на страницу not found
  const numberId = Number(id);
  if (Number.isNaN(numberId) || numberId < 1 || numberId > 100) {
    navigate(`/posts/${id}`, { replace: true });
  }

  const { data: post } = useGetPostQuery({ idPost: id });
  const { data: comments } = useGetCommentsQuery({ idPost: id });
  const { data: users } = useGetUsersQuery();

  const [user, setUser] = useState<number | undefined>();
  const [userInfo, setUserInfo] = useState<UserInfoDTO | null>(null);

  useEffect(() => {
    setUser(post?.userId);
  }, [id, post?.userId]);


  useEffect(() => {
    users?.forEach((item: UserInfoDTO) => {
      if (item.id === user) {
        setUserInfo(item);
      }
    });
  }, [user, users]);


  if (!post || !userInfo || !comments) return <p>Loading...</p>;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      <Box sx={{ width: "25%" }}>
        <Box sx={{
          padding: "1rem",
          margin: "0 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgba(0, 0, 0, 0.87)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          borderRadius: "4px",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
        }}>
          <Typography style={{ textAlign: "left" }}>user id: {userInfo.id}</Typography>
          <Typography style={{ textAlign: "left" }}>user name: {userInfo.name}</Typography>
        </Box>
      </Box>
      <Box sx={{ width: "75%" }}>
        <Box sx={{
          padding: "1rem",
          margin: "0 0 2rem 0",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgba(0, 0, 0, 0.87)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          borderRadius: "4px",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
        }}>
          <Typography style={{ textAlign: "left" }}>post id: {id}</Typography>
          <Typography variant="h1" sx={{ fontSize: "28px", color: "#000", textAlign: "left" }}>post title: {post.title}</Typography>
          <Typography sx={{ fontSize: "20px", color: "#000", textAlign: "left" }}>post: {post.body}</Typography>
        </Box>
        <Box sx={{
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgba(0, 0, 0, 0.87)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          borderRadius: "4px",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
        }}>
          {comments.map((comment: CommentDTO) => (
            <Box key={comment.id} sx={{ margin: "1rem 0", padding: "1rem", borderBottom: "1px solid #ccc" }}>
              <Typography sx={{ color: "rgba(0, 0, 0, 0.87)", textAlign: "left" }}>user name: {comment.name}</Typography>
              <Typography sx={{ color: "rgba(0, 0, 0, 0.6)", textAlign: "left" }}>comment: {comment.body}</Typography>
            </Box>
          ))}
        </Box>
        {id && <AddComment id={id} />}
      </Box>
    </Box >
  );
};
