import React from "react";
import { MdMessage, MdPostAdd } from "react-icons/md";
import classes from "./Header.module.css"

const Header = ({opening}) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          <MdMessage className={classes.msg}/>
          React Poster
        </h1>

        <button className={classes.button} onClick={opening}>
            <MdPostAdd size={18}/>
            New Post
        </button>
      </header>
      <hr style ={{width: '70%'}}/>
    </>
  );
};

export default Header;
