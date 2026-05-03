# Guide d'installation de l'espace admin (CMS)

Ce guide explique **comment mettre en place** l'espace admin Sanity pour le site Reste Chez Toi.
Une fois cette installation faite (1 fois), votre client pourra modifier les menus et les photos depuis une interface web simple, sans toucher au code, depuis son ordinateur **ou son smartphone**.

> Public : vous (Sami). Pour le client final, voir [`GUIDE-CLIENT.md`](./GUIDE-CLIENT.md).

---

## 1. Vue d'ensemble

L'architecture est la suivante :

```
┌──────────────────┐        ┌──────────────────┐
│  Site Reste      │        │  Sanity Studio   │
│  Chez Toi        │ ◄──────┤  (espace admin)  │
│  (Vercel)        │  API   │  sanity.studio   │
└──────────────────┘        └──────────────────┘
                                    ▲
                                    │ se connecte avec son
                                    │ email + mot de passe
                                    │
                              👤 Votre client
```

**Sanity** est un CMS gratuit (jusqu'à 10 000 documents et 3 utilisateurs) qui :
- Fournit une interface admin déjà prête, responsive (PC + mobile),
- Stocke les textes, images et toutes les données,
- Diffuse le contenu vers le site via une API rapide.

---

## 2. Création du compte Sanity (5 minutes)

1. Aller sur **[https://www.sanity.io/login](https://www.sanity.io/login)**
2. Créer un compte (avec Google, GitHub ou email — choisissez ce qui vous arrange)
3. Vous arrivez sur le tableau de bord. **Notez la barre d'adresse** : c'est là qu'on retrouvera le `PROJECT_ID` plus tard.

---

## 3. Initialiser Sanity Studio en local

Ouvrir un terminal **dans le dossier du projet** :

```bash
cd sanity
pnpm install
```

Puis initialiser le projet Sanity (1 seule fois — il sera lié à votre compte) :

```bash
npx sanity@latest init --env
```

Sanity va vous demander :
- **« Create new project »** → choisir oui (sauf si vous avez déjà créé un projet manuellement)
- **« Project name »** → `Reste Chez Toi`
- **« Use the default dataset configuration »** → oui (ça crée un dataset `production`)
- **« Project output path »** → appuyer sur Entrée (garder le dossier courant)
- **« Select project template »** → `Clean project with no predefined schemas`

Le script va créer un fichier `.env` dans `sanity/` avec votre `SANITY_STUDIO_PROJECT_ID`.

> ⚠️ Si l'init crée un fichier `sanity.config.ts` ou un dossier `schemas/` qui écrase les nôtres, **gardez les nôtres** (ils sont déjà configurés en français avec les bons schémas). Vous pouvez écraser ce que crée Sanity en faisant `git checkout` sur les fichiers du dossier `sanity/`.

---

## 4. Lancer le studio en local pour vérifier

```bash
# toujours dans le dossier sanity/
pnpm run dev
```

Ouvrir **http://localhost:3333** dans votre navigateur.
Vous devriez voir l'interface admin, en français, avec un menu « Menus » à gauche et la possibilité de créer un nouveau menu.

---

## 5. Importer les 3 menus existants automatiquement

Pour ne pas avoir à tout retaper, on lance le script de seed :

1. Sur **[https://www.sanity.io/manage](https://www.sanity.io/manage)** → cliquer sur votre projet → onglet **« API »** → **« Add API token »**
   - Nom : `Seed`
   - Permissions : **Editor**
   - Cliquer sur « Save » → copier le token (`sk...`) — il ne sera affiché qu'une seule fois.

2. Dans le terminal :

   ```bash
   cd sanity

   # Linux/Mac
   export SANITY_PROJECT_ID="votre_project_id"
   export SANITY_TOKEN="sk_le_token_copié"

   # Windows (PowerShell)
   $env:SANITY_PROJECT_ID="votre_project_id"
   $env:SANITY_TOKEN="sk_le_token_copié"

   node scripts/seed.mjs
   ```

3. Retourner sur http://localhost:3333 — les 3 menus apparaissent ! 🎉

> ⚠️ **Supprimez le token après usage** (sur sanity.io/manage) — il donne un accès en écriture complet au projet.

---

## 6. Connecter le site (front-end)

À la racine du projet, créer un fichier `.env` (s'il n'existe pas) :

```bash
cp .env.example .env
```

Puis ouvrir `.env` et remplir :

```
VITE_SANITY_PROJECT_ID=votre_project_id
VITE_SANITY_DATASET=production
```

Installer les nouvelles dépendances :

```bash
pnpm install
```

Lancer le site :

```bash
pnpm run dev
```

Aller sur les pages des menus → ils s'affichent maintenant **depuis Sanity**.
Si vous modifiez un menu dans le studio (à `localhost:3333`) et rechargez la page → le changement apparaît. ✨

---

## 7. Déployer le studio admin en ligne

Pour que votre client puisse accéder à l'admin depuis chez lui, il faut publier le studio :

```bash
cd sanity
pnpm run deploy
```

Sanity vous demande un **nom de sous-domaine** : choisissez par ex. `restecheztoi`.
Le studio sera alors accessible sur :

```
https://restecheztoi.sanity.studio
```

C'est cette URL que vous donnerez à votre client.

---

## 8. Inviter le client

1. Sur [https://www.sanity.io/manage](https://www.sanity.io/manage) → projet → onglet **« Members »**
2. Cliquer sur **« Invite members »**
3. Saisir l'email du client
4. Rôle : **Editor** (peut tout modifier mais pas inviter d'autres personnes ni supprimer le projet)
5. Le client recevra un email avec un lien pour créer son compte.

---

## 9. Déployer le site (Vercel)

Côté site, il faut juste ajouter les deux variables d'environnement sur Vercel :

1. **Vercel → projet → Settings → Environment Variables**
2. Ajouter :
   - `VITE_SANITY_PROJECT_ID` = votre project_id
   - `VITE_SANITY_DATASET` = `production`
3. Redéployer (Vercel rebuild automatiquement au prochain push, sinon onglet **Deployments → Redeploy**).

---

## 10. (Optionnel) Webhook : redéployer automatiquement à chaque modif

Sanity peut prévenir Vercel automatiquement quand le client publie un changement, pour que le site se mette à jour sans intervention. C'est facultatif (les visiteurs voient les nouveaux contenus en quelques secondes même sans webhook, grâce à l'API Sanity), mais ça peut accélérer les choses.

1. Sur Vercel → projet → **Settings → Git → Deploy Hooks** → créer un hook nommé `Sanity Update` → copier l'URL.
2. Sur sanity.io/manage → projet → **API → Webhooks** → **Create webhook** :
   - URL : l'URL Vercel copiée
   - Trigger on : `Create`, `Update`, `Delete`
   - Filter : `_type == "menu"`
3. Enregistrer.

---

## En cas de problème

- Le site affiche les anciens menus en dur ? → vérifiez que `VITE_SANITY_PROJECT_ID` est bien défini dans `.env` (et redémarrez `pnpm run dev`).
- Erreur CORS ? → sanity.io/manage → projet → **API → CORS origins** → ajouter `http://localhost:3000` (dev) et `https://votre-site.vercel.app` (prod).
- Le studio refuse de démarrer ? → vérifiez que vous êtes bien dans le dossier `sanity/` et que `pnpm install` s'est bien terminé.

---

## Coûts

- **Sanity gratuit** : 3 utilisateurs, 10 000 documents, 5 GB d'images, 100 000 requêtes API/mois. Largement suffisant pour ce site.
- Si un jour vous dépassez : ~99$/mois pour la formule supérieure.
