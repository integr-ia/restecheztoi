import { defineType, defineField } from "sanity";

/**
 * Schéma singleton "weeklyMenus" — les deux semaines de menus du service livraison.
 * Un seul document de ce type existe ; il est épinglé dans la structure Sanity.
 */

const dailyMealFields = [
  defineField({
    name: "day",
    title: "Jour",
    type: "string",
    description: "Exemple : Lundi, Mardi, ...",
    options: {
      list: [
        { title: "Lundi", value: "Lundi" },
        { title: "Mardi", value: "Mardi" },
        { title: "Mercredi", value: "Mercredi" },
        { title: "Jeudi", value: "Jeudi" },
        { title: "Vendredi", value: "Vendredi" },
      ],
      layout: "dropdown",
    },
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "dish",
    title: "Plat du jour",
    type: "string",
    description: "Nom du plat proposé ce jour-là.",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "description",
    title: "Description (optionnelle)",
    type: "text",
    rows: 2,
    description: "Détails supplémentaires sur le plat (accompagnements, sauce…).",
  }),
];

const dailyMealPreview = {
  select: { day: "day", dish: "dish" },
  prepare({ day, dish }: { day?: string; dish?: string }) {
    return { title: `${day ?? "?"} — ${dish ?? "(plat non renseigné)"}` };
  },
};

export default defineType({
  name: "weeklyMenus",
  title: "Menus de la semaine",
  type: "document",
  fields: [
    defineField({
      name: "currentWeekLabel",
      title: "Semaine en cours (libellé)",
      type: "string",
      description: 'Exemple : "27 avril – 1er mai 2026"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "currentWeek",
      title: "Menus — semaine en cours",
      type: "array",
      description: "Ajoutez les 5 jours (lundi → vendredi).",
      of: [
        {
          type: "object",
          name: "dailyMeal",
          title: "Repas du jour",
          fields: dailyMealFields,
          preview: dailyMealPreview,
        },
      ],
      validation: (Rule) => Rule.max(5),
    }),
    defineField({
      name: "nextWeekLabel",
      title: "Semaine prochaine (libellé)",
      type: "string",
      description: 'Exemple : "4 – 8 mai 2026"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "nextWeek",
      title: "Menus — semaine prochaine",
      type: "array",
      description: "Ajoutez les 5 jours (lundi → vendredi).",
      of: [
        {
          type: "object",
          name: "dailyMealNext",
          title: "Repas du jour",
          fields: dailyMealFields,
          preview: dailyMealPreview,
        },
      ],
      validation: (Rule) => Rule.max(5),
    }),
  ],
  preview: {
    select: {
      currentWeekLabel: "currentWeekLabel",
      nextWeekLabel: "nextWeekLabel",
    },
    prepare({ currentWeekLabel, nextWeekLabel }: { currentWeekLabel?: string; nextWeekLabel?: string }) {
      return {
        title: "Menus de la semaine",
        subtitle: currentWeekLabel
          ? `Actuelle : ${currentWeekLabel} | Prochaine : ${nextWeekLabel ?? "?"}`
          : "",
      };
    },
  },
});
