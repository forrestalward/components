import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="now"
        commentText="Test"
        image={faker.image.image()}
      />
      <CommentDetail
        author="Sam"
        timeAgo="now"
        commentText="Test"
        image={faker.image.image()}
      />
      <CommentDetail
        author="Sam"
        timeAgo="now"
        commentText="Test"
        image={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
