import { defineType, defineField } from "sanity";

/**
 * Schéma "Plat" : un plat individuel dans une proposition de menu
 * (amuse-bouche, entrée, plat, dessert...).
 */

export default defineType({
  name: "course",
  title: "Plat",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Nom du service",
      type: "string",
      description:
        'Exemple : "Amuse-bouche", "Entrée", "Entrée 1", "Plat", "Dessert"...',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description du plat",
      type: "text",
      rows: 2,
      description:
        'La description du plat tel qu\'il sera affiché sur le site. Exemple : "Tatin de betteraves"',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
    },
  },
});
