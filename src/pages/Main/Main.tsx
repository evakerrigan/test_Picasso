import { useState } from 'react';
import axios from 'axios';
import { PostList } from "../../components/PostList/PostList"
import { MySelect } from "../../components/UI/MySelect/MySelect"


const URL_POSTS_USERS = 'https://jsonplaceholder.typicode.com/posts?userId=';
const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';
const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const URL_COMMENTS = 'https://jsonplaceholder.typicode.com/comments';

export const Main = () => {

  const [posts, setPosts] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [selectedSort, setSelectedSort] = useState<any>('');

  async function fetchPosts(url: string) {
    const res = await axios.get(url);
    setPosts(res.data);
    console.log('posts.res.data', res.data);
    fetchUsers();
  }

  async function fetchUsers() {
    const res = await axios.get(URL_USERS);
    setUsers(res.data);
    console.log('users.res.data', res.data);
  }

  const sortPosts = (sort: string) => {

    setSelectedSort(sort);

    if (sort === 'All') {
      fetchPosts(URL_POSTS);
    } else {
      fetchPosts(`${URL_POSTS_USERS}` + sort);
    }


  }

  return (
    <div className="main">
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="All"
        options={users}
      />
      <button onClick={() => fetchPosts(URL_POSTS)}>Fetch Posts</button>
      <PostList posts={posts} />
    </div>
  )
}