import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ tweets, setTweet, textInput, setText }) => {
  const userInputHanlder = (e) => {
    setText(e.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweet([...tweets, { message: textInput, id: uuidv4() }]);
    setText("");
  };
  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHanlder}
        cols="30"
        rows="10"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
