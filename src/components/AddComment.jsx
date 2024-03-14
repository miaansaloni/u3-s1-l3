// AddComment.js
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddComment extends Component {
  state = {
    commentText: "",
    rate: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { commentText, rate } = this.state;
    if (!commentText || !rate) return;
    this.props.onAddComment({ comment: commentText, rate: rate });
    this.setState({ commentText: "", rate: "" });
  };

  render() {
    return (
      <>
        <h3>Add a Comment</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId=""></Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              value={this.state.commentText}
              onChange={this.handleChange}
              placeholder="Write your comment here..."
              rows={3}
            />
            <input
              type="number"
              name="rate"
              value={this.state.rate}
              onChange={this.handleChange}
              min="1"
              max="5"
              placeholder="Rate"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
