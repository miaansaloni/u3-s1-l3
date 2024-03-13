import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import Container from "react-bootstrap/Container";
import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";
import history from "./data/history.json";
import romance from "./data/romance.json";
import scifi from "./data/horror.json";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <SingleBook book={history[0]} />
        {/* <AllTheBooks /> */}
        <BookList arrayOfBooks={history} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
