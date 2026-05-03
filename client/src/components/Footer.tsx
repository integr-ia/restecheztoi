import { Link } from "wouter";
import { Mail, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1: Logo et description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Reste Chez Toi" className="w-12 h-12 rounded-lg" />
              <span className="text-2xl font-bold text-foreground">Reste Chez Toi</span>
            </div>
            <p className="text-lg text-muted-foreground">
              L'expérience bistronomique à domicile, sans quitter le confort de votre maison.
            </p>
          </div>

          {/* Colonne 2: Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/comment-ca-marche" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="/nos-menus" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                  Nos Menus
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contact@restecheztoi.com" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                  contact@restecheztoi.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-primary" />
                <a href="https://instagram.com/restecheztoi.m" target="_blank" rel="noopener noreferrer" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                  @restecheztoi.m
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-lg text-muted-foreground">Lausanne et environs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-border my-8"></div>

        {/* Bas de page */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-muted-foreground">
            © {new Date().getFullYear()} Reste Chez Toi. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/confidentialite" className="text-base text-muted-foreground hover:text-primary transition-colors">
              Confidentialité
            </Link>
            <Link href="/mentions-legales" className="text-base text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
