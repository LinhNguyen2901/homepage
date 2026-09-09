# Linh Nguyen Portfolio

Personal portfolio website built with React and TypeScript. It includes responsive Sass styling, routed sections, and a D3 revenue bar chart with hover tooltips.

## Links

- Live website: https://LinhNguyen2901.github.io/homepage/
- GitHub repository: https://github.com/LinhNguyen2901/homepage

## Requirements

- Node.js 20 or newer
- npm

## Run Locally

From the project folder, install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open http://localhost:3000 in a browser. Because the site uses `HashRouter` for GitHub Pages, routed sections use URLs such as `/#/experience`, `/#/about`, `/#/chart`, and `/#/connect`.

## Deployment

Deployment is automated with GitHub Actions. Push to the `main` branch to run the workflow in `.github/workflows/deploy.yml`. The workflow installs dependencies, builds the app, and deploys the `build` folder to GitHub Pages.

For the workflow to deploy, set the repository's GitHub Pages source to **GitHub Actions** under **Settings -> Pages**.

## Main Technologies

- React and TypeScript
- Sass (`.scss`)
- React Router with `HashRouter`
- GitHub Actions and GitHub Pages
