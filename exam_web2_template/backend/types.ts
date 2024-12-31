import { Request } from "express";

interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}

type NewDrink = Omit<Drink, "id">;

//-	Les livres doivent avoir comme propriétés un titre, au auteur, une année de création et un lien optionnel vers une image de couverture. Dans le cas où un livre n’a pas d’image de couverture, vous devez afficher une image par défaut à la place. Dans ce cas, vous devez utiliser le fichier cover.jpg que vous pourrez retrouver au sein du boilerplate dans le dossier ./frontend/src/asset. 
type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  cover?: string | null;
};

interface AuthenticatedUser {
  username: string;
  token: string;
}

interface User {
  id: number;
  username: string;
  password: string;
}

type PotentialUser = Omit<User, "id">;

interface AuthenticatedRequest extends Request {
  user?: User;
}

interface JwtPayload {
  username: string;
  exp: number; // Expiration time (in seconds since the epoch)
  iat: number; // Issued at time (in seconds since the epoch)
}

export type {
  Pizza,
  NewPizza,
  PizzaToUpdate,
  Drink,
  NewDrink,
  AuthenticatedUser,
  User,
  PotentialUser,
  AuthenticatedRequest,
  JwtPayload,
  Book,
};
