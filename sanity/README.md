# Sanity Studio - Reste Chez Toi

Ce dossier contient le code de l'**espace d'administration** que votre client utilisera pour modifier les menus et les photos du site, sans toucher au code.

## Mise en place rapide

Voir le **guide complet** à la racine du projet : [`GUIDE-CMS.md`](../GUIDE-CMS.md).

En résumé :

```bash
# 1. Aller dans ce dossier
cd sanity

# 2. Installer les dépendances
pnpm install   # ou npm install

# 3. Initialiser le projet Sanity (la première fois seulement)
npx sanity@latest init --env

# 4. Créer un fichier .env (copier .env.example) puis y mettre votre PROJECT_ID

# 5. Lancer Sanity Studio en local
pnpm run dev
# → ouvre http://localhost:3333
```

## Déployer le studio en ligne

Pour que votre client puisse y accéder depuis n'importe où :

```bash
pnpm run deploy
```

Sanity vous demandera un **nom de sous-domaine** (par exemple `restecheztoi`).
L'admin sera alors disponible sur `https://restecheztoi.sanity.studio`.

## Importer les menus initiaux

```bash
export SANITY_PROJECT_ID="votre_id"
export SANITY_TOKEN="sk..."
node scripts/seed.mjs
```
