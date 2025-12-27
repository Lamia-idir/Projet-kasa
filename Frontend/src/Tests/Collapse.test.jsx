import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Collapse from "../Components/Collapse";
describe("Collapse component", () => {
  test("affiche le titre", () => {
    render(<Collapse title="Description" content="Contenu test" />);
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  test("ouvre le contenu au clic", () => {
    render(<Collapse title="Description" content="Contenu test" />);

    fireEvent.click(screen.getByText("Description"));
    expect(screen.getByText("Contenu test")).toBeInTheDocument();
  });

  test("ferme le contenu au second clic", () => {
    render(<Collapse title="Description" content="Contenu test" />);

    const title = screen.getByText("Description");
    fireEvent.click(title);
    fireEvent.click(title);

    expect(screen.queryByText("Contenu test")).not.toBeInTheDocument();
  });
});
