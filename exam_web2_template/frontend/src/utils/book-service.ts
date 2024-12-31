import { Book } from "../types";
import { getAuthenticatedUser } from "./session";

const fetchBooks = async (): Promise<Book[]> => {
  //fonction pour récupérer les livres (importée dans App/index.tsx)
  try {
    const authenticatedUser = getAuthenticatedUser(); //récupère l'utilisateur authentifié

    const response = await fetch("http://localhost:3000/books", { // on aurait pu mettre /api/books
      // ne pas oublier les options pour la requête fetch, avec le token d'authentification !
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authenticatedUser?.token || "",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch books : " + response.statusText);
    }

    const data = await response.json();
    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid data");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchBooks };
