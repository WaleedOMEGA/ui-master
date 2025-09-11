UI Challenges Monorepo

A polyglot Nx workspace for practicing UI development challenges using Angular, React, and Vue, with Storybook for component-driven development.

This setup is designed to help front-end engineers master UI architecture, design systems, and component-driven workflows — all in one monorepo.

Tech Stack

🏗 Nx
 – scalable monorepo build system

📦 pnpm
 – fast, disk-efficient package manager

⚛️ React
 – modern component-based UI

🅰️ Angular
 – enterprise-ready framework

🌐 Vue
 – progressive framework for UIs

📖 Storybook
 – isolated component development & docs

🧹 ESLint + Prettier – consistent code style

Project Structure
ui-challenges/
├── apps/
│   ├── angular-playground/     # Angular demo app
│   ├── react-playground/       # React demo app
│   └── vue-playground/         # Vue demo app
├── libs/
│   ├── angular-ui/             # Angular UI components
│   ├── react-ui/               # React UI components
│   └── vue-ui/                 # Vue UI components
├── nx.json                     # Nx configuration
├── tsconfig.base.json          # Base TypeScript config
├── pnpm-workspace.yaml         # pnpm workspaces config
└── package.json

🚀 Getting Started

1. Install pnpm
npm install -g pnpm

2. Install dependencies
pnpm install

3. Run playground apps

Angular:

pnpm nx serve angular-playground

React:

pnpm nx serve react-playground

Vue:

pnpm nx serve vue-playground

4. Run Storybook

Angular:

pnpm nx storybook angular-ui

React:

pnpm nx storybook react-ui

Vue:

pnpm nx storybook vue-ui

🛠️ Useful Commands
Command Description
pnpm nx serve <app> Run Angular/React/Vue playground
`pnpm nx build <app lib>`
`pnpm nx test <app lib>`
`pnpm nx lint <app lib>`
pnpm nx storybook <lib> Start Storybook for a UI library
pnpm nx build-storybook <lib> Build Storybook for deployment
pnpm nx graph Visualize project dependencies
🎯 Goals of This Monorepo

Centralize UI challenges across Angular, React, and Vue

Practice design systems with Storybook

Learn Nx workflows (generators, executors, dependency graph)

Build reusable, documented components in multiple frameworks

Prepare for real-world large-scale frontend projects
