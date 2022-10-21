import React, { useState } from "react";
import { FcLike, FcDislike } from "react-icons/fc";

const Like = () => {
  const [Like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleLike = () => {
    setLike((prev) => prev + 1);
  };

  const handleDislike = () => {
    setDislike((prev) => prev + 1);
  };
  return (
    <>
      <div className="like-div">
        <h3 className="likes-clicker" onClick={handleLike}>
          <FcLike className="like-icon" />
          {Like}
        </h3>
      </div>
      <div className="like-div">
        <h3 className="Dislikes-clicker" onClick={handleDislike}>
          <FcDislike />
          {dislike}
        </h3>
      </div>
    </>
  );
};

export default Like;
