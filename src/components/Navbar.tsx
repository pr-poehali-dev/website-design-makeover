import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-primary">Поехали!</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <div className="flex items-center gap-2">
            <Button variant="outline">Войти</Button>
            <Button>Начать бесплатно</Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <NavLinks mobile />
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full">Войти</Button>
              <Button className="w-full">Начать бесплатно</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const links = [
    { name: "Главная", path: "/" },
    { name: "Возможности", path: "/features" },
    { name: "Цены", path: "/pricing" },
    { name: "О нас", path: "/about" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`text-foreground/80 hover:text-primary transition-colors ${
            mobile ? "py-2" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
