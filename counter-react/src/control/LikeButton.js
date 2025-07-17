import React, { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(100); // Starting from 100 for demo

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleLike}>
        {liked ? 'Unlike' : 'Like'}
      </button>
      <p>Total Likes: {likesCount}</p>
    </div>
  );
}

export default LikeButton;
