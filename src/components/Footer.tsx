import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">MJ Web Tec</h3>
          <p className="text-gray-400">
            Votre partenaire digital pour des solutions web innovantes et performantes.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-primary" />
              <a href="mailto:info@jmwebtec.com" className="text-gray-400 hover:text-white transition-colors">
                info@jmwebtec.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-primary" />
              <a href="tel:+41791234567" className="text-gray-400 hover:text-white transition-colors">
                +41 79 123 45 67
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={20} className="text-primary" />
              <span className="text-gray-400">Strasse 6, 3008 Berne</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                Création de sites web
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                Référencement SEO
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                Marketing Digital
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Légal</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/confidentialite" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} MJ Web Tec. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;