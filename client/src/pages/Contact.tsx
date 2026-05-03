import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Mail, Instagram, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-5">Contactez-nous</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une question ? Un projet ? N'hésitez pas à nous contacter. Nous serons ravis d'échanger avec vous.
            </p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 border-border shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-5">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Email</h3>
                  <a href="mailto:contact@restecheztoi.com" className="text-xl text-primary hover:underline">
                    contact@restecheztoi.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-5">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <Instagram className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Instagram</h3>
                  <a href="https://instagram.com/restecheztoi.m" target="_blank" rel="noopener noreferrer" className="text-xl text-primary hover:underline">
                    @restecheztoi.m
                  </a>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-border shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-5">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Zone de service</h3>
                <p className="text-xl text-muted-foreground mb-4">
                  Nous intervenons principalement dans la région de Lausanne et ses environs.
                </p>
                <p className="text-lg text-muted-foreground">
                  Pour toute demande en dehors de cette zone, n'hésitez pas à nous contacter. Nous étudierons votre demande avec plaisir.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container text-center">
            <p className="text-primary text-xl font-medium mb-3">Parlons de votre projet autour d'un café</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Prêt à vivre l'expérience ?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Réservez dès maintenant votre chef à domicile et créez ensemble un menu sur mesure pour votre événement.
            </p>
            <Link href="/reservation">
              <Button size="lg" className="rounded-full px-10 text-lg h-14">Réserver une date</Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
