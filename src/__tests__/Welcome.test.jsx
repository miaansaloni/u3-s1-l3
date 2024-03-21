import Welcome from "./components/Welcome";
import { render, screen } from "@testing-library/react";

// Verifica che il componente Welcome venga montato correttamente.
it("renders learn react link", () => {
  render(<Welcome />);
  const welcomeElement = screen.getByText(/welcome back!/i); // /  /i non tiene conto delle maiuscole/minuscole
  expect(welcomeElement).toBeInTheDocument();
});
