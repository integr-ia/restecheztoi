import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load des pages pour optimiser le bundle
const Home = lazy(() => import("./pages/Home"));
const CommentCaMarche = lazy(() => import("./pages/CommentCaMarche"));
const APropos = lazy(() => import("./pages/APropos"));
const Contact = lazy(() => import("./pages/Contact"));
const Reservation = lazy(() => import("./pages/Reservation"));
const MenuDecouverte = lazy(() => import("./pages/MenuDecouverte"));
const MenuClassique = lazy(() => import("./pages/MenuClassique"));
const MenuHautDeGamme = lazy(() => import("./pages/MenuHautDeGamme"));
const NosMenus = lazy(() => import("./pages/NosMenus"));
const Confidentialite = lazy(() => import("./pages/Confidentialite"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const Livraison = lazy(() => import("./pages/Livraison"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Composant de chargement simple
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">Chargement...</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/comment-ca-marche" component={CommentCaMarche} />
        <Route path="/nos-menus" component={NosMenus} />
        <Route path="/a-propos" component={APropos} />
        <Route path="/menu-decouverte" component={MenuDecouverte} />
        <Route path="/menu-classique" component={MenuClassique} />
        <Route path="/menu-hautdegamme" component={MenuHautDeGamme} />
        <Route path="/contact" component={Contact} />
        <Route path="/reservation" component={Reservation} />
        <Route path="/livraison" component={Livraison} />
        <Route path="/confidentialite" component={Confidentialite} />
        <Route path="/mentions-legales" component={MentionsLegales} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
            <ScrollToTop />
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
