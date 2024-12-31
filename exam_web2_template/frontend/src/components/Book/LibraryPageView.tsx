import { Book } from "../../types";
import { useNavigate } from "react-router-dom";
import "./LibraryPageView.css";

interface BookListViewProps {
  //interface pour les props du composant
  books: Book[];
}

const LibraryPageView = ({ books }: BookListViewProps) => {
  //composant LibraryPageView qui prend en paramètre une liste de livres
  const navigate = useNavigate();

  const handleBookClick = (bookId: number) => {
    //fonction pour gérer le clic sur un livre
    navigate(`/library/${bookId}`);
  };

  return (
    <div>
      <ul className="book-list-view">
        {books.map(
          (
            book //pour chaque livre, on crée un élément de liste
          ) => (
            <li key={book.id} className="book-title">
              {book.title}
              <button onClick={() => handleBookClick(book.id)}>
                Voir plus de details
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default LibraryPageView;
