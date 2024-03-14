import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";

// import fantasy from "./data/fantasy.json";

const BookList = function (props) {
  return (
    <Container>
      <Row className="gy-3">
        {props.arrayOfBooks.map((oneBook) => {
          return (
            <Col key={oneBook.asin} xs={12} md={4} lg={3}>
              <SingleBook book={oneBook} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default BookList;
