# React + TypeScript + Vite

## Déploiement Docker

Le workflow `.github/workflows/deploy.yml` construit l’image Docker et la déploie sur le serveur à chaque push sur `main`. Il peut aussi être lancé manuellement depuis l’onglet **Actions** de GitHub. Le site est servi sur le port `8081`.

Dans **Settings > Secrets and variables > Actions**, ajouter ces repository secrets :

- `SERVER_SSH_KEY` : clé privée SSH dédiée au déploiement. Ajouter sa clé publique dans `~/.ssh/authorized_keys` du compte `ubuntu` sur le serveur.
- `SERVER_KNOWN_HOSTS` : clé d’hôte SSH du serveur, vérifiée avant de l’ajouter. Obtenir l’empreinte depuis la console du fournisseur du serveur, puis enregistrer la ligne `known_hosts` correspondante.

Le serveur doit avoir Docker et le plugin `docker compose` installés, et autoriser les connexions SSH sur le port 22 ainsi que le trafic HTTP sur le port 8081. Le workflow transfère l’image et le fichier Compose dans `/home/ubuntu`, charge l’image et redémarre le service.

Pour lancer le serveur manuellement depuis le dépôt :

```sh
docker compose up -d --build
```

Le site est alors disponible sur `http://localhost:8081`.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
