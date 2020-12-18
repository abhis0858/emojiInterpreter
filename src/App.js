import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤏": " Pinching Hand ",
  "✌": " Victory Hand ",
  "🤞": " Crossed Fingers ",
  "🤟": " Love-You Gesture ",
  "🤘": " Sign of the Horns ",
  "🤙": " Call Me Hand ",
  "👈": " Backhand Index Pointing Left ",
  "👉": " Backhand Index Pointing Right ",
  "👆": " Backhand Index Pointing Up ",
  "🖕": " Middle Finger ",
  "👇": " Backhand Index Pointing Down ",
  "☝": " Index Pointing Up ",
  "👍": " Thumbs up ",
  "✊": " Raised Fist ",
  "👊": " Oncoming Fist  "
};

export default function App() {
  const [meaning, setMeaning] = useState();
  function emojiChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning =
        "Sorry! I don't know that emoji can you send it to abhishek so that he could add that in the database";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> welcome to emoji interpreter</h1>
      <input onChange={emojiChangeHandler}></input>
      <div id="message"> {meaning}</div>
    </div>
  );
}
