import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Confidentialite() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16">
          <div className="container max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Politique de confidentialité</h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Collecte des données</h2>
                <p className="text-lg text-muted-foreground">
                  Nous collectons uniquement les informations nécessaires à la fourniture de nos services : nom, prénom, adresse email, numéro de téléphone et adresse de prestation.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Utilisation des données</h2>
                <p className="text-lg text-muted-foreground">
                  Vos données personnelles sont utilisées exclusivement pour :
                </p>
                <ul className="list-disc pl-6 text-lg text-muted-foreground space-y-2">
                  <li>La gestion de vos réservations</li>
                  <li>La communication relative à nos services</li>
                  <li>L'amélioration de nos prestations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Protection des données</h2>
                <p className="text-lg text-muted-foreground">
                  Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Vos droits</h2>
                <p className="text-lg text-muted-foreground">
                  Conformément à la législation suisse sur la protection des données, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à l'adresse : contact@restecheztoi.com
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Cookies</h2>
                <p className="text-lg text-muted-foreground">
                  Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de tracking ou publicitaire n'est utilisé.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
