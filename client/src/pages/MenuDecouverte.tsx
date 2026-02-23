import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Leaf } from "lucide-react";

export default function MenuDecouverte() {
  const menus = [
    {
      id: 1,
      title: "Découverte Hiver",
      isVegetarian: false,
      dishes: {
        entree: "Tatin de betteraves",
        plat: "Volaille en 5 déclinaisons, accompagnement de saison",
        dessert: "Suprême de mandarine rôtie, sauce au pain d'épice",
      },
    },
    {
      id: 2,
      title: "Découverte Végétarien",
      isVegetarian: true,
      dishes: {
        entree: "Velouté de potimarron caramélisé, huile de noisettes torréfiées, pickles d'oignons",
        plat: "Risotto d'orge aux champignons, émulsion aux marrons",
        dessert: "Poire au vin rouge, crème de tofu aux noisettes",
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
            src="/menu-decouverte.png" 
            alt="Menu Découverte" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
          <div className="container h-full flex items-center justify-center relative z-10">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Menu Découverte</h1>
              <p className="text-2xl font-semibold">130 CHF • 3 plats</p>
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
                    index === 0 ? 'from-primary to-accent' : 
                    index === 1 ? 'from-accent to-primary' : 
                    'from-secondary to-primary'
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
                      {/* Entrée */}
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Entrée</h3>
                        <p className="text-muted-foreground leading-relaxed">{menu.dishes.entree}</p>
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
              Chaque menu peut être adapté selon vos préférences et restrictions alimentaires. 
              N'hésitez pas à nous contacter pour personnaliser votre expérience.
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

