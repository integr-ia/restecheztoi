import { defineType, defineField } from "sanity";

/**
 * Schéma singleton "deliveryService" — contenu statique de la page /livraison.
 * Un seul document de ce type existe ; il est épinglé dans la structure Sanity.
 */
export default defineType({
  name: "deliveryService",
  title: "Service de livraison",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre principal",
      type: "string",
      description: 'Exemple : "Bien manger, sans contrainte"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Courte accroche affichée sous le titre.",
    }),
    defineField({
      name: "pricePerMeal",
      title: "Prix par repas (CHF)",
      type: "number",
      description: "Prix en francs suisses, sans le symbole. Exemple : 19",
      initialValue: 19,
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "howItWorks",
      title: "Comment ça marche (étapes)",
      type: "array",
      description: 'Listez les étapes du service. Cliquez sur "Ajouter une étape".',
      of: [
        {
          type: "object",
          name: "step",
          title: "Étape",
          fields: [
            defineField({
              name: "icon",
              title: "Icône (emoji)",
              type: "string",
              description: "Un emoji représentant l'étape. Exemple : 🍽️",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Titre de l'étape",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { icon: "icon", title: "title" },
            prepare({ icon, title }: { icon?: string; title?: string }) {
              return { title: `${icon ?? ""} ${title ?? ""}` };
            },
          },
        },
      ],
    }),
    defineField({
      name: "deliverySchedule",
      title: "Créneaux de livraison",
      type: "array",
      description:
        "Les deux jours de livraison par semaine et leurs deadlines de commande respectives.",
      of: [
        {
          type: "object",
          name: "scheduleSlot",
          title: "Créneau",
          fields: [
            defineField({
              name: "deliveryDay",
              title: "Jour de livraison",
              type: "string",
              description: "Exemple : Lund