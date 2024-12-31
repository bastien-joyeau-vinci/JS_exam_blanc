import path from "node:path";
import { Book } from "../types";
import { parse } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/books.json");

// Crée un tableau de livres par défaut (imaginé)
const defaultBooks: Book[] = [
  {
    id: 1,
    title: "Coca-Cola Book",
    author: "Coca-Cola",
    year: 1886,
    cover:
      "https://media.istockphoto.com/id/1289738725/fr/photo/bouteille-en-plastique-de-coke-avec-la-conception-et-le-chapeau-rouges-d%C3%A9tiquette.jpg?s=1024x1024&w=is&k=20&c=HBWfROrGDTIgD6fuvTlUq6SrwWqIC35-gceDSJ8TTP8=",
  },
  {
    id: 2,
    title: "Pepsi Book",
    author: "Pepsi",
    year: 1893,
    cover:
      "https://media.istockphoto.com/id/185268840/fr/photo/bouteille-de-cola-sur-un-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=xdsxwb4bLjzuQbkT_XvVLyBZyW36GD97T1PCW0MZ4vg=",
  },
  {
    id: 3,
    title: "Eau Minérale Book",
    author: "Eau Minérale",
    year: 2021,
    cover:
      "https://media.istockphoto.com/id/1397515626/fr/photo/verre-deau-gazeuse-%C3%A0-boire-isol%C3%A9.jpg?s=1024x1024&w=is&k=20&c=iEjq6OL86Li4eDG5YGO59d1O3Ga1iMVc_Kj5oeIfAqk=",
  },
  {
    id: 4,
    title: "Jus d'Orange Book",
    author: "Jus d'Orange",
    year: 2021,
    cover:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Limonade Book",
    author: "Limonade",
    year: 2021,
    },
];

// Lit tous les livres
function readAllBooks(): Book[] {
  const books = parse(jsonDbPath, defaultBooks);
  return books;
}

// Lit un seul livre spécifique
function readOneBook(id: number): Book | undefined {
  const books = parse(jsonDbPath, defaultBooks);
  const book = books.find((book) => book.id === id);
  if (!book) {
    return undefined;
  }
  return book;
}

export {
  readAllBooks,
  readOneBook,
};
