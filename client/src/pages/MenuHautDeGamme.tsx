import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Crown } from "lucide-react";

export default function MenuHautDeGamme() {
  const menus = [
    {
      id: 1,
      title: "Proposition 1",
      dishes: {
        amuse1: "Pomme de terre soufflée, sauce fromagère au lard",
        amuse2: "Panna cotta de persil",
        entree1: "Crème brûlée au foie gras",
        entree2: "Bisque d'écrevisse, gel pamplemousse, tuile au piment",
        plat1: "Croustillant de bœuf, légumes laqués, crème moutarde thym miel, déclinaison de pommes de terre",
        plat2: "Grenadin de veau en 2 cuissons",
        dessert: "Truffé aux agrumes",
      },
    },
    {
      id: 2,
      title: "Proposition 2",
      dishes: {
        amuse1: "Galette de risotto, mousse de langoustines",
        amuse2: "Pressé d'hiver",
        entree1: "Rillettes de porc rôti, croustillant de brebis, sauce tabac/chocolat",
        entree2: "Raviole secrète",
        plat1: "Barbu flambé, pommes de terre fondantes",
        plat2: "Lièvre à la royale, gratin dauphinois, déclinaisons de légumes racines",
        dessert: "Île flottante",
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Banner Hero */}
        <section className="relative h-96 overflow-hidden">
          <img 
            src="/menu-haut-de-gamme.png" 
            alt="Menu Haut de Gamme" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
          <div className="container h-full flex items-center justify-center relative z-10">
            <div className="text-center text-white">
              <div className="flex items-center justify-center mb-4">
                <Crown className="h-16 w-16 text-white mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">Menus Haut de Gamme</h1>
              </div>
              <p className="text-2xl font-semibold text-white">280 CHF • 7 services</p>
            </div>
          </div>
        </section>

        {/* Menus */}
        <section className="py-20">
          <div className="container max-w-5xl">
            <div className="space-y-12">
              {menus.map((menu, index) => (
                <Card key={menu.id} className="rounded-3xl shadow-xl overflow-hidden border-2 border-primary/20">
                  <div className={`h-4 bg-gradient-to-r ${
                    index === 0 ? 'from-secondary via-primary to-accent' : 
                    'from-accent via-primary to-secondary'
                  }`}></div>
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-center space-x-3 mb-8">
                      <Crown className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-bold">{menu.title}</h2>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Amuse-bouche 1 */}
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Amuse-bouche 1</h3>
                        <p className="text-muted-foreground leading-relaxed">{menu.dishes.amuse1}</p>
                      </div>
                      
                      {/* Amuse-bouche 2 */}
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Amuse-bouche 2</h3>
                        <p className="text-muted-foreground leading-relaxed">{menu.dishes.amuse2}</p>
                      </div>
                      
                      {/* Entrée 1 */}
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Entrée 1</h3>
                        <p className="text-muted-foreground leading-relaxed">{menu.dishes.entree1}</p>
                      </div>
                      
                      {/* Entrée 2 */}
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Entrée 2</h3>
                        <p className="text-muted-foreground leading-relaxed">{menu.dishes.entree2}</p>
                      </div>
                      
                      {/* Plat 1 */}
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Plat 1</h3>
                        <p className="text-muted-foreground leading-relaxed">{menu.dishes.plat1}</p>
                      </div>
                      
                      {/* Plat 2 */}
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Plat 2</h3>
                        <p className="text-muted-foreground leading-relaxed">{menu.dishes.plat2}</p>
                      </div>
                      
                      {/* Dessert */}
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Dessert</h3>
                        <p className="text-muted-foreground leading-relaxed">{menu.dishes.dessert}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container text-center max-w-3xl">
            <Crown className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              <span className="font-bold text-foreground">Une expérience gastronomique d'exception</span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nos menus haut de gamme représentent le summum de l'art culinaire. 
              Chaque plat est une œuvre d'art, créée avec des produits d'exception et un savoir-faire unique.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12">
          <div className="container flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/nos-menus">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Retour aux menus
              </Button>
            </Link>
            <Link href="/reservation">
              <Button size="lg" className="rounded-full px-8">
                Réserver ce menu
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

