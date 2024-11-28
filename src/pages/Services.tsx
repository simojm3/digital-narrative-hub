import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Globe, Search, BarChart, Users, Code, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Création de Sites Web",
      description: "Sites vitrines, e-commerce et applications web sur mesure avec les dernières technologies."
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Référencement SEO",
      description: "Optimisation pour les moteurs de recherche pour améliorer votre visibilité en ligne."
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary" />,
      title: "Marketing Digital",
      description: "Stratégies marketing complètes pour atteindre et convertir votre audience cible."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Réseaux Sociaux",
      description: "Gestion et optimisation de vos réseaux sociaux pour engager votre communauté."
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Développement Web",
      description: "Solutions web personnalisées avec les frameworks et technologies modernes."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Applications Mobile",
      description: "Développement d'applications mobiles natives et cross-platform performantes."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Des solutions digitales complètes pour faire croître votre entreprise
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 fade-in-section"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;