import LibraryPageView from "../Book/LibraryPageView";
import { useOutletContext } from "react-router-dom";
import { BookContext } from "../../types";

const LibraryPage = () => {
  const { books, authenticatedUser }: BookContext = useOutletContext();

  if (!authenticatedUser) {
    //si l'utilisateur n'est pas connecté, on affiche un message
    return (
      <div>
        <p>Vous devez être connecté pour accéder à cette page.</p>
      </div>
    );
  }

  return (
    <div>
      <LibraryPageView books={books} /> {/*on affiche la liste des livres*/}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default LibraryPage;
