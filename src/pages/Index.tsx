import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Computer } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in-section').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Sites Web",
      description: "Des sites web modernes, rapides et optimisés pour convertir vos visiteurs en clients."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Applications Mobile",
      description: "Des applications mobiles natives et cross-platform pour iOS et Android."
    },
    {
      icon: <Computer className="w-8 h-8 text-primary" />,
      title: "Marketing Digital",
      description: "Stratégies marketing personnalisées pour augmenter votre visibilité en ligne."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 gradient-bg">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Créons ensemble votre succès digital
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Nous concevons des expériences numériques qui transforment votre vision en réalité.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Commencer un projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos Services
            </h2>
            <p className="text-muted text-lg">
              Des solutions sur mesure pour répondre à vos besoins digitaux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow fade-in-section"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à transformer votre présence en ligne ?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Nous contacter
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;