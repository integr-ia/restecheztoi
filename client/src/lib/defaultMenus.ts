import type { SanityMenu } from "./sanity";

/**
 * Données statiques de secours.
 * Affichées si Sanity n'est pas configuré ou injoignable.
 *
 * Servent aussi de seed initial : voir `sanity/scripts/seed.ts`
 * pour importer ces données dans Sanity au premier démarrage.
 */

export const DEFAULT_MENUS: Record<SanityMenu["slug"], SanityMenu> = {
  decouverte: {
    _id: "default-decouverte",
    slug: "decouverte",
    displayOrder: 1,
    title: "Menu Découverte",
    subtitle: "L'art de bien commencer",
    price: 130,
    servicesLabel: "3 plats",
    bannerImage: undefined,
    thumbnailImage: undefined,
    variants: [
      {
        title: "Découverte Hiver",
        isVegetarian: false,
        courses: [
          { name: "Entrée", description: "Tatin de betteraves" },
          {
            name: "Plat",
            description: "Volaille en 5 déclinaisons, accompagnement de saison",
          },
          {
            name: "Dessert",
            description: "Suprême de mandarine rôtie, sauce au pain d'épice",
          },
        ],
      },
      {
        title: "Découverte Végétarien",
        isVegetarian: true,
        courses: [
          {
            name: "Entrée",
            description:
              "Velouté de potimarron caramélisé, huile de noisettes torréfiées, pickles d'oignons",
          },
          {
            name: "Plat",
            description: "Risotto d'orge aux champignons, émulsion aux marrons",
          },
          {
            name: "Dessert",
            description: "Poire au vin rouge, crème de tofu aux noisettes",
          },
        ],
      },
    ],
    footerNote:
      "Chaque menu peut être adapté selon vos préférences et restrictions alimentaires. N'hésitez pas à nous contacter pour personnaliser votre expérience.",
  },
  classique: {
    _id: "default-classique",
    slug: "classique",
    displayOrder: 2,
    title: "Menu Classique",
    subtitle: "L'essence de notre savoir-faire.",
    price: 200,
    servicesLabel: "5 services",
    bannerImage: undefined,
    thumbnailImage: undefined,
    variants: [
      {
        title: "Classique Hiver",
        isVegetarian: false,
        courses: [
          { name: "Amuse-bouche", description: "Brick d'hiver" },
          {
            name: "Entrée 1",
            description:
              "Feuilletés de magret de canard fumé et endives braisées/caramélisées",
          },
          {
            name: "Entrée 2",
            description: "Tataki de veau, réduction de marinade, purée de panais",
          },
          {
            name: "Plat",
            description:
              "Carré d'agneau en croûte d'épices, ratatouille de légumes d'hiver, pommes duchesse",
          },
          { name: "Dessert", description: "Déclinaisons de butternut" },
        ],
      },
      {
        title: "Classique Végétarien",
        isVegetarian: true,
        courses: [
          {
            name: "Amuse-bouche",
            description:
              "Velouté de topinambours, éclats de noisettes et huile de persil",
          },
          {
            name: "Entrée 1",
            description:
              "Tartare de betterave, pomme Granny Smith et mayonnaise au raifort",
          },
          {
            name: "Entrée 2",
            description: "Feuilletés aux champignons, émulsion aux châtaignes",
          },
          {
            name: "Plat",
            description:
              "Cannelloni farci aux cardons, sauce au poivre, tuile parmesan citron",
          },
          {
            name: "Dessert",
            description: "Tartelettes au potimarron et à l'orange",
          },
        ],
      },
    ],
    footerNote:
      "L'équilibre parfait entre tradition et créativité. Chaque menu peut être adapté selon vos préférences et restrictions alimentaires.",
  },
  hautdegamme: {
    _id: "default-hautdegamme",
    slug: "hautdegamme",
    displayOrder: 3,
    title: "Menu Haut de Gamme",
    subtitle: "Quand on sort le grand jeu",
    price: 280,
    servicesLabel: "7 services",
    bannerImage: undefined,
    thumbnailImage: undefined,
    variants: [
      {
        title: "Proposition 1",
        isVegetarian: false,
        courses: [
          {
            name: "Amuse-bouche 1",
            description: "Pomme de terre soufflée, sauce fromagère au lard",
          },
          { name: "Amuse-bouche 2", description: "Panna cotta de persil" },
          { name: "Entrée 1", description: "Crème brûlée au foie gras" },
          {
            name: "Entrée 2",
            description: "Bisque d'écrevisse, gel pamplemousse, tuile au piment",
          },
          {
            name: "Plat 1",
            description:
              "Croustillant de bœuf, légumes laqués, crème moutarde thym miel, déclinaison de pommes de terre",
          },
          { name: "Plat 2", description: "Grenadin de veau en 2 cuissons" },
          { name: "Dessert", description: "Truffé aux agrumes" },
        ],
      },
      {
        title: "Proposition 2",
        isVegetarian: false,
        courses: [
          {
            name: "Amuse-bouche 1",
            description: "Galette de risotto, mousse de langoustines",
          },
          { name: "Amuse-bouche 2", description: "Pressé d'hiver" },
          {
            name: "Entrée 1",
            description:
              "Rillettes de porc rôti, croustillant de brebis, sauce tabac/chocolat",
          },
          { name: "Entrée 2", description: "Raviole secrète" },
          { name: "Plat 1", description: "Barbu flambé, pommes de terre fondantes" },
          {
            name: "Plat 2",
            description:
              "Lièvre à la royale, gratin dauphinois, déclinaisons de légumes racines",
          },
          { name: "Dessert", description: "Île flottante" },
        ],
      },
    ],
    footerNote:
      "Nos menus haut de gamme représentent le summum de l'art culinaire. Chaque plat est une œuvre d'art, créée avec des produits d'exception et un savoir-faire unique.",
  },
};

export const DEFAULT_MENU_LIST: SanityMenu[] = [
  DEFAULT_MENUS.decouverte,
  DEFAULT_MENUS.classique,
  DEFAULT_MENUS.hautdegamme,
];

/**
 * URLs d'images statiques (dans /public) utilisées en fallback
 * quand le menu vient des données par défaut (sans Sanity).
 */
export const DEFAULT_MENU_IMAGES: Record<
  SanityMenu["slug"],
  { banner: string; thumbnail: string }
> = {
  decouverte: {
    banner: "/menu-decouverte.png",
    thumbnail: "/menu-decouverte.png?v=2",
  },
  classique: {
    banner: "/menu-classique.jpg",
    thumbnail: "/menu-classique.jpg?v=2",
  },
  hautdegamme: {
    banner: "/menu-haut-de-gamme.png",
    thumbnail: "/menu-haut-de-gamme.png",
  },
};
