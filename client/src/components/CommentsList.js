import React from "react";

const CommentsList = ({ comments }) => {
  if (!comments || !Array.isArray(comments)) {
    return (
      <div className="error-message">
        Oops! There are no comments to display.
      </div>
    );
  }

  return (
    <>
      <h3 className="sm:text-2xl text-xl font-bold my-6 text-gray-900">
        Comments:
      </h3>
      {comments.map((comment, index) => (
        <div key={index}>
          <h4 className="text-xl font-bold">{comment.username}</h4>
          <p className="mt-1 mb-4">{comment.text}</p>
        </div>
      ))}
    </>
  );
};

export default CommentsList;
