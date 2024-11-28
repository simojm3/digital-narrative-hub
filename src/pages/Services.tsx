import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Globe, Search, BarChart, Users, Code } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Création de Sites Web",
      description: "Sites vitrines, e-commerce et applications web sur mesure",
      details: [
        "Processus de création personnalisé et adapté à vos besoins",
        "Sites vitrines, e-commerce et applications web",
        "Technologies modernes : HTML5, CSS3, JavaScript, frameworks"
      ]
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Référencement Web (SEO/SEA)",
      description: "Optimisation pour les moteurs de recherche et publicité",
      details: [
        "Amélioration de votre visibilité en ligne",
        "Stratégies SEO personnalisées",
        "Campagnes publicitaires ciblées"
      ]
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary" />,
      title: "Marketing en Ligne",
      description: "Solutions marketing digitales complètes",
      details: [
        "Emailing professionnel",
        "Publicité en ligne optimisée",
        "Content marketing stratégique"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Gestion des Réseaux Sociaux",
      description: "Gestion et optimisation de votre présence sociale",
      details: [
        "Stratégies d'engagement personnalisées",
        "Gestion de communauté professionnelle",
        "Campagnes publicitaires sociales"
      ]
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Développement d'Applications Web",
      description: "Applications web sur mesure et performantes",
      details: [
        "Solutions personnalisées selon vos besoins",
        "Technologies modernes et performantes",
        "Suivi et maintenance continue"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-white hover:shadow-lg transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;