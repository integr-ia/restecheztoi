import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Award, Users, MessageCircle } from "lucide-react";

export default function APropos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container text-center">
            <p className="text-primary text-xl font-medium mb-3">Notre passion</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-5">Notre histoire</h1>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container max-w-5xl">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                Reste Chez Toi est né d'une idée simple : offrir l'excellence culinaire sans quitter le confort de son foyer.
              </p>
              <p>
                Derrière cette aventure, il y a Malik, un chef passionné qui a appris à cuisiner dès son plus jeune âge. Amoureux de la cuisine traditionnelle française, il aime repousser les frontières des saveurs pour créer des plats qui voyagent entre les terroirs d'ici et les inspirations du monde.
              </p>
              <p>
                Chaque menu qu'il conçoit est une invitation à la découverte : l'authenticité d'une recette française rencontre la modernité d'une touche d'ailleurs. Malik cuisine avec générosité, curiosité et créativité, en s'appuyant sur des produits locaux et de saison pour composer des assiettes aussi sincères que surprenantes.
              </p>
              <p className="text-xl font-bold text-foreground">
                Reste Chez Toi, c'est la bistronomie à domicile : l'alliance entre le savoir-faire d'un grand chef et l'intimité chaleureuse de votre maison.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">+20</div>
                <div className="text-lg text-muted-foreground">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">1</div>
                <div className="text-lg text-muted-foreground">Chef expert</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">4.8</div>
                <div className="text-lg text-muted-foreground">Note moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">17</div>
                <div className="text-lg text-muted-foreground">Avis clients</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Nos valeurs</h2>
            <p className="text-xl text-muted-foreground mb-12 text-center max-w-4xl mx-auto">
              Ce qui nous guide au quotidien dans notre mission de démocratiser la haute cuisine
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 border-border shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Excellence</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    La haute cuisine à domicile sans compromis. Malik sélectionne rigoureusement ses produits et travaille avec des fournisseurs locaux pour garantir une qualité exceptionnelle dans chaque assiette.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Authenticité</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Malik apporte sa touche personnelle et son histoire dans chaque création. Une cuisine sincère qui célèbre l'authenticité française tout en voyageant vers des horizons méditerranéens.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Proximité</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    L'expérience se vit chez vous, dans l'intimité de votre foyer. Nous créons des moments de partage authentiques et chaleureux.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Produits locaux</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Nous privilégions les circuits courts et les producteurs locaux pour garantir fraîcheur, qualité et respect de l'environnement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-primary text-xl font-medium mb-3">L'excellence à votre service</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Notre chef</h2>
            </div>

            <Card className="max-w-5xl mx-auto border-2 border-border shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src="/Imagechef.png" 
                    alt="Chef Malik Horchani" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-2 text-foreground">Malik Horchani</h3>
                  <p className="text-xl text-primary font-medium mb-4">Cuisine bistronomique & créativité sans frontière</p>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-base text-muted-foreground">17 avis</span>
                  </div>
                  <p className="text-base text-muted-foreground">Note 5/5</p>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    Un chef passionné par la cuisine traditionnelle française, qui sait faire parler sa créativité pour franchir les frontières du monde. Chaque plat devient une passerelle entre les terroirs d'ici et les saveurs d'ailleurs, mêlant authenticité, modernité et curiosité culinaire.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
