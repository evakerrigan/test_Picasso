import { Route, Routes } from "react-router-dom";

import './App.css';

import { NotFound } from "./pages/NotFound/NotFound";
import { Main } from "./pages/Main/Main";
import { PostPage } from "./pages/PostPage/PostPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="posts/:postId" element={<PostPage />} />
        <Route path="not-found" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
