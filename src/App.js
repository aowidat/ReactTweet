import React, { useState, useEffect } from "react";
import TweetList from "./Component/TweetList";
import CreateTweet from "./Component/CreateTweet";

function App() {
  const [name, setName] = useState("Aziz");
  const message = "Hello";
  const [textInput, setText] = useState("");
  const [tweets, setTweet] = useState([]);
  useEffect(() => {
    console.log("heyyyyyyyyyyy");
  }, [textInput]);
  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setText={setText}
        tweets={tweets}
        setTweet={setTweet}
      />
      <TweetList
        name={name}
        tweets={tweets}
        tweets={tweets}
        setTweets={setTweet}
      />
    </div>
  );
}

export default App;
