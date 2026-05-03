import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Calendar, ChefHat, Utensils, Star, Users, Award, MessageCircle, Sparkles, Truck } from "lucide-react";
import { useMenus } from "@/hooks/useMenu";
import { urlForImageSized, type SanityMenu } from "@/lib/sanity";
import { DEFAULT_MENU_IMAGES } from "@/lib/defaultMenus";

const SLUG_TO_URL: Record<SanityMenu["slug"], string> = {
  decouverte: "/menu-decouverte",
  classique: "/menu-classique",
  hautdegamme: "/menu-hautdegamme",
};

export default function Home() {
  const { menus, isLoading } = useMenus();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section avec image de fond */}
        <section className="relative min-h-[700px] flex items-center justify-center">
          {/* Image de fond */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/hero-bg.jpg" 
              alt="Chef en cuisine" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/75 via-background/70 to-background/75" />
          </div>
          <div className="container relative z-10 py-16">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-tight">
                Chef à domicile : vivez l'expérience{" "}
                <span className="text-primary">bistronomique</span>{" "}
                sans quitter votre chez-vous
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-7 max-w-4xl mx-auto">
                Reste Chez Toi est né d'une conviction simple : l'expérience bistronomique ne devrait pas être réservée aux restaurants étoilés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/reservation">
                  <Button size="lg" className="rounded-full px-10 text-lg h-14">
                    Réserver un chef
                  </Button>
                </Link>
                <Link href="/nos-menus">
                  <Button size="lg" variant="outline" className="rounded-full px-10 text-lg h-14 bg-transparent">
                    Découvrir
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section Comment ça marche */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-primary text-xl font-medium mb-3">Simple et efficace</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Comment ça marche</h2>
            </div>

            {/* Layout en 3 colonnes avec 2A/2B empilées au centre */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
              {/* Colonne 1: Réservez une date */}
              <Card className="relative border-2 border-border shadow-lg">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                  1
                </div>
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

              {/* Colonne 2: 2A et 2B empilées */}
              <div className="flex flex-col gap-6">
                {/* Carte 2A: Co-créez votre menu */}
                <Card className="relative border-2 border-border shadow-lg">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    2A
                  </div>
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

                {/* Carte 2B: Choisissez un menu */}
                <Card className="relative border-2 border-border shadow-lg">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    2B
                  </div>
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

              {/* Colonne 3: Profitez de votre repas */}
              <Card className="relative border-2 border-border shadow-lg">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                  3
                </div>
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

        {/* Section Le chef */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-primary text-xl font-medium mb-3">L'excellence à votre service</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Le chef</h2>
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
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                  </div>
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
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Un chef passionné par la cuisine traditionnelle française, qui sait faire parler sa créativité pour franchir les frontières du monde. Chaque plat devient une passerelle entre les terroirs d'ici et les saveurs d'ailleurs, mêlant authenticité, modernité et curiosité culinaire.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Section Découvrez nos menus */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-primary text-xl font-medium mb-3">Simple et efficace</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Découvrez nos menus</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Trois expériences culinaires à savourer chez vous
              </p>
            </div>

            {isLoading ? (
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="border-2 border-border shadow-lg overflow-hidden animate-pulse">
                    <div className="h-48 bg-muted" />
                    <CardContent className="p-6 space-y-4">
                      <div className="h-6 bg-muted rounded w-3/4" />
                      <div className="h-4 bg-muted rounded w-1/2" />
                      <div className="h-8 bg-muted rounded w-1/3" />
                      <div className="h-12 bg-muted rounded-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
                {menus.map((menu) => {
                  const isFeatured = menu.slug === "classique";
                  const imageSrc =
                    urlForImageSized(menu.thumbnailImage, 800, 600) ??
                    DEFAULT_MENU_IMAGES[menu.slug].thumbnail;
                  const linkHref = SLUG_TO_URL[menu.slug] || "#";
                  return (
                    <Card
                      key={menu._id}
                      className={
                        isFeatured
                          ? "border-2 border-primary shadow-xl hover:shadow-2xl transition-shadow overflow-hidden"
                          : "border-2 border-border shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                      }
                    >
                      <div className="relative h-48">
                        <img src={imageSrc} alt={menu.title} className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-foreground">{menu.title}</h3>
                        {menu.subtitle && (
                          <p className="text-lg text-muted-foreground mb-5">{menu.subtitle}</p>
                        )}
                        <div className="mb-5">
                          <span className="text-4xl font-bold text-primary">{menu.price} CHF</span>
                        </div>
                        <Link href={linkHref}>
                          <Button className="w-full rounded-full text-lg h-12">Découvrir</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}

            <p className="text-center text-base text-muted-foreground max-w-4xl mx-auto">
              Tous nos menus sont personnalisables selon vos préférences, allergies et restrictions alimentaires. Options végétariennes disponibles.
            </p>
          </div>
        </section>

        {/* Section Notre histoire */}
        <section className="py-16 bg-background">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-primary text-xl font-medium mb-3">Notre passion</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Notre histoire</h2>
            </div>

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

            {/* Statistiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

        {/* Section Témoignages */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-primary text-xl font-medium mb-3">Produits locaux</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Témoignages</h2>
              <p className="text-xl text-muted-foreground mt-4">Ce que nos clients disent de nous</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-border shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-muted-foreground italic mb-4 leading-relaxed">
                    "Une expérience culinaire absolument exceptionnelle. Le chef a su créer un moment magique pour notre anniversaire de mariage."
                  </blockquote>
                  <p className="text-lg font-bold text-foreground">SOPHIE & MARC L.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section Livraison de repas */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container max-w-5xl">
            <Card className="border-2 border-primary/30 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Partie gauche : icône + badge prix */}
                <div className="bg-primary/5 flex flex-col items-center justify-center p-10 gap-6">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="w-12 h-12 text-primary" />
                  </div>
                  <div className="text-center">
                    <div className="inline-flex flex-col items-center bg-primary/10 border border-primary/20 rounded-xl px-6 py-3 gap-0.5">
  