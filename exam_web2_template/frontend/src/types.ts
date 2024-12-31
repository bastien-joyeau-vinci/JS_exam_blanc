// Interface pour représenter un livre
interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  cover?: string; // le '?' signifie que la propriété est optionnelle
}

// Interface pour le contexte des livres
interface BookContext {
  books: Book[];
  loginUser: (user: User) => Promise<void>;
  authenticatedUser: MaybeAuthenticatedUser;
  clearUser: () => void;
}

// Interface pour représenter un utilisateur
interface User {
  username: string;
  password: string;
}

// Interface pour représenter un utilisateur authentifié
interface AuthenticatedUser {
  username: string;
  token: string;
}

// Type qui peut être un utilisateur authentifié ou non
type MaybeAuthenticatedUser = AuthenticatedUser | undefined;

// Exportation des types pour les utiliser dans d'autres fichiers
export type { Book, BookContext, User, AuthenticatedUser, MaybeAuthenticatedUser };