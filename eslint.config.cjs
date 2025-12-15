module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended', // Reglas recomendadas de ESLint
    'plugin:prettier/recommended', // Habilita la integración de Prettier
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Añade tus reglas personalizadas aquí, si las tienes
  },
}
