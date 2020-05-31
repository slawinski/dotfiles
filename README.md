# dotfiles

## ESLint and Prettier

In order to properly lint Vue.js projects you need to install below packages:
```code
npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue eslint-plugin-vue-a11y prettier @vue/eslint-config-prettier @vue/cli-service @vue/cli-plugin-eslint babel-eslint
```

## Npm scripts
The package.json should look like this:
```
  "scripts": {
    "prettier": "prettier --write '**/*.{js,vue}'",
    "lint": "eslint . --ext .js,.vue --ignore-path .gitignore"
  },
```
