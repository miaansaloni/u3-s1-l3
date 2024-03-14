import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { selected } = this.state;
    const { book } = this.props;

    return (
      <div>
        <Card
          className="book-cover d-flex flex-column h-100"
          onClick={() => this.setState({ selected: !selected })}
          style={{ border: selected ? "3px solid red" : "none" }}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price}$</Card.Text>
          </Card.Body>
        </Card>
        {selected && <CommentArea bookId={this.props.bookId} />}
      </div>
    );
  }
}

export default SingleBook;
