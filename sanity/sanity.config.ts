import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { frFR } from "./locale-fr";

/**
 * Configuration de Sanity Studio - Reste Chez Toi
 *
 * IMPORTANT : avant le premier `pnpm run dev`, remplacer la valeur de
 * `projectId` ci-dessous par celle fournie par Sanity (visible sur
 * https://www.sanity.io/manage après création du projet).
 *
 * On peut aussi définir la variable d'environnement SANITY_STUDIO_PROJECT_ID
 * dans un fichier `.env` à la racine du dossier `sanity/`.
 */

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  "REMPLACER_PAR_VOTRE_PROJECT_ID";

const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "reste-chez-toi",
  title: "Reste Chez Toi - Espace d'administration",

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenus du site")
          .items([
            S.listItem()
              .title("Menus")
              .child(
                S.documentTypeList("menu")
                  .title("Menus")
                  .defaultOrdering([{ field: "displayOrder", direction: "asc" }])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  // Localisation française de l'interface
  studio: {
    components: {},
  },

  // Désactiver les types non utilisés dans le menu de création
  document: {
    newDocumentOptions: (prev) =>
      prev.filter((option) => option.templateId === "menu"),
  },
});

// Ne pas supprimer cet export - il est requis par certains outils
export { frFR };
