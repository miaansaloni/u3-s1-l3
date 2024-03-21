// Import necessari per il testing
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "./BookList";
import CommentArea from "./CommentArea";

describe("bookList component behavior", () => {
  //2) Verifica che vengano effettivamente renderizzate tante bootstrap
  //cards quanti sono i libri nel file json utilizzato.
  it("should render correct number of bootstrap cards", async () => {
    render(<BookList />);
    const cards = await screen.findAllByTestId("list-element");
    expect(cards.length).toHaveLength(150);
  });

  //3) Verifica che il componente CommentArea venga renderizzato correttamente.
  it("should render commentarea component correctly", () => {
    render(<CommentArea />);
    const commentArea = screen.getByTestId("comment-area");
    expect(commentArea).toBeInTheDocument();
  });

  //4) Verifica, magari con più tests, che il filtraggio dei libri
  // tramite navbar si comporti come previsto.
  it("renders input field at launch", () => {
    render(<BookList />);
    const searchField = screen.getByPlaceholderText(/cerca un libro/i);
    expect(searchField).toBeInTheDocument();
  });

  //inserendo "" nel campo di ricerca, otteniamo una lista con esattamente UN elemento
  it('creates a list with just 1 user after waiting for the fetch the complete and writing "kurtis" in the search field', async () => {
    render(<BookList />);
    const searchField = screen.getByPlaceholderText(/cerca un libro/i);
    // dobbiamo scrivere "kurtis" dentro l'input field
    fireEvent.change(searchField, { target: { value: "the night angel" } }); // cambio l'input value del target
    const userslist = await screen.findAllByTestId("list-element"); // deve essere una array con UN elemento
    expect(userslist).toHaveLength(1);
  });

  //5) Verifica che, cliccando su un libro, il suo bordo cambi colore.
  it("should change border color when clicking on a book", () => {
    render(<BookList />);
    const bookCover = screen.getByAltText("Book Cover");
    fireEvent.click(bookCover);
    expect(bookCover).toHaveClass("3px solid red");
  });

  //6) Verifica che, cliccando su di un secondo libro dopo il primo,
  // il bordo del primo libro ritorni normale.
  it("should reset border color when clicking on another book", () => {
    render(<BookList />);
    const bookCover1 = screen.getByAltText("Book Cover");
    const bookCover2 = screen.getByAltText("Book Cover");
    fireEvent.click(bookCover1);
    fireEvent.click(bookCover2);
    expect(bookCover1).not.toHaveClass("3px solid red");
    expect(bookCover2).toHaveClass("3px solid red");
  });
});
