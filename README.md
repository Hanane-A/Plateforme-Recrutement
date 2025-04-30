# Plateforme de Recrutement

Cette application est une plateforme web permettant aux candidats de soumettre leur profil, et aux recruteurs de consulter la liste des candidats et leurs détails.

---

## 🚀 Technologies utilisées

- **Next.js 14** (App Router)
- **React**
- **Redux Toolkit** (gestion d’état)
- **Ant Design** (UI)
- **Next-Intl** (traduction multilingue)
- **JavaScript **

---

## 🛠️ Installation du projet

1. **Cloner le dépôt :**

```bash
git clone https://github.com/Hanane-A/Plateforme-Recrutement.git
cd Plateforme-Recrutement
```

2. **Installer les dépendances :**

```bash
npm install
```

---

## ▶️ Lancer l’application en local

```bash
npm run dev
```

Par défaut, l’application sera accessible à l’adresse :  
**http://localhost:3000**

---

## 📂 Structure des dossiers (simplifiée)

```
/messages                       <- représentent les traductions disponibles par langue
    fr.json
    en.json
/src
    /app
        /[locale]               <- gestion des langues (fr, en,)
            /candidat           <- formulaire et confirmation
            /recruteur          <- liste + détails candidats
            layout.jsx          <- layout principal (multilingue, Redux, thème)
            page.jsx            <- page d’accueil
    /i18n
        request.js
        routing.js
        navigation.js
    middleware.js
/redux
  candidatsSlice.js       ← logique Redux
  store.js                ← configuration Redux
/theme
  themeconfig.js          ← configuration Ant Design
/public/locales           ← fichiers de traduction JSON (fr.json, en.json, ...)
```

---

## 🌐 Configuration multilingue (i18n)

La configuration i18n se fait dans `next.config.mjs` :

```js
i18n: {
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
}
```

Les traductions sont placées dans :

```
/public/locales/fr/common.json
/public/locales/en/common.json
```

---

## 📄 Fonctionnalités

- Formulaire de candidature avec :
  - Nom, prénom, email, téléphone
  - Description personnelle
  - Upload de CV (non stocké en base, simulé)
- Liste des candidats avec lien vers les détails
- Ajout dynamique de candidat via Redux
- Interface adaptative (responsive)
- Thème personnalisé avec Ant Design
- Traduction français/anglais (Next-Intl)

---

## 🧑‍💻 Contributeurs

- Hanane ADELEKE

---

## ✅ TODO (à compléter au fil du projet)

- [ ] Stockage réel du fichier CV
- [ ] Ajout d’un filtre/recherche sur la liste des candidats
- [ ] Connexion à une base de données
