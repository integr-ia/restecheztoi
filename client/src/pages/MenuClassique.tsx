import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Leaf } from "lucide-react";

export default function MenuClassique() {
  const menus = [
    {
      id: 1,
      title: "Classique Hiver",
      isVegetarian: false,
      dishes: {
        amuse: "Brick d'hiver",
        entree1: "Feuilletés de magret de canard fumé et endives braisées/caramélisées",
        entree2: "Tataki de veau, réduction de marinade, purée de panais",
        plat: "Carré d'agneau en croûte d'épices, ratatouille de légumes d'hiver, pommes duchesse",
        dessert: "Déclinaisons de butternut",
      },
    },
    {
      id: 2,
      title: "Classique Végétarien",
      isVegetarian: true,
      dishes: {
        amuse: "Velouté de topinambours, éclats de noisettes et huile de persil",
        entree1: "Tartare de betterave, pomme Granny Smith et mayonnaise au raifort",
        entree2: "Feuilletés aux champignons, émulsion aux châtaignes",
        plat: "Cannelloni farci aux cardons, sauce au poivre, tuile parmesan citron",
        dessert: "Tartelettes au potimarron et à l'orange",
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Banner Hero avec Image */}
        <section className="relative h-96 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/menu-classique.jpg" 
              alt="Menu Classique - Tarte Tatin" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          </div>
          <div className="container h-full flex items-end pb-12 relative z-10">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Menus Classiques</h1>
              <p className="text-2xl font-semibold text-accent drop-shadow-lg">200 CHF • 5 services</p>
            </div>
          </div>
        </section>

        {/* Menus */}
        <section className="py-20">
          <div className="container max-w-5xl">
            <div className="space-y-12">
              {menus.map((menu, index) => (
                <Card key={menu.id} className="rounded-3xl shadow-xl overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${
                    index === 0 ? 'from-accent to-primary' : 
                    index === 1 ? 'from-primary to-accent' : 
                    'from-secondary to-accent'
                  }`}></div>
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-3xl font-bold">{menu.title}</h2>
                      {menu.isVegetarian && (
                        <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full">
                          <Leaf className="h-5 w-5" />
                          <span className="font-semibold">Végétarien</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      {/* Amuse-bouche */}
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Amuse-bouche</h3>
                        <p className="text-muted-foreground leading-relaxed">{menu.dishes.amuse}</p>
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
                      
                      {/* Plat */}
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Plat</h3>
                        <p className="text-muted-foreground leading-relaxed">{menu.dishes.plat}</p>
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
        <section className="py-12 bg-muted/30">
          <div className="container text-center max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'équilibre parfait entre tradition et créativité. Chaque menu peut être adapté selon vos préférences et restrictions alimentaires.
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

