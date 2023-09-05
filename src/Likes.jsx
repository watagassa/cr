/* App.tsx */
import React, { useState } from "react";
import './Likes.css';

function LikeButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
  <button className="likeButton" onClick={handleClick}>
    ♥ {count}
    </button>
    );
}
function Likes() {
    return (
      <div className="Likes">
          <LikeButton />
      </div>
    );
  }
export default Likes;