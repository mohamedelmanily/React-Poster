import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import PostList from "./Components/PostList"


function App() {
  const [visable, setVisable] = useState(false);
  function handleOpen() {
    setVisable(true);
    console.log("clicked");
  }
  function handleClose() {
    setVisable(false);
    console.log("clicked");
  }
  return (
    <>
    <Header opening={handleOpen}/>
    <PostList opening={handleOpen} closing={handleClose} isPosting={visable}/>
    </>
  );
}

export default App;
