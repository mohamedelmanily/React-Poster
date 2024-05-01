import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  background-color: rgb(0, 0, 0,.85);
  padding: 1rem;
  width: 20rem;
  color: white;
`;
const Input = styled.input`
  width: 80%;
  padding: 10px;
  display: block;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 18px;
`;
const Button = styled.button`
  padding: 7px 15px;
  border-radius: 3px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-right: 10px;
  cursor: pointer;
  transition: all.5s;
  &:hover {
    background-color: #059363;
  }
`;

const NewPost = (props) => {
  const [handleName, setHandleName] = useState("");
  const [handleText, setHandleText] = useState("");

  function getName(e) {
    setHandleName(e.target.value);
  }
  function getText(e) {
    setHandleText(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    let data = {
      name: handleName,
      text: handleText
    };
    props.onSubmitHandler(data);
    props.onCancelChange();
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form onSubmit={submitHandler}>
          <p>
            <label> Name</label>
            <Input id="name" required onChange={getName} />
          </p>
          <p>
            <label> Text</label>
            <Input id="text" required onChange={getText} />
          </p>
          <p>
            <Button style={{backgroundColor:'#04d0d0'}}>submit</Button>
            <Button onClick={props.onCancelChange} type="button">
              cancel
            </Button>
          </p>
        </Form>
      </div>
    </>
  );
};

export default NewPost;
