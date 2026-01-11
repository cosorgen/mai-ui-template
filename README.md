# mai-ui-template

Scaffolding for building apps with the MAI-UI design system.

## Set up

### Prerequisites

This app runs on nodejs and uses npm. Make sure these are installed before proceeding.

### Cloning

From within an empty project folder run

```bash
git clone https://github.com/cosorgen/mai-ui-template.git .
```

Or from the parent directory run

```bash
git clone https://github.com/cosorgen/mai-ui-template.git
```

### Authentication

> **IMPORTANT:** Before installing dependencies and building, you must run the authentication script to access the design system repo.

Inside of the project directory run:

```bash
npm run authenticate
```

If you don't have `artifacts-npm-credprovider` installed already run:

```bash
npm install --global @microsoft/artifacts-npm-credprovider --registry https://pkgs.dev.azure.com/artifacts-public/23934c1b-a3b5-4b70-9dd3-d1bef4cc72a0/_packaging/AzureArtifacts/npm/registry/
```

### Install dependencies

```bash
npm ci
```

## Working with the template

Start the app by running

```bash
npm run dev
```

Components are written in `@microsoft/fast-element` web component framework. Design system pieces come from the `@mai-ui` repo (Components, tokens and themes).

> **IMPORTANT:** Never make new components if they already exist in the @mai-ui packages, always use the design system first!
