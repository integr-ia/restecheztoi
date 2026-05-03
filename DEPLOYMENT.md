# Guide de Déploiement - Reste Chez Toi

## 📋 Prérequis

- Compte GitHub
- Compte Vercel
- Node.js 22+ et pnpm installés localement (pour le développement)

## 🚀 Déploiement sur Vercel

### Étape 1 : Pousser le code sur GitHub

```bash
# Initialiser le repository Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Reste Chez Toi website"

# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE-USERNAME/reste-chez-toi.git

# Pousser le code
git push -u origin main
```

### Étape 2 : Connecter à Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub
3. Cliquer sur "Add New Project"
4. Importer le repository `reste-chez-toi`
5. Vercel détectera automatiquement la configuration grâce à `vercel.json`

### Étape 3 : Configuration du domaine

1. Dans les paramètres du projet Vercel, aller dans "Domains"
2. Ajouter le domaine `restecheztoi.com`
3. Suivre les instructions pour configurer les DNS :
   - Type A : `76.76.21.21`
   - Type CNAME : `cname.vercel-dns.com`

### Étape 4 : Variables d'environnement (optionnel)

Si vous souhaitez activer l'analytics ou d'autres fonctionnalités :

1. Aller dans "Settings" > "Environment Variables"
2. Ajouter les variables nécessaires :
   - `VITE_ANALYTICS_ENDPOINT` (si vous utilisez Umami ou autre)
   - `VITE_ANALYTICS_WEBSITE_ID`

## 🔄 Déploiement continu

Une fois configuré, chaque push sur la branche `main` déclenchera automatiquement un nouveau déploiement sur Vercel.

## ✅ Vérifications post-déploiement

- [ ] Le site est accessible sur `restecheztoi.com`
- [ ] Toutes les pages se chargent correctement
- [ ] Les images s'affichent
- [ ] Le formulaire de réservation Calendly fonctionne
- [ ] Le mode sombre/clair fonctionne
- [ ] Le site est responsive (mobile, tablette, desktop)
- [ ] Les métadonnées SEO sont correctes (vérifier avec l'inspecteur)

## 📊 Performance

Le site est optimisé pour :
- ✅ Lighthouse Score > 90
- ✅ First Contentful Paint < 1.5s
- ✅ Time to Interactive < 3s
- ✅ Cumulative Layout Shift < 0.1

## 🔧 Maintenance

### Mettre à jour les menus

1. Modifier les fichiers dans `client/src/pages/Menu*.tsx`
2. Commit et push
3. Vercel déploiera automatiquement

### Mettre à jour les images

1. Remplacer les images dans `client/public/`
2. Commit et push
3. Vercel déploiera automatiquement

## 🆘 Support

En cas de problème :
- Vérifier les logs de build dans le dashboard Vercel
- Vérifier que toutes les dépendances sont installées
- S'assurer que le build local fonctionne : `pnpm run build`
