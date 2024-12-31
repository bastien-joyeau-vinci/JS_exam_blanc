import "./Header.css";
import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header>
      {children} {/* affiche le contenu de la prop children */}
    </header>
  );
};

export default Header;
