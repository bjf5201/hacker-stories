import pluginReact from "eslint-plugin-react";


export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { root: true },
  { env: { browser: true, es2020: true } },
  {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended'
    ]
  },
  { ignorePatterns: ['dist', '.eslintrc.mjs'] },
  { parserOptions: { esmaVersion: 'latest', sourceType: 'module' } },
  { settings: { react: { version: '18.2' } } }
];