# React + Vite

This template provides a minimal setup to get React working with Vite, featuring HMR (Hot Module Replacement) and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## React and Vite

The project is set up to use React with Vite. The entire page is constructed using various components, with JavaScript XML (i.e., .jsx) as the markup language.

### Image Management

Images located in the `assets/images` directory are compiled into a single `imagesIndex.js` file, which exports the variables for use throughout the project.

## Using Sass

The project is configured to use Sass. It includes an `index.scss` file that compiles all Sass files. You can write your styles in `.scss` files located in the `src/styles` directory.

## Configuring Routes with React Router

Routes are managed using `react-router-dom`. You can define and manage your routes in the `src/App.js` file or in separate files, depending on your project structure.

## Project Structure

- **`src/`**: Contains all source files for the project.
  - **`components/`**: Reusable components.
  - **`pages/`**: Main pages or views.
  - **`styles/`**: Stylesheets (Sass).
  - **`App.jsx`**: Main configuration file for routes and components.
- **`public/`**: Static files that are served directly.
- **`vite.config.js`**: Vite configuration file.

## Running the Project

- **`npm run dev`**: Starts the development server at `http://localhost:3000`.
- **`npm run build`**: Builds the project for production in the `dist` directory.
- **`npm run preview`**: Previews the production build.

