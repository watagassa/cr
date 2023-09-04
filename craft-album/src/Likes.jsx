/* App.tsx */
import React, { useState } from "react";
import './Likes.css';

function LikeButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
  <span className="likeButton" onClick={handleClick}>
    ♥ {count}
    </span>
    );
}
function Likes() {
    return (
      <div className="Likes">
        <header className="Likes-header">
          <LikeButton />
          </header>
      </div>
    );
  }
export default Likes;