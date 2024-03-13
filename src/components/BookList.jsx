import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";

// import fantasy from "./data/fantasy.json";

const BookList = function (props) {
  return (
    <Container>
      <Row className="g-2">
        {[
          <SingleBook className="single-book" book={props.arrayOfBooks[0]} />,
          ...props.arrayOfBooks.slice(1).map((b) => <SingleBook book={b} />),
        ].map((singleBook, index) => (
          <Col xs={12} md={4} key={index}>
            {singleBook}
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default BookList;
