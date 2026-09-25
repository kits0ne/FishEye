# FishEye

Plateforme web présentant des photographes freelance et leurs portfolios. Projet réalisé dans le cadre du parcours **Développeur Web** d'OpenClassrooms — *Créez une plateforme de photographes avec React*.

## ✨ Fonctionnalités

- **Page d'accueil** : liste de tous les photographes (nom, localisation, tagline, prix, portrait).
- **Page photographe** : galerie de photos et vidéos, triable par popularité, date ou titre.
- **Likes** : chaque média peut être liké individuellement ; le total de likes du photographe est affiché dans un encart dédié.
- **Lightbox** : consultation d'un média en grand format, navigable au clavier (flèches, Échap) et à la souris.
- **Formulaire de contact** : modale accessible avec validation native, résultat affiché en console.
- **Accessibilité** : navigation clavier complète, structure sémantique, attributs ARIA, focus trap et restauration du focus dans les modales, `aria-live` pour les changements dynamiques (tri, likes).

## 🛠️ Stack technique

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Prisma](https://www.prisma.io/) avec l'adaptateur [`better-sqlite3`](https://github.com/WiseLibs/better-sqlite3)
- [styled-components](https://styled-components.com/)
- Base de données [SQLite](https://www.sqlite.org/)

## 📋 Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- npm

## 🚀 Installation

**1. Cloner le dépôt :**

```bash
git clone https://github.com/<votre-pseudo>/<nom-du-repo>.git
cd <nom-du-repo>
```

**2. Installer les dépendances :**

```bash
npm install
```

**3. Générer le client Prisma** (normalement automatique via `postinstall`, sinon) :

```bash
npx prisma generate
```

**4. Appliquer les migrations** pour créer le schéma de la base de données :

```bash
npx prisma migrate dev
```

> La base `dev.db` fournie dans ce dépôt contient déjà des données de démonstration (photographes et médias fictifs). Si vous repartez d'une base vide, pensez à l'alimenter avant de lancer l'application.

## ▶️ Lancer le projet

### Mode développement

```bash
npm run dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

### Mode production (build local)

```bash
npm run build
npm run start
```

## 📁 Structure du projet

```
src/
├── app/
│   ├── page.jsx                # Page d'accueil
│   ├── profil/[id]/page.js     # Page photographe
│   ├── loading.jsx / error.jsx # États de chargement et d'erreur
│   ├── not-found.jsx           # Page 404 (photographe inexistant)
│   └── lib/
│       ├── prisma-db.js        # Fonctions d'accès aux données
│       └── actions.js          # Server actions (likes)
├── components/                 # Composants React réutilisables
prisma/
└── schema.prisma               # Schéma de la base de données
```

## ♿ Accessibilité

Le projet a fait l'objet d'une démarche d'accessibilité approfondie tout au long du développement :

- Éléments HTML sémantiques (`<header>`, `<main>`, `<footer>`, `<article>`, `<form>`, `<button>`) plutôt que des `<div>` génériques.
- Attributs ARIA sur les composants personnalisés (menu de tri en pattern `listbox`, modales en `role="dialog"`).
- Navigation intégralement possible au clavier : `Tab`, `Entrée`/`Espace`, `Échap`, flèches directionnelles dans la lightbox.
- Focus trap et restauration du focus dans les fenêtres modales.
- Textes alternatifs sur toutes les images et vidéos : titre du média pour la galerie et la lightbox, nom du photographe pour la photo de profil. Les éléments purement décoratifs (icônes, logo dans un lien déjà nommé) ont un `alt` vide. Sur l'accueil, le portrait se trouve dans un lien qui contient déjà le nom du photographe : il est traité comme décoratif pour éviter que le lecteur d'écran lise le nom deux fois (technique WCAG H2).
- Contours de focus visibles et contrastés sur tous les éléments interactifs.
- Rapport d'audit réalisé avec [WAVE](https://wave.webaim.org/) (WebAIM) : 0 erreur détectée.

## ⚠️ Limitation connue

L'application utilise SQLite en fichier local, ce qui n'est pas garanti de fonctionner de façon fiable sur une plateforme serverless comme Vercel (système de fichiers éphémère). Pour un déploiement en production durable, une migration vers une base de données compatible serverless (ex. Turso, Vercel Postgres) serait recommandée.

## 📄 Licence

Projet réalisé à des fins pédagogiques dans le cadre de la formation OpenClassrooms.
