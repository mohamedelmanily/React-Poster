import React from "react";
import styled from "styled-components";
const Li = styled.li`
  list-style: none;
  background-color: teal;
  text-align: center;
  border-radius: 10px;
`;
const H4 = styled.h4``;
const P = styled.p``;
const Post = (props) => {
  return (
    <Li>
      <H4>{props.author}</H4>
      <P>{props.body}</P>
    </Li>
  );
};

export default Post;
