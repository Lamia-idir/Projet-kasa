/* eslint-env jest */
import { render, screen, fireEvent } from "@testing-library/react";
import Slidshow from "../Components/Slidshow";

describe("Slidshow", () => {
  test("retourne null si pictures est vide", () => {
    const { container } = render(<Slidshow pictures={[]} />);
    expect(container.firstChild).toBeNull();
  });

  test("affiche la première image et pas les flèches si une seule image", () => {
    render(<Slidshow pictures={["img1.jpg"]} />);

    // Image affichée
    const img = screen.getByRole("img", { name: /logement/i });
    expect(img).toHaveAttribute("src", "img1.jpg");

    // Pas de compteur ni flèches si total === 1
    expect(screen.queryByText("1/1")).toBeNull();
    expect(document.querySelector(".slidshow__arrow.left")).toBeNull();
    expect(document.querySelector(".slidshow__arrow.right")).toBeNull();
  });

  test("affiche les flèches et le compteur si plusieurs images", () => {
    render(<Slidshow pictures={["img1.jpg", "img2.jpg", "img3.jpg"]} />);

    expect(screen.getByText("1/3")).toBeInTheDocument();
    expect(document.querySelector(".slidshow__arrow.left")).toBeInTheDocument();
    expect(document.querySelector(".slidshow__arrow.right")).toBeInTheDocument();
  });

  test("clic sur next change l'image et le compteur", () => {
    render(<Slidshow pictures={["img1.jpg", "img2.jpg", "img3.jpg"]} />);

    const nextBtn = document.querySelector(".slidshow__arrow.right");
    fireEvent.click(nextBtn);

    const img = screen.getByRole("img", { name: /logement/i });
    expect(img).toHaveAttribute("src", "img2.jpg");
    expect(screen.getByText("2/3")).toBeInTheDocument();
  });

  test("next depuis la dernière image revient à la première (boucle)", () => {
    render(<Slidshow pictures={["img1.jpg", "img2.jpg"]} />);

    const nextBtn = document.querySelector(".slidshow__arrow.right");
    const img = screen.getByRole("img", { name: /logement/i });

    fireEvent.click(nextBtn); // 2/2
    expect(img).toHaveAttribute("src", "img2.jpg");
    expect(screen.getByText("2/2")).toBeInTheDocument();

    fireEvent.click(nextBtn); // revient 1/2
    expect(img).toHaveAttribute("src", "img1.jpg");
    expect(screen.getByText("1/2")).toBeInTheDocument();
  });

  test("prev depuis la première image va à la dernière (boucle)", () => {
    render(<Slidshow pictures={["img1.jpg", "img2.jpg", "img3.jpg"]} />);

    const prevBtn = document.querySelector(".slidshow__arrow.left");
    fireEvent.click(prevBtn);

    const img = screen.getByRole("img", { name: /logement/i });
    expect(img).toHaveAttribute("src", "img3.jpg");
    expect(screen.getByText("3/3")).toBeInTheDocument();
  });
});
