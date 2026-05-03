import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useMenus } from "@/hooks/useMenu";
import { urlForImageSized } from "@/lib/sanity";
import {
  DEFAULT_MENU_IMAGES,
  DEFAULT_MENU_LIST,
} from "@/lib/defaultMenus";
import type { SanityMenu } from "@/lib/sanity";

const SLUG_TO_URL: Record<SanityMenu["slug"], string> = {
  decouverte: "/menu-decouverte",
  classique: "/menu-classique",
  hautdegamme: "/menu-hautdegamme",
};

export default function NosMenus() {
  const { menus, isLoading } = useMenus();
  const list = menus.length > 0 ? menus : DEFAULT_MENU_LIST;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container text-center">
            <p className="text-primary text-xl font-medium mb-3">Simple et efficace</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-5">
              Découvrez nos menus
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trois expériences culinaires à savourer chez vous
            </p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container">
            {isLoading && menus.length === 0 ? (
              <div className="text-center text-muted-foreground py-12">
                Chargement des menus...
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
                {list.map((menu, idx) => {
                  const isFeatured = menu.slug === "classique";
                  const thumbUrl =
                    urlForImageSized(menu.thumbnailImage, 800, 600) ||
                    DEFAULT_MENU_IMAGES[menu.slug].thumbnail;
                  const linkHref = SLUG_TO_URL[menu.slug] || "#";
                  return (
                    <Card
                      key={menu._id || idx}
                      className={
                        isFeatured
                          ? "border-2 border-primary shadow-xl hover:shadow-2xl transition-shadow overflow-hidden"
                          : "border-2 border-border shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                      }
                    >
                      <div className="relative h-48">
                        <img
                          src={thumbUrl}
                          alt={menu.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-foreground">
                          {menu.title}
                        </h3>
                        {menu.subtitle && (
                          <p className="text-lg text-muted-foreground mb-5">
                            {menu.subtitle}
                          </p>
                        )}
                        <div className="mb-5">
                          <span className="text-4xl font-bold text-primary">
                            {menu.price} CHF
                          </span>
                        </div>
                        <Link href={linkHref}>
                          <Button className="w-full rounded-full text-lg h-12">
                            Découvrir
                          </Button>
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

        <section className="py-16 bg-background">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Prêt à réserver ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Choisissez votre menu et réservez dès maintenant votre chef à domicile.
            </p>
            <Link href="/reservation">
              <Button size="lg" className="rounded-full px-10 text-lg h-14">
                Réserver maintenant
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
