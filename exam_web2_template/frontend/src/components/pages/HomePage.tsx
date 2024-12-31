import { useOutletContext } from "react-router-dom";
import Login from "../Login/Login";
import { BookContext } from "../../types";

const HomePage = () => {
  const { clearUser, authenticatedUser }: BookContext = useOutletContext();
  return (
    <div>
      <h1>Home Page</h1>
      <Login authenticatedUser={authenticatedUser} clearUser={clearUser} /> {/*on affiche le composant Login*/}
    </div>
  );
};

export default HomePage;
