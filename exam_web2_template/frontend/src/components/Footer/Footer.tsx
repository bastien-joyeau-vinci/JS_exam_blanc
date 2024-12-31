import { ReactNode } from "react";
import "./Footer.css";

interface FooterProps {
  children: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <footer>
      {children} {/* affiche le contenu de la prop children */}
    </footer>
  );
};

export default Footer;
