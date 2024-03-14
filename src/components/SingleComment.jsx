const SingleComment = ({ comment }) => {
  return (
    <div>
      <p>{comment.comment}</p>
      <p>Rate: {comment.rate}</p>
    </div>
  );
};

export default SingleComment;
