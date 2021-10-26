import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function CreateEmojiCard(emoji) {
  return (
    <Entry
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateEmojiCard)}</dl>
    </div>
  );
}

export default App;
