import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  fetchComments = () => {
    const bookId = this.props;
    const url = `https://striveschool-api.herokuapp.com/api/comments/${bookId}`;
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYzMDA2MjcxYWZhZjAwMTkxNTY2YzEiLCJpYXQiOjE3MTA0MjQxNjIsImV4cCI6MTcxMTYzMzc2Mn0.RNE-7HV43TtMVKiVLzfMcbqzkANMYS1cEqz8uGnmO_s",
    };

    this.setState({ loading: true });

    fetch(url, { headers })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error finding comments");
        }
      })
      .then((data) => {
        this.setState({ comments: data, isLoading: false });
      })
      .catch((error) => this.setState({ isLoading: false, isError: true }));
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    const { comments, isLoading, isError } = this.state;

    return (
      <div>
        {isLoading && <p>Caricamento commenti...</p>}
        {isError && <p>Errore: {isError.message}</p>}
        {!isLoading && !isError && <CommentsList comments={comments} />}
        <AddComment bookId={this.props.bookId} onCommentAdded={this.fetchComments} />
      </div>
    );
  }
}

export default CommentArea;
