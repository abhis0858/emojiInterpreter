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
  "👊": " Oncoming Fist  ",
  "😍": " Smiling face with heart eyes ",
  "😀": " Grinning Face",
  "😃": " Grinning Face with Big Eyes",
  "😄": " Grinning Face with Smiling Eyes",
  "😁": " Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": " Slightly Smiling Face",
  "🙃": " Upside-Down Face",
  "😉": " Winking Face",
  "😊": " Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰": " Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes",
  "🤩": " Star-Struck",
  "😘": " Face Blowing a Kiss",
  "😗": " Kissing Face",
  "😚": " Kissing Face with Closed Eyes",
  "😙": " Kissing Face with Smiling Eyes",
  "😋": " Face Savoring Food",
  "😛": " Face with Tongue",
  "😜": " Winking Face with Tongue",
  "🤪": " Zany Face",
  "😝": " Squinting Face with Tongue",
  "🤑": " Money-Mouth Face",
  "🤗": " Hugsging Face",
  "🤭": " Face with Hand Over Mouth",
  "🤫": " Shushing Face",
  "🤔": " Thinking Face",
  "🤐": " Zipper-Mouth Face",
  "🤨": " Face with Raised Eyebrow",
  "😐": " Neutral Face",
  "😑": " Expressionless Face",
  "😶": " Face Without Mouth",
  "😏": " Smirking Face",
  "😒": " Unamused Face",
  "🙄": " Face with Rolling Eyes",
  "😬": " Grimacing Face",
  "🤥": " Lying Face",
  "😌": " Relieved Face",
  "😔": " Pensive Face",
  "😪": " Sleepy Face",
  "🤤": " Drooling Face",
  "😴": " Sleeping Face",
  "😷": " Face with Medical Mask",
  "🤒": " Face with Thermometer",
  "🤕": " Face with Head-Bandage",
  "🤢": " Nauseated Face",
  "🤮": " Face Vomiting",
  "🤧": " Sneezing Face",
  "🥵": " Hot Face",
  "🥶": " Cold Face",
  "🥴": " Woozy Face",
  "😵": " Dizzy Face",
  "🤯": " Exploding Head",
  "🤠": " Cowboy Hat Face",
  "🥳": " Partying Face",
  "😎": " Smiling Face with Sunglasses",
  "🤓": " Nerd Face",
  "🧐": " Face with Monocle",
  "😕": " Confused Face",
  "😟": " Worried Face",
  "🙁": " Slightly Frowning Face",
  "😮": " Face with Open Mouth",
  "😯": " Hushed Face",
  "😲": " Astonished Face",
  "😳": " Flushed Face",
  "🥺": " Pleading Face",
  "😦": " Frowning Face with Open Mouth",
  "😧": " Anguished Face",
  "😨": " Fearful Face",
  "😰": " Anxious Face with Sweat",
  "😥": " Sad but Relieved Face",
  "😢": " Crying Face",
  "😭": " Loudly Crying Face",
  "😱": " Face Screaming in Fear",
  "😖": " Confounded Face",
  "😣": " Persevering Face",
  "😞": " Disappointed Face",
  "😓": " Downcast Face with Sweat",
  "😩": " Weary Face",
  "😫": " Tired Face",
  "🥱": " Yawning Face",
  "😤": " Face with Steam From Nose",
  "😡": " Pouting Face",
  "😠": " Angry Face",
  "🤬": " Face with Symbols on Mouth",
  "😈": " Smiling Face with Horns",
  "👿": " Angry Face with Horns",
  "💀": " Skull",
  "️☠": " Skull and Crossbones",
  "💩": " Pile of Poo",
  "🤡": " Clown Face",
  "👹": " Ogre",
  "👺": " Goblin",
  "👻": " Ghost",
  "👽": " Alien",
  "👾": " Alien Monster",
  "🤖": " Robot",
  "😺": " Grinning Cat",
  "😸": " Grinning Cat with Smiling Eyes",
  "😹": " Cat with Tears of Joy",
  "😻": " Smiling Cat with Heart-Eyes",
  "😼": " Cat with Wry Smile",
  "😽": " Kissing Cat",
  "🙀": " Weary Cat",
  "😿": " Crying Cat",
  "😾": " Pouting Cat",
  "💋": " Kiss Mark",
  "👋": " Waving Hand",
  "🤚": " Raised Back of Hand",
  "🖐": "️ Hand with Fingers Splayed",
  "✋": " Raised Hand",
  "🖖": " Vulcan Salute",
  "👌": " OK Hand",
  "👐": "Open Hands",
  "🤲": "Palms Up Together",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "💅": "Nail Polish",
  "👭": "Women Holding Hands",
  "👫": "Woman and Man Holding Hands",
  "👬": "Men Holding Hands",
  "💏": "Kiss",
  "👪": "Family",
  "🗣": "Speaking Head",
  "👤": "Bust in Silhouette",
  "👥": "Busts in Silhouette",
  "👣": "Footprints",
  "🌂": "Closed Umbrella",
  "🎃": "Jack-O-Lantern",
  "🧵": "Thread",
  "🧶": "Yarn",
  "👓": "Glasses",
  "🕶": "Sunglasses",
  "🥽": "Goggles",
  "🥼": "Lab Coat",
  "🦺": "Safety Vest",
  "👔": "Necktie",
  "👕": "T-Shirt",
  "👖": "Jeans",
  "🧣": "Scarf",
  "🧤": "Gloves",
  "🧥": "Coat",
  "🧦": "Socks",
  "👗": "Dress",
  "👘": "Kimono",
  "🥻": "Sari",
  "🩱": "One-Piece Swimsuit",
  "🩲": "Briefs",
  "🩳": "Shorts",
  "👙": "Bikini",
  "👚": "Woman’s Clothes",
  "👛": "Purse",
  "👜": "Handbag",
  "👝": "Clutch Bag",
  "🎒": "Backpack",
  "👞": "Man’s Shoe",
  "👟": "Running Shoe",
  "🥾": "Hiking Boot",
  "🥿": "Flat Shoe",
  "👠": "High-Heeled Shoe",
  "👡": "Woman’s Sandal",
  "🩰": "Ballet Shoes",
  "👢": "Woman’s Boot",
  "👑": "Crown",
  "👒": "Woman’s Hat",
  "🎩": "Top Hat",
  "🎓": "Graduation Cap",
  "🧢": "Billed Cap",
  "🪖": "Military Helmet",
  "💄": "Lipstick",
  "💍": "Ring",
  "💼": "Briefcase",
  "🩸": "Drop of Blood"
};

var emojiInDatabase = Object.keys(emojiDictionary);

export default function App() {
  function clickHandler(emojis) {
    var meaning = emojiDictionary[emojis];
    setMeaning(meaning);
  }
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
      <input
        placeholder="enter an emoji to know its meaning . please enter one emoji at a time"
        onChange={emojiChangeHandler}
      ></input>
      <div id="message"> {meaning}</div>
      <h3> Emojis in database </h3>
      {emojiInDatabase.map(function (emojis) {
        return (
          <span
            onClick={() => clickHandler(emojis)}
            style={{
              fontSize: "larger",
              padding: "0.2rem 0.2rem",
              maxWidth: "200px",
              cursor: "pointer"
            }}
            key={emojis}
          >
            {" "}
            {emojis}{" "}
          </span>
        );
      })}
    </div>
  );
}
