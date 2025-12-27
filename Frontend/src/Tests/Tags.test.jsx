import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Tags from "../Components/Tags";

describe("Tags component", () => {
  test("affiche tous les tags", () => {
    const tags = ["Mer", "Montagne", "Ville"];

    render(<Tags tags={tags} />);

    tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  test("ne plante pas quand la liste est vide", () => {
    render(<Tags tags={[]} />);
    // Aucun texte attendu, mais aucun crash non plus
    expect(true).toBe(true);
  });
});
