/**
 * Script d'import initial des menus dans Sanity.
 *
 * Usage :
 *   1. Créer un token d'écriture sur https://www.sanity.io/manage
 *      (onglet "API" → "Add API token", permissions "Editor").
 *   2. Exporter les variables :
 *        export SANITY_PROJECT_ID="xxxxx"
 *        export SANITY_DATASET="production"
 *        export SANITY_TOKEN="sk..."
 *   3. Lancer depuis le dossier `sanity/` :
 *        node scripts/seed.mjs
 *
 * Le script crée les 3 menus initiaux (Découverte, Classique, Haut de Gamme)
 * avec leurs propositions et leurs plats. Les images devront ensuite être
 * uploadées manuellement dans Sanity Studio (drag & drop dans le champ
 * "Image de bannière" / "Image vignette").
 */

import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_TOKEN;

if (!projectId || !token) {
  console.error("❌ Variables manquantes : SANITY_PROJECT_ID et SANITY_TOKEN sont requis.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
});

const menus = [
  {
    _id: "menu-decouverte",
    _type: "menu",
    slug: "decouverte",
    displayOrder: 1,
    title: "Menu Découverte",
    subtitle: "L'art de bien commencer",
    price: 130,
    servicesLabel: "3 plats",
    variants: [
      {
        _key: "decouverte-hiver",
        _type: "menuVariant",
        title: "Découverte Hiver",
        isVegetarian: false,
        courses: [
          { _key: "c1", _type: "course", name: "Entrée", description: "Tatin de betteraves" },
          { _key: "c2", _type: "course", name: "Plat", description: "Volaille en 5 déclinaisons, accompagnement de saison" },
          { _key: "c3", _type: "course", name: "Dessert", description: "Suprême de mandarine rôtie, sauce au pain d'épice" },
        ],
      },
      {
        _key: "decouverte-veg",
        _type: "menuVariant",
        title: "Découverte Végétarien",
        isVegetarian: true,
        courses: [
          { _key: "c1", _type: "course", name: "Entrée", description: "Velouté de potimarron caramélisé, huile de noisettes torréfiées, pickles d'oignons" },
          { _key: "c2", _type: "course", name: "Plat", description: "Risotto d'orge aux champignons, émulsion aux marrons" },
          { _key: "c3", _type: "course", name: "Dessert", description: "Poire au vin rouge, crème de tofu aux noisettes" },
        ],
      },
    ],
    footerNote:
      "Chaque menu peut être adapté selon vos préférences et restrictions alimentaires. N'hésitez pas à nous contacter pour personnaliser votre expérience.",
  },
  {
    _id: "menu-classique",
    _type: "menu",
    slug: "classique",
    displayOrder: 2,
    title: "Menu Classique",
    subtitle: "L'essence de notre savoir-faire.",
    price: 200,
    servicesLabel: "5 services",
    variants: [
      {
        _key: "classique-hiver",
        _type: "menuVariant",
        title: "Classique Hiver",
        isVegetarian: false,
        courses: [
          { _key: "c1", _type: "course", name: "Amuse-bouche", description: "Brick d'hiver" },
          { _key: "c2", _type: "course", name: "Entrée 1", description: "Feuilletés de magret de canard fumé et endives braisées/caramélisées" },
          { _key: "c3", _type: "course", name: "Entrée 2", description: "Tataki de veau, réduction de marinade, purée de panais" },
          { _key: "c4", _type: "course", name: "Plat", description: "Carré d'agneau en croûte d'épices, ratatouille de légumes d'hiver, pommes duchesse" },
          { _key: "c5", _type: "course", name: "Dessert", description: "Déclinaisons de butternut" },
        ],
      },
      {
        _key: "classique-veg",
        _type: "menuVariant",
        title: "Classique Végétarien",
        isVegetarian: true,
        courses: [
          { _key: "c1", _type: "course", name: "Amuse-bouche", description: "Velouté de topinambours, éclats de noisettes et huile de persil" },
          { _key: "c2", _type: "course", name: "Entrée 1", description: "Tartare de betterave, pomme Granny Smith et mayonnaise au raifort" },
          { _key: "c3", _type: "course", name: "Entrée 2", description: "Feuilletés aux champignons, émulsion aux châtaignes" },
          { _key: "c4", _type: "course", name: "Plat", description: "Cannelloni farci aux cardons, sauce au poivre, tuile parmesan citron" },
          { _key: "c5", _type: "course", name: "Dessert", description: "Tartelettes au potimarron et à l'orange" },
        ],
      },
    ],
    footerNote:
      "L'équilibre parfait entre tradition et créativité. Chaque menu peut être adapté selon vos préférences et restrictions alimentaires.",
  },
  {
    _id: "menu-hautdegamme",
    _type: "menu",
    slug: "hautdegamme",
    displayOrder: 3,
    title: "Menu Haut de Gamme",
    subtitle: "Quand on sort le grand jeu",
    price: 280,
    servicesLabel: "7 services",
    variants: [
      {
        _key: "hg-1",
        _type: "menuVariant",
        title: "Proposition 1",
        isVegetarian: false,
        courses: [
          { _key: "c1", _type: "course", name: "Amuse-bouche 1", description: "Pomme de terre soufflée, sauce fromagère au lard" },
          { _key: "c2", _type: "course", name: "Amuse-bouche 2", description: "Panna cotta de persil" },
          { _key: "c3", _type: "course", name: "Entrée 1", description: "Crème brûlée au foie gras" },
          { _key: "c4", _type: "course", name: "Entrée 2", description: "Bisque d'écrevisse, gel pamplemousse, tuile au piment" },
          { _key: "c5", _type: "course", name: "Plat 1", description: "Croustillant de bœuf, légumes laqués, crème moutarde thym miel, déclinaison de pommes de terre" },
          { _key: "c6", _type: "course", name: "Plat 2", description: "Grenadin de veau en 2 cuissons" },
          { _key: "c7", _type: "course", name: "Dessert", description: "Truffé aux agrumes" },
        ],
      },
      {
        _key: "hg-2",
        _type: "menuVariant",
        title: "Proposition 2",
        isVegetarian: false,
        courses: [
          { _key: "c1", _type: "course", name: "Amuse-bouche 1", description: "Galette de risotto, mousse de langoustines" },
          { _key: "c2", _type: "course", name: "Amuse-bouche 2", description: "Pressé d'hiver" },
          { _key: "c3", _type: "course", name: "Entrée 1", description: "Rillettes de porc rôti, croustillant de brebis, sauce tabac/chocolat" },
          { _key: "c4", _type: "course", name: "Entrée 2", description: "Raviole secrète" },
          { _key: "c5", _type: "course", name: "Plat 1", description: "Barbu flambé, pommes de terre fondantes" },
          { _key: "c6", _type: "course", name: "Plat 2", description: "Lièvre à la royale, gratin dauphinois, déclinaisons de légumes racines" },
          { _key: "c7", _type: "course", name: "Dessert", description: "Île flottante" },
        ],
      },
    ],
    footerNote:
      "Nos menus haut de gamme représentent le summum de l'art culinaire. Chaque plat est une œuvre d'art, créée avec des produits d'exception et un savoir-faire unique.",
  },
];

async function run() {
  console.log("🌱 Import des menus initiaux dans Sanity...\n");
  for (const menu of menus) {
    try {
      // createOrReplace : ne duplique pas si on relance le script
      await client.createOrReplace(menu);
      console.log(`✅ ${menu.title} importé.`);
    } catch (err) {
      console.error(`❌ Échec pour ${menu.title} :`, err.message);
    }
  }
  console.log(
    "\n✨ Terminé ! Connectez-vous à Sanity Studio pour ajouter les images."
  );
}

run();
