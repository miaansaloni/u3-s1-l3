import React, { Component } from "react";
import Card from "react-bootstrap/Card";

// const SingleBook = function (props) {
//   return (
//     <Card className="book-cover d-flex flex-column">
//       <Card.Body>
//         <Card.Img variant="top" src={props.book.img} />
//         <Card.Title>{props.book.title}</Card.Title>
//       </Card.Body>
//     </Card>
//   );
// };
// export default SingleBook;

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    this.setState(({ selected }) => ({ selected: !selected }));
  };

  render() {
    const book = this.props.book;
    const selected = this.state.selected;

    const cardStyle = {
      border: selected ? "2px solid red" : "none",
    };

    return (
      <Card className="book-cover d-flex flex-column" style={cardStyle} onClick={this.handleClick}>
        <Card.Body>
          <Card.Img variant="top" src={book.img} />
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
