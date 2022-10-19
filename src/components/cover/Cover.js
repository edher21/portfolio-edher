import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Edher Diaz</h1>
      <p>Energy Engineer | Data Engineer | Googler </p>
    </div>
  );
};

export default Cover;
