import { useMatch, useOutletContext } from "react-router-dom";
import { BookContext } from "../../types";
import BookCard from "../Book/BookPageView";

const BookPage = () => {
  const { books }: BookContext = useOutletContext(); //on récupère les livres

  const match = useMatch("/library/:id"); //on récupère l'id du livre dans l'URL
  const bookId = Number(match?.params.id); //on convertit l'id en nombre
  if (isNaN(bookId)) return <p>Book not found</p>; //si l'id n'est pas un nombre, on affiche un message d'erreur

  const bookFound = books.find((book) => book.id === bookId); //on cherche le livre correspondant à l'id

  if (!bookFound)
    return <p>Book not found and you have to be admin for this</p>;

  return <BookCard book={bookFound} />; //on affiche le composant BookCard avec le livre trouvé
};

export default BookPage;
