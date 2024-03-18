// CommentsList.js
import React from "react";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => {
  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment, i) => (
        <SingleComment key={i} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
