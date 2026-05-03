import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16">
          <div className="container max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Mentions légales</h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Éditeur du site</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>Reste Chez Toi</strong><br />
                  Chef à domicile - Cuisine bistronomique<br />
                  Lausanne, Suisse
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Contact</h2>
                <p className="text-lg text-muted-foreground">
                  Email : contact@restecheztoi.com<br />
                  Instagram : @restecheztoi.m
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Hébergement</h2>
                <p className="text-lg text-muted-foreground">
                  Ce site est hébergé par un prestataire d'hébergement web professionnel.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Propriété intellectuelle</h2>
                <p className="text-lg text-muted-foreground">
                  L'ensemble de ce site relève de la législation suisse et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Crédits</h2>
                <p className="text-lg text-muted-foreground">
                  Photographies : Reste Chez Toi<br />
                  Conception et développement : Reste Chez Toi
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
