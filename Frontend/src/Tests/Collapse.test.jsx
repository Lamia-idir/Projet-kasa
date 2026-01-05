
// src/Tests/Collapse.test.jsx

import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Collapse from "../Components/Collapse";

describe("Collapse component", () => {
  test("affiche le titre", () => {
    render(<Collapse title="Description" content="Contenu test" />);
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  test("collapse est fermé par défaut (pas de classe open sur le contenu)", () => {
    const { container } = render(
      <Collapse title="Description" content="Contenu test" />
    );

    const content = container.querySelector(".collapse__content");
    expect(content).toBeInTheDocument();
    expect(content).not.toHaveClass("open");  // par defaut fermee
  });

  test("ouvre le contenu au clic (classe open ajoutée)", () => {
    const { container } = render(
      <Collapse title="Description" content="Contenu test" />
    );

    const button = screen.getByRole("button", { name: /description/i });
    fireEvent.click(button);

    const content = container.querySelector(".collapse__content");
    expect(content).toHaveClass("open");
  });

  test("ferme le contenu au second clic (classe open retirée)", () => {
    const { container } = render(
      <Collapse title="Description" content="Contenu test" />
    );

    const button = screen.getByRole("button", { name: /description/i });
    fireEvent.click(button); // ouvre
    fireEvent.click(button); // ferme

    const content = container.querySelector(".collapse__content");
    expect(content).not.toHaveClass("open");
  });

  test("affiche le contenu dans le DOM (contentInner contient le texte)", () => {
    render(<Collapse title="Description" content="Contenu test" />);
    expect(screen.getByText("Contenu test")).toBeInTheDocument();
  });
});

