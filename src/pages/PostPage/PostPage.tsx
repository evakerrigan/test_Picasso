import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AddComment } from "../../components/AddComment/AddComment";
import { URL_POSTS, URL_USERS } from "../../constants";
import { Comment, Post, UserInfo } from "../../types";
import { Box, Typography } from "@mui/material";

export const PostPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [comments, setComments] = useState<Comment[]>([]);
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<number>();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const params = useParams();

  const id = params.id;

  const numberId = Number(id);

  async function fetchPost(url: string) {
    const res = await axios.get(url);
    setPost(res.data);
    setUser(res.data.userId);
  }
  async function fetchComments(url: string) {
    const res = await axios.get(url);
    setComments(res.data);
  }

  useEffect(() => {
    if (Number.isNaN(numberId) || numberId < 1 || numberId > 100) {
      navigate(`/${id}`, { replace: true });
    } else {
      fetchPost(`${URL_POSTS}/${id}`);
      fetchComments(`${URL_POSTS}/${id}/comments`);
    }
  }, [id, navigate, numberId]);

  useEffect(() => {
    async function fetchUsers(url: string) {
      const res = await axios.get(url);
      res.data.filter((item: UserInfo) => {
        if (item.id === user) {
          setUserInfo(item);
        }
      });
    }
    if (Number.isNaN(numberId) || numberId < 1 || numberId > 100) {
      navigate(`/${id}`);
    } else {
      fetchUsers(URL_USERS);
    }
  }, [id, navigate, numberId, user]);

  if (!post || !userInfo) return <p>Loading...</p>;

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
          {comments.map((comment) => (
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
