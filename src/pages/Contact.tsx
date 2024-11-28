import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès !");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Parlons de votre projet et voyons comment nous pouvons vous aider
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6">Nos Coordonnées</h2>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:contact@agenceweb.fr" className="text-muted hover:text-primary transition-colors">
                    contact@agenceweb.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Téléphone</h3>
                  <a href="tel:+33123456789" className="text-muted hover:text-primary transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Adresse</h3>
                  <p className="text-muted">
                    123 Avenue des Champs-Élysées<br />
                    75008 Paris, France
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-2xl">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;