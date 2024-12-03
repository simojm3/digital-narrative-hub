import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LegalNotice = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
            <p className="mb-4">
              JM WebTec<br />
              Strasse 6<br />
              3008 Berne<br />
              Suisse
            </p>
            <p className="mb-4">
              Téléphone : +41 79 123 45 67<br />
              Email : info@jmwebtec.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Responsabilité</h2>
            <p className="mb-4">
              Conformément au droit suisse, JM WebTec s'efforce de fournir des informations exactes et à jour sur son site web. 
              Cependant, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Droit applicable et for juridique</h2>
            <p className="mb-4">
              Les présentes mentions légales sont soumises au droit suisse. Le for juridique exclusif pour tout litige est à Berne, Suisse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble du contenu de ce site (textes, images, logos, etc.) est protégé par le droit d'auteur. 
              Toute reproduction ou utilisation sans autorisation préalable est interdite.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;