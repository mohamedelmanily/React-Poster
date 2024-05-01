import Post from "./Post";
import styled from "styled-components";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

const Ul = styled.ul`
  list-style: none;
  margin: 1rem auto;
  padding: 1rem 0;
  max-width: 50rem;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: center;
  gap: 1rem;
  transition: all.3s;
`;
const PostList = ({ closing, isPosting }) => {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((e)=>[postData,...e]);

  }

  return (
    <>
      {isPosting && (
        <Modal submitFunc={closing}>
          <NewPost onCancelChange={closing} onSubmitHandler={addPostHandler} />
        </Modal>
      )}

      { posts.length>0?
      <Ul>
        {posts.map((post)=>
        <Post author={post.name} body={post.text}/>)}
      </Ul>:
       <h2 style={{textAlign:'center'}}> There Is No Notes Yet!!</h2>}
    </>
  );
};

export default PostList;
