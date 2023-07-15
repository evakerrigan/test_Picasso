import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AddComment } from "../../components/AddComment/AddComment";

const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';
const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const URL_COMMENTS = 'https://jsonplaceholder.typicode.com/comments';

type UserInfo = {
  id: number;
  email: string;
  username: string;
  name: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  }
}

export const PostPage = () => {

  const [comments, setComments] = useState<any[]>([]);
  const [post, setPost] = useState<any>({});
  const [user, setUser] = useState<number>();
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  const params: any = useParams();

  const id = (params.id).substring(1);

  useEffect(() => {
    async function fetchPost(url: string) {
      const res = await axios.get(url);
      setPost(res.data);
      setUser(res.data.userId);
    }
    fetchPost(`${URL_POSTS}` + '/' + `${id}`);
    async function fetchComments(url: string) {
      const res = await axios.get(url);
      setComments(res.data);
    }
    fetchComments(URL_POSTS + '/' + `${id}` + '/' + 'comments');
  }, []);

  useEffect(() => {
    async function fetchUsers(url: string) {
      const res = await axios.get(url);
      (res.data).filter((item: any) => {
        if (item.id === user) {
          setUserInfo(item);
        }
      });
    }
    fetchUsers(URL_USERS);
  }, [user]);



  return (
    <div className="postPage">
      <h1>PostPage</h1>
      <div className="user" style={{ "border": "1px solid green" }}>
        <p>user: {userInfo.id}</p>
        <p>name: {userInfo.name}</p>
      </div>
      <div className="post">
        <p>id: {id}</p>
        <p>title: {post.title}</p>
        <p>body: {post.body}</p>
      </div>
      <div className="comments">
        {
          comments.map((comment) => (
            <div className="comment" key={comment.id} style={{ "border": "1px solid blue" }}>
              <p>name: {comment.name}</p>
              <p>body: {comment.body}</p>
            </div>
          ))
        }
      </div>

      <AddComment id={id} />

    </div>
  )
}