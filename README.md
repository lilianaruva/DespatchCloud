# DespatchCloud - Technical Test

This project is part of the technical test for **Despatch Cloud**. It showcases a **React + TypeScript + Vite** setup with optimized configurations and best practices. The implementation includes an interactive multi-select component with search functionality, new value addition, and keyboard navigation.

## About the Developer
This project was developed by **Liliana Gallegos Ruvalcaba**, a **Frontend Developer** with over **5 years of experience** in remote work. She has a strong background in **React, TypeScript, Next.js, Angular, Firebase, and AWS**, specializing in UI/UX design, performance optimization, and scalable frontend architectures. Her expertise includes:

- **Microfrontends & Web Performance:** Reduced deployment times by 30% and improved bundle size efficiency by 25%.
- **Reusable Component Libraries:** Designed internal libraries optimizing consistency and reducing development time by 40%.
- **AI-Driven Applications:** Integrated **ChatGPT API** into platforms to enhance user interactions.
- **Data Visualization & CMS Development:** Built dashboards and CMS platforms using **Chart.js, Material UI, and Tailwind CSS**.
- **Enterprise & Healthcare Projects:** Developed platforms for companies like **Stanford Medicine**, focusing on medical data visualization.

She holds a **Master’s degree in Big Data Analysis & AI Specialization** from **UNIR** and a **Computer Systems Engineering degree** from **Instituto Tecnológico de la Laguna**. Passionate about frontend development, she blends creativity and functionality to build exceptional user interfaces.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```