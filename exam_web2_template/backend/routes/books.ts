import { Router } from "express";
import {
  readAllBooks,
  readOneBook,
} from "../services/books";
import { authorize } from "../utils/auths";

const router = Router();

// GET /books, demande l'autorisation avant de renvoyer tous les livres
router.get("/", authorize, (_req, res) => {
  const books = readAllBooks();
  return res.json(books);
});

// GET /books/:id, demande l'autorisation avant de renvoyer le livre demandé
router.get("/:id", authorize, (req, res) => {
  const id = Number(req.params.id);
  const book = readOneBook(id);
  if (!book) {
    return res.sendStatus(404);
  }
  return res.json(book);
});

export default router;
