import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Reservation() {
  useEffect(() => {
    // Charger le script Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Nettoyer le script lors du démontage du composant
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Réservation</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choisissez votre date et réservez votre chef à domicile en quelques clics
            </p>
          </div>
        </section>

        {/* Widget Calendly */}
        <section className="py-16">
          <div className="container max-w-5xl">
            {/* Calendly inline widget begin */}
            <div 
              className="calendly-inline-widget rounded-2xl overflow-hidden shadow-2xl" 
              data-url="https://calendly.com/contact-restecheztoi/repas-a-domicile?background_color=f9f1e8&primary_color=d99756" 
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
            {/* Calendly inline widget end */}
          </div>
        </section>

        {/* Section informations complémentaires */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Informations pratiques</h2>
              <p className="text-muted-foreground">
                Tout ce que vous devez savoir avant de réserver
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-3">📍 Zone de service</h3>
                <p className="text-muted-foreground">
                  Lausanne et environs (jusqu'à 30 km)
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-3">⏰ Horaires</h3>
                <p className="text-muted-foreground">
                  Midi : 12h00 - 14h00<br />
                  Souper : 18h00 - 21h00
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-3">👥 Nombre de convives</h3>
                <p className="text-muted-foreground">
                  De 2 à 12 personnes<br />
                  (Plus sur demande)
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-3">💳 Paiement</h3>
                <p className="text-muted-foreground">
                  Acompte à la réservation<br />
                  Solde après le repas
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 p-8 rounded-2xl border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-center">📞 Besoin d'aide ?</h3>
              <p className="text-center text-muted-foreground mb-4">
                Une question sur votre réservation ? Contactez-nous directement :
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:contact@restecheztoi.com" 
                  className="text-primary hover:underline font-medium"
                >
                  📧 contact@restecheztoi.com
                </a>
                <span className="hidden sm:inline text-muted-foreground">•</span>
                <a 
                  href="https://www.instagram.com/restecheztoi.m/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  📱 @restecheztoi.m
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

