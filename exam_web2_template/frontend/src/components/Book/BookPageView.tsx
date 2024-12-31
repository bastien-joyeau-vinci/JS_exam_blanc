import { Book } from "../../types";
import defaultCover from "../../assets/cover.jpg";
interface BookProps {
  book: Book;
}

const BookCard = ({ book }: BookProps) => {
  //composant BookCard qui prend en paramètre un livre
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{book.title}</h3>
        <img
          src={book.cover || defaultCover} //si book.cover est défini, on l'utilise, sinon on utilise defaultCover
          className="card-img-top"
          alt={book.title}
        />
        <p className="card-text">
          <strong>Author:</strong> {book.author}
        </p>
        <p className="card-text">
          <strong>Year:</strong> {book.year}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
