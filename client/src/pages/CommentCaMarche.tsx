import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Calendar, ChefHat, Utensils, MessageCircle, Users, Sparkles } from "lucide-react";

export default function CommentCaMarche() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container text-center">
            <p className="text-primary text-xl font-medium mb-3">Simple et efficace</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-5">Comment ça marche</h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Réserver un chef à domicile n'a jamais été aussi simple. Suivez ces étapes pour vivre une expérience culinaire inoubliable.
            </p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
              <Card className="relative border-2 border-border shadow-lg">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">1</div>
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-center text-foreground">Réservez une date</h3>
                  <p className="text-base text-muted-foreground text-center mb-4">
                    Choisissez le jour qui vous convient et le nombre de convives. Notre système flexible s'adapte à votre planning.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-base text-muted-foreground">
                      <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Sélectionnez votre date préférée</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-muted-foreground">
                      <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Indiquez l'heure souhaitée</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-muted-foreground">
                      <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Précisez le nombre d'invités</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex flex-col gap-6">
                <Card className="relative border-2 border-border shadow-lg">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">2A</div>
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <ChefHat className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-center text-foreground">Co-créez votre menu</h3>
                    <p className="text-base text-muted-foreground text-center mb-4">
                      Travaillez avec votre chef pour créer un menu personnalisé selon vos goûts, allergies et préférences culinaires.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-base text-muted-foreground">
                        <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Échangez directement avec le chef</span>
                      </li>
                      <li className="flex items-start gap-2 text-base text-muted-foreground">
                        <ChefHat className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Adaptez les plats à vos préférences</span>
                      </li>
                      <li className="flex items-start gap-2 text-base text-muted-foreground">
                        <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Signalez allergies et restrictions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="relative border-2 border-border shadow-lg">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">2B</div>
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Utensils className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-center text-foreground">Choisissez un menu</h3>
                    <p className="text-base text-muted-foreground text-center mb-4">
                      Ou sélectionnez directement l'un de nos menus prédéfinis. Possibilité de l'ajuster selon vos préférences.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-base text-muted-foreground">
                        <Utensils className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Menu Découverte, Classique ou Haut de Gamme</span>
                      </li>
                      <li className="flex items-start gap-2 text-base text-muted-foreground">
                        <ChefHat className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Personnalisation possible</span>
                      </li>
                      <li className="flex items-start gap-2 text-base text-muted-foreground">
                        <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Options végétariennes disponibles</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="relative border-2 border-border shadow-lg">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">3</div>
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Utensils className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-center text-foreground">Profitez de votre repas</h3>
                  <p className="text-base text-muted-foreground text-center mb-4">
                    Détendez-vous pendant que votre chef prépare un repas bistronomique dans le confort de votre maison.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-base text-muted-foreground">
                      <Utensils className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Le chef cuisine chez vous</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-muted-foreground">
                      <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Service professionnel et discret</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-muted-foreground">
                      <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Nettoyage complet inclus</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Prêt à commencer ?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Réservez dès maintenant votre chef à domicile et vivez une expérience culinaire exceptionnelle.
            </p>
            <Link href="/reservation">
              <Button size="lg" className="rounded-full px-10 text-lg h-14">Réserver maintenant</Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
