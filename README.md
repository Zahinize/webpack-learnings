# webpack-learnings
Learn webpack with code examples

## Definition
**Webpack** is a static module bundler for modern JavaScript applications. It starts with an entry point and automatically bundles out all dependencies in an efficient manner by making a **dependency graph**.

## Core Concepts
Below core concepts are main properties in its configuration file `webpack.config.js`.
- **Entry** property takes the path of module (by default `./src/index.js`) from where **Webpack** initiates its dependency graph process and thereby creates efficient module bundles.

- **Output** property takes generated bundle configuration (such as filename, path, outputPath, etc.) and hand it over to **Webpack**.

- **Loaders** alias property name is **module**. Webpack only compiles JavaScript language by default. This property is used to add loaders for non-JavaScript languages (such as CSS and its pre-processors like Sass/Less/Stylus, JavaScript pre-processors such as Elm, CoffeeScript, TypeScript, etc.) so that they are processed by **Webpack** compiler and their modules are added in generated bundles.

- **Plugins** property is used to achieve build time tasks like asset minification/obfuscation/dynamic generation etc.

- **Mode** property tells **Webpack** to perform some default bundle optimizations.

- **Browser Compatibility:** **Webpack** supports all modern web browsers till IE9. To use major webpack features on browsers <IE9, you would need to load a polyfill before using it.

## Tutorials
Some feature tutorials mentioned at [Guides | webpack.js.org](https://webpack.js.org/guides/) have been converted into code examples in this repository. They are mentioned below.

- **Getting-Started** section shows a basic webpack bundled page.

- **Asset Management** section tells you how to add assets to your web page.

- **Output Management** section tells you how to set configuration to dynamically generate bundled html page along with its assets and clean unused dependencies from `dist` folder.

- **Development Mode** section tells you various ways to watch changes in your dependencies and create automatic bundles on save.
