import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import PostPage from "./pages/postPage";
import DetailPage from "./pages/detailPage";
import UpdatePage from "./pages/updatePage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/post" element={<PostPage/>} />
      <Route path="/post/:id" element={<DetailPage />} />
      <Route path="/update/:id" element={<UpdatePage />} />
    </Routes>
  );
}
export default App;
