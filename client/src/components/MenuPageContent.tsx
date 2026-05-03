import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Crown, Leaf } from "lucide-react";
import { useMenu } from "@/hooks/useMenu";
import { urlForImageSized } from "@/lib/sanity";
import { DEFAULT_MENU_IMAGES } from "@/lib/defaultMenus";
import type { SanityMenu } from "@/lib/sanity";

interface MenuPageContentProps {
  slug: SanityMenu["slug"];
  /** Affiche une couronne (utilisé pour le menu Haut de Gamme). */
  showCrown?: boolean;
  /** Permet de surcharger le ton des couleurs des bandeaux décoratifs. */
  variantStyle?: "decouverte" | "classique" | "hautdegamme";
}

/**
 * Composant générique d'affichage d'une page de menu.
 * Tire les données depuis Sanity (avec fallback statique).
 */
export default function MenuPageContent({
  slug,
  showCrown = false,
  variantStyle = "decouverte",
}: MenuPageContentProps) {
  const { menu, isLoading } = useMenu(slug);

  const bannerUrl =
    urlForImageSized(menu.bannerImage, 1920, 600) ||
    DEFAULT_MENU_IMAGES[slug].banner;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Banner Hero */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={bannerUrl}
            alt={menu.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className={
              variantStyle === "classique"
                ? "absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                : "absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"
            }
          ></div>
          <div
            className={
              variantStyle === "classique"
                ? "container h-full flex items-end pb-12 relative z-10"
                : "container h-full flex items-center justify-center relative z-10"
            }
          >
            <div
              className={
                variantStyle === "classique"
                  ? "text-white"
                  : "text-center text-white"
              }
            >
              {showCrown ? (
                <div className="flex items-center justify-center mb-4">
                  <Crown className="h-16 w-16 text-white mr-4" />
                  <h1 className="text-5xl md:text-6xl font-bold">{menu.title}</h1>
                </div>
              ) : (
                <h1
                  className={
                    variantStyle === "classique"
                      ? "text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
                      : "text-5xl md:text-6xl font-bold mb-4"
                  }
                >
                  {menu.title}
                </h1>
              )}
              <p
                className={
                  variantStyle === "classique"
                    ? "text-2xl font-semibold text-accent drop-shadow-lg"
                    : "text-2xl font-semibold"
                }
              >
                {menu.price} CHF • {menu.servicesLabel}
              </p>
            </div>
          </div>
        </section>

        {/* Menus */}
        <section className="py-20">
          <div className="container max-w-5xl">
            {isLoading && menu.variants.length === 0 ? (
              <div className="text-center text-muted-foreground py-12">
                Chargement des menus...
              </div>
            ) : (
              <div className="space-y-12">
                {menu.variants.map((variant, index) => (
                  <Card
                    key={`${variant.title}-${index}`}
                    className={
                      showCrown
                        ? "rounded-3xl shadow-xl overflow-hidden border-2 border-primary/20"
                        : "rounded-3xl shadow-xl overflow-hidden"
                    }
                  >
                    <div
                      className={`${
                        showCrown ? "h-4" : "h-3"
                      } bg-gradient-to-r ${gradientFor(variantStyle, index)}`}
                    ></div>
                    <CardContent className="p-8 md:p-12">
                      <div
                        className={
                          showCrown
                            ? "flex items-center space-x-3 mb-8"
                            : "flex items-center justify-between mb-6"
                        }
                      >
                        {showCrown && <Crown className="h-8 w-8 text-primary" />}
                        <h2 className="text-3xl font-bold">{variant.title}</h2>
                        {!showCrown && variant.isVegetarian && (
                          <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full">
                            <Leaf className="h-5 w-5" />
                            <span className="font-semibold">Végétarien</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-6">
                        {variant.courses.map((course, idx) => (
                          <div key={`${course.name}-${idx}`}>
                            <h3 className="text-lg font-bold text-primary mb-2">
                              {course.name}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {course.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Note */}
        {menu.footerNote && (
          <section
            className={
              showCrown
                ? "py-12 bg-gradient-to-br from-primary/5 to-accent/5"
                : "py-12 bg-muted/30"
            }
          >
            <div className="container text-center max-w-3xl">
              {showCrown && (
                <Crown className="h-12 w-12 text-primary mx-auto mb-4" />
              )}
              <p
                className={
                  showCrown
                    ? "text-lg text-muted-foreground leading-relaxed"
                    : "text-lg text-muted-foreground leading-relaxed"
                }
              >
                {menu.footerNote}
              </p>
            </div>
          </section>
        )}

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

function gradientFor(
  variantStyle: "decouverte" | "classique" | "hautdegamme",
  index: number
): string {
  if (variantStyle === "hautdegamme") {
    return index === 0
      ? "from-secondary via-primary to-accent"
      : "from-accent via-primary to-secondary";
  }
  if (variantStyle === "classique") {
    return index === 0
      ? "from-accent to-primary"
      : index === 1
        ? "from-primary to-accent"
        : "from-secondary to-accent";
  }
  // decouverte
  return index === 0
    ? "from-primary to-accent"
    : index === 1
      ? "from-accent to-primary"
      : "from-secondary to-primary";
}
