import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

// import fantasy from "./data/fantasy.json";

const BookList = function (props) {
  return (
    <Container>
      <Row className="g-2">
        {props.arrayOfBooks.map((b) => {
          return (
            <Col xs={12} md={4} key={b.asin}>
              <SingleBook book={b} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default BookList;
