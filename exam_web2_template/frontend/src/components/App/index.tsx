//--------IMPORTS---------//
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import {
  AuthenticatedUser,
  MaybeAuthenticatedUser,
  Book,
  BookContext,
  User,
} from "../../types";
import { fetchBooks } from "../../utils/book-service";
import {
  clearAuthenticatedUser,
  getAuthenticatedUser,
  storeAuthenticatedUser,
} from "../../utils/session";

//--------COMPOSANT---------//
const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [authenticatedUser, setAuthenticatedUser] =
    useState<MaybeAuthenticatedUser>(undefined);

  const initBooks = async () => {
    //fonction pour récupérer les livres (fait appel à fetchBooks)
    try {
      const books = await fetchBooks();
      setBooks(books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Le useEffect avec un tableau de dépendances vide ne
  // s'exécute qu'une seule fois au montage du composant
  useEffect(() => {
    const user = getAuthenticatedUser();
    if (user) {
      setAuthenticatedUser(user);
    }
  }, []);

  // Le useEffect avec un tableau de dépendances contenant authenticatedUser
  // s'exécute à chaque fois que authenticatedUser change
  useEffect(() => {
    if (authenticatedUser) {
      initBooks();
    }
  }, [authenticatedUser]);

  // Fonction pour se connecter
  const loginUser = async (user: User) => {
    try {
      const options = {
        // options pour la requête fetch (IMPORTANT)
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        "http://localhost:3000/auths/login", //on aurait pu mettre /api/auths/login
        options
      );

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const authenticatedUser: AuthenticatedUser = await response.json(); //on récupère le token et le username
      console.log("authenticatedUser: ", authenticatedUser);

      setAuthenticatedUser(authenticatedUser); //on met à jour le state
      storeAuthenticatedUser(authenticatedUser); //on stocke le token et le username dans le localStorage
    } catch (err) {
      console.error("loginUser::error: ", err);
      throw err;
    }
  };

  const clearUser = () => {
    clearAuthenticatedUser(); //on supprime le token et le username du localStorage
    setAuthenticatedUser(undefined); //on met à jour le state
  };

  const bookContext: BookContext = {
    //on crée un objet bookContext qui contient les fonctions et les states
    books,
    loginUser,
    authenticatedUser,
    clearUser,
  };

  return (
    <div>
      <Header>
        <NavBar />
      </Header>

      <main className="page-content">
        <Outlet context={bookContext} />
      </main>

      <Footer>
        <p>Bastien Joyeau</p> {/* Bastien Joyeau est l'auteur de ce site */}
      </Footer>
    </div>
  );
};

export default App;
