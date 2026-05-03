import { defineType, defineField } from "sanity";

/**
 * Schéma "Menu" : représente l'un des 3 grands menus du site
 * (Découverte, Classique, Haut de Gamme).
 *
 * Le champ `slug` est verrouillé : il sert d'identifiant unique
 * pour relier le menu à la bonne page du site.
 */

export default defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Identifiant technique (NE PAS MODIFIER)",
      type: "string",
      description:
        "Cet identifiant est utilisé par le site pour afficher le menu sur la bonne page. Ne le modifiez jamais.",
      options: {
        list: [
          { title: "Découverte", value: "decouverte" },
          { title: "Classique", value: "classique" },
          { title: "Haut de Gamme", value: "hautdegamme" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
      readOnly: ({ value }) => Boolean(value), // verrouillé une fois défini
    }),
    defineField({
      name: "displayOrder",
      title: "Ordre d'affichage",
      type: "number",
      description:
        "Ordre dans lequel les menus apparaissent sur la page « Nos menus » (1 = premier).",
      initialValue: 1,
    }),
    defineField({
      name: "title",
      title: "Titre du menu",
      type: "string",
      description: 'Exemple : "Menu Découverte"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Sous-titre",
      type: "string",
      description: 'Court texte affiché sous le titre. Exemple : "L\'art de bien commencer"',
    }),
    defineField({
      name: "price",
      title: "Prix (CHF)",
      type: "number",
      description: 'Prix en francs suisses, sans le "CHF". Exemple : 130',
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: "servicesLabel",
      title: "Format du menu",
      type: "string",
      description: 'Exemple : "3 plats" ou "5 services" ou "7 services"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bannerImage",
      title: "Image de bannière (en haut de la page du menu)",
      type: "image",
      description:
        "Grande image affichée en haut de la page de ce menu. Format paysage recommandé (au moins 1600×600 pixels).",
      options: {
        hotspot: true, // permet au client de choisir la zone d'intérêt
      },
    }),
    defineField({
      name: "thumbnailImage",
      title: "Image vignette (page Nos Menus)",
      type: "image",
      description:
        'Petite image affichée sur la page "Nos menus" pour présenter ce menu. Format carré ou paysage (au moins 800×600 pixels).',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "variants",
      title: "Propositions de menus",
      type: "array",
      description:
        'Chaque menu peut contenir plusieurs propositions (par exemple "Découverte Hiver" et "Découverte Végétarien"). Cliquez sur "Ajouter une proposition" pour en créer une nouvelle.',
      of: [{ type: "menuVariant" }],
      validation: (Rule) => Rule.min(1).error("Ajoutez au moins une proposition de menu."),
    }),
    defineField({
      name: "footerNote",
      title: "Texte de bas de page (optionnel)",
      type: "text",
      rows: 3,
      description:
        'Petit message affiché en bas de la page du menu. Exemple : "Chaque menu peut être adapté selon vos préférences..."',
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "servicesLabel",
      price: "price",
      media: "thumbnailImage",
    },
    prepare({ title, subtitle, price, media }) {
      return {
        title: title || "(Menu sans titre)",
        subtitle: price ? `${price} CHF • ${subtitle || ""}` : subtitle,
        media,
      };
    },
  },
});
