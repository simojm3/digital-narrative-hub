import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Politique de confidentialité</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Protection des données</h2>
            <p className="mb-4">
              Conformément à la Loi fédérale sur la protection des données (LPD) et au Règlement général sur la protection des données (RGPD), 
              nous nous engageons à protéger la confidentialité de vos données personnelles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Collecte des données</h2>
            <p className="mb-4">
              Nous collectons uniquement les données personnelles que vous nous fournissez volontairement via notre formulaire de contact 
              ou lors de votre interaction avec notre site web. Ces données peuvent inclure :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Message ou demande spécifique</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Utilisation des données</h2>
            <p className="mb-4">
              Vos données personnelles sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Répondre à vos demandes de contact</li>
              <li>Vous fournir les services demandés</li>
              <li>Améliorer notre site web et nos services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
            <p className="mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. 
              Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Vos droits</h2>
            <p className="mb-4">
              Conformément à la LPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. 
              Pour exercer ces droits, contactez-nous à info@jmwebtec.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Modifications</h2>
            <p className="mb-4">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Les modifications entrent en vigueur dès leur publication sur ce site.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;