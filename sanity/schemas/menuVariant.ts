import { defineType, defineField } from "sanity";

/**
 * Schéma "Proposition" : une variante d'un menu
 * (par ex. "Découverte Hiver" vs "Découverte Végétarien").
 */

export default defineType({
  name: "menuVariant",
  title: "Proposition de menu",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Titre de la proposition",
      type: "string",
      description:
        'Exemple : "Découverte Hiver" ou "Classique Végétarien" ou "Proposition 1"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isVegetarian",
      title: "Menu végétarien ?",
      type: "boolean",
      description:
        "Si activé, un petit badge vert « Végétarien » sera affiché à côté du titre.",
      initialValue: false,
    }),
    defineField({
      name: "courses",
      title: "Plats du menu",
      type: "array",
      description:
        'Listez ici les plats dans l\'ordre où ils sont servis. Cliquez sur "Ajouter un plat" pour en créer un nouveau.',
      of: [{ type: "course" }],
      validation: (Rule) => Rule.min(1).error("Ajoutez au moins un plat."),
    }),
  ],
  preview: {
    select: {
      title: "title",
      isVegetarian: "isVegetarian",
      coursesCount: "courses",
    },
    prepare({ title, isVegetarian, coursesCount }) {
      const count = Array.isArray(coursesCount) ? coursesCount.length : 0;
      return {
        title: title || "(Proposition sans titre)",
        subtitle: `${count} plat${count > 1 ? "s" : ""}${
          isVegetarian ? " • Végétarien" : ""
        }`,
      };
    },
  },
});
