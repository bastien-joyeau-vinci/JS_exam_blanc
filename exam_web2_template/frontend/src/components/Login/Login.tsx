import { useState, SyntheticEvent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { BookContext, MaybeAuthenticatedUser } from "../../types";

interface LoginProps {
  //interface pour les props du composant
  authenticatedUser: MaybeAuthenticatedUser;
  clearUser: () => void;
}

// Composant Login
const Login = ({ authenticatedUser, clearUser }: LoginProps) => {
  const { loginUser }: BookContext = useOutletContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await loginUser({ username, password });
    } catch (err) {
      console.error("LoginPage::error: ", err);
    }
  };

  const handleUsernameInputChange = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setUsername(input.value);
  };

  const handlePasswordChange = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setPassword(input.value);
  };

  return (
    <div>
      {authenticatedUser ? (
        <div>
          <h1>Bienvenue, {authenticatedUser.username}</h1>
          <a
            href="/"
            onClick={(e) => {
              //fonction pour gérer le clic sur le lien 'se déconnecter'
              e.preventDefault();
              clearUser();
              navigate("/");
            }}
          >
            Logout
          </a>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              value={username}
              type="text"
              id="username"
              name="username"
              onChange={handleUsernameInputChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="text"
              id="password"
              name="password"
              onChange={handlePasswordChange}
              required
            />
            <button type="submit">S'authentifier</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
