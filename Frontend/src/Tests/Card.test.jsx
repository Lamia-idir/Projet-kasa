/* eslint-env jest */

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "../Components/Card";

describe("Composant Card", () => {
  test("affiche le titre, l'image et le lien correctement", () => {
    render(
      <MemoryRouter>
        <Card
          id="abc123"
          title="Appartement cosy"
          cover="image.jpg"
        />
      </MemoryRouter>
    );

    // Vérifie le titre
    expect(screen.getByText("Appartement cosy")).toBeInTheDocument();

    // Vérifie l'image
    const image = screen.getByAltText("Appartement cosy");
    expect(image).toHaveAttribute("src", "image.jpg");

    // Vérifie le lien
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/Logement/abc123");
  });
});

