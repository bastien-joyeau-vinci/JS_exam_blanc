import { AuthenticatedUser, MaybeAuthenticatedUser } from "../types";

// Fonction pour stocker l'utilisateur authentifié dans le localStorage
const storeAuthenticatedUser = (authenticatedUser: AuthenticatedUser) => {
  localStorage.setItem("authenticatedUser", JSON.stringify(authenticatedUser));
};

// Fonction pour récupérer l'utilisateur authentifié du localStorage
const getAuthenticatedUser = (): MaybeAuthenticatedUser => {
  const authenticatedUser = localStorage.getItem("authenticatedUser");

  if (!authenticatedUser) return undefined;

  return JSON.parse(authenticatedUser);
};

// Fonction pour supprimer l'utilisateur authentifié du localStorage
const clearAuthenticatedUser = () => {
  localStorage.removeItem("authenticatedUser");
};

export { storeAuthenticatedUser, getAuthenticatedUser, clearAuthenticatedUser };
