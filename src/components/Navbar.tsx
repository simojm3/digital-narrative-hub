import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 border-b border-gray-100">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-2xl font-heading font-bold text-secondary">
          AgenceWeb
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-muted hover:text-secondary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            Démarrer un projet
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden">
            <div className="container py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-muted hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Démarrer un projet
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;