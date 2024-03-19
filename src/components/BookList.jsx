// import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const changeSelectedBook = (asin) => {
    setSelectedBook(asin);
  };

  return (
    <>
      <Row>
        <Col md={8}>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={4} className="text-center">
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="g-2 mt-3">
            {props.books
              .filter((b) => b.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook book={b} selectedBook={selectedBook} changeSelectedBook={changeSelectedBook} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;

// class BookList extends Component {
//   state = {
//     searchQuery: "",
//     selectedBook: null,
//   };

//   changeSelectedBook = (asin) => {
//     this.setState({
//       selectedBook: asin,
//     });
//   };

//   render() {
//     return (
//       <>
//         <Row>
//           <Col md={8}>
//             <Row className="justify-content-center mt-5">
//               <Col xs={12} md={4} className="text-center">
//                 <Form.Group>
//                   <Form.Control
//                     type="search"
//                     placeholder="Cerca un libro"
//                     value={this.state.searchQuery}
//                     onChange={(e) => this.setState({ searchQuery: e.target.value })}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row className="g-2 mt-3">
//               {this.props.books
//                 .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
//                 .map((b) => (
//                   <Col xs={12} md={4} key={b.asin}>
//                     <SingleBook
//                       book={b}
//                       selectedBook={this.state.selectedBook}
//                       changeSelectedBook={this.changeSelectedBook}
//                     />
//                   </Col>
//                 ))}
//             </Row>
//           </Col>
//           <Col md={4}>
//             <CommentArea asin={this.state.selectedBook} />
//           </Col>
//         </Row>
//       </>
//     );
//   }
// }

// export default BookList;
