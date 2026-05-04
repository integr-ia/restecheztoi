import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Truck, ChefHat, CalendarDays, UtensilsCrossed, Clock } from "lucide-react";
import { useDeliveryService } from "@/hooks/useDeliveryService";
import { useWeeklyMenus } from "@/hooks/useWeeklyMenus";
import type { DailyMeal } from "@/lib/sanity";

const STEP_ICONS: Record<number, ReactNode> = {
  0: <ChefHat className="w-8 h-8 text-primary" />,
  1: <CalendarDays className="w-8 h-8 text-primary" />,
  2: <Truck className="w-8 h-8 text-primary" />,
  3: <UtensilsCrossed className="w-8 h-8 text-primary" />,
};

function WeekColumn({
  label,
  meals,
}: {
  label: string;
  meals: DailyMeal[];
}) {
  return (
    <Card className="border-2 border-border shadow-lg h-full">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-4 pb-3 border-b border-border">
          {label}
        </h3>
        <ul className="space-y-4">
          {meals.map((meal) => (
            <li key={meal.day} className="flex gap-3">
              <span className="text-primary font-semibold w-24 shrink-0 pt-0.5">
                {meal.day}
              </span>
              <div>
                <p className="text-foreground font-medium leading-snug">{meal.dish}</p>
                {meal.description && (
                  <p className="text-sm text-muted-foreground mt-0.5">{meal.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function Livraison() {
  const { deliveryService, isLoading: loadingService } = useDeliveryService();
  const { weeklyMenus, isLoading: loadingMenus } = useWeeklyMenus();

  const isLoading = loadingService || loadingMenus;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="py-20 bg-background">
          <div className="container text-center max-w-4xl">
            <p className="text-primary text-xl font-medium mb-3">Livraison · Lausanne</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-5 leading-tight">
              {deliveryService.title}
            </h1>
            {deliveryService.tagline && (
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {deliveryService.tagline}
              </p>
            )}
            {/* Prix mis en avant */}
            <div className="inline-flex flex-col items-center bg-primary/10 border-2 border-primary/20 rounded-2xl px-8 py-5 mb-8 gap-1">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-primary">
                  {deliveryService.pricePerMeal} CHF
                </span>
              </div>
              <span className="text-base font-medium text-muted-foreground">
                1 plat du jour livré à domicile
              </span>
            </div>
            <p className="text-base text-muted-foreground">
              2 services par semaine · Lundi & Mercredi · Produits frais, fait maison
            </p>
          </div>
        </section>

        {/* ── Comment ça marche ── */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-primary text-xl font-medium mb-3">Simple et rapide</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Comment ça marche
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {deliveryService.howItWorks.map((step, index) => (
                <Card
                  key={index}
                  className="relative border-2 border-border shadow-lg text-center"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-base shadow-md">
                    {index + 1}
                  </div>
                  <CardContent className="pt-8 pb-6 px-5">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        {/* Affiche l'icône emoji du CMS ou l'icône Lucide par défaut */}
                        {step.icon ? (
                          <span className="text-3xl" role="img" aria-hidden>
                            {step.icon}
                          </span>
                        ) : (
                          STEP_ICONS[index] ?? <UtensilsCrossed className="w-8 h-8 text-primary" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comment commander ── */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-primary text-xl font-medium mb-3">2 services par semaine</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Comment commander
              </h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                Choisissez votre créneau et envoyez votre commande avant la deadline — on s'occupe du reste.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {deliveryService.deliverySchedule.map((slot) => (
                <Card
                  key={slot.deliveryDay}
                  className="border-2 border-primary/30 shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Truck className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-0.5">
                          Livraison
                        </p>
                        <h3 className="text-2xl font-bold text-foreground">
                          {slot.deliveryDay}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-primary/5 border border-primary/15 rounded-xl px-4 py-3 mb-4">
                      <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <p className="text-base text-foreground font-medium">
                        Commande à passer avant le{" "}
                        <span className="text-primary font-bold">{slot.orderDeadline}</span>
                      </p>
                    </div>
                    {slot.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {slot.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">
              Pour commander, envoyez un email avec les jours souhaités, le nombre de repas et votre adresse.
            </p>
          </div>
        </section>

        {/* ── Menus spécialisés ── */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-primary text-xl font-medium mb-3">Un besoin particulier ?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Menus personnalisés
              </h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                Le chef adapte chaque repas à vos besoins spécifiques.
              </p>
            </div>

            {deliveryService.specializedMenus && deliveryService.specializedMenus.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {deliveryService.specializedMenus.map((item, index) => (
                  <Card key={index} className="border-2 border-border shadow-lg text-center">
                    <CardContent className="pt-8 pb-6 px-6">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-3xl" role="img" aria-hidden>
                            {item.icon}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Menus de la semaine ── */}
        {!isLoading && weeklyMenus && (
          <section className="py-16 bg-background border-t border-border">
            <div className="container">
              <div className="text-center mb-12">
                <p className="text-primary text-xl font-medium mb-3">Fraîcheur garantie</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Menus de la semaine
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <WeekColumn label={weeklyMenus.currentWeekLabel} meals={weeklyMenus.currentWeek} />
                <WeekColumn label={weeklyMenus.nextWeekLabel} meals={weeklyMenus.nextWeek} />
              </div>
            </div>
          </section>
        )}

        {/* ── Contact / Commander ── */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container text-center max-w-2xl">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Prêt à commander ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Envoyez-nous un email avec les jours souhaités, le nombre de repas et votre adresse de livraison. Nous vous confirmons votre commande rapidement.
            </p>
            <a href={`mailto:${deliveryService.contactEmail ?? "contact@restecheztoi.com"}`}>
              <Button size="lg" className="rounded-full px-10 text-lg h-14">
                Commander par email
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-6">
              {deliveryService.contactEmail ?? "contact@restecheztoi.com"}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
