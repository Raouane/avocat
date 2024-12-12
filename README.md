# Cabinet d'Avocat - Système de Rendez-vous en Ligne

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6e87c6d-1802-4ee1-87dd-9128ad492670/deploy-status)](https://app.netlify.com/sites/avocatv1/deploys)

## À propos

Une application web moderne pour la gestion de rendez-vous d'un cabinet d'avocats. Développée avec React, TypeScript et Tailwind CSS.

## Fonctionnalités

- 👨‍⚖️ Présentation de l'équipe d'avocats et leurs spécialités
- 📅 Système de prise de rendez-vous en ligne
- 🕒 Sélection de créneaux horaires selon les disponibilités
- 📧 Confirmation par email des rendez-vous
- 📱 Interface responsive et moderne

## Technologies Utilisées

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- HeadlessUI

## Développement Local

1. Cloner le repository
```bash
git clone https://github.com/Raouane/avocat.git
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

## Déploiement

L'application est déployée automatiquement sur Netlify à chaque push sur la branche main.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
