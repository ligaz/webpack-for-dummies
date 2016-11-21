# **Demo 1**

This demo illustrates basic Webpack configuration. 

## Steps

Checkout the start `branch` and `npm install` all dependencies.

0. Explain that: 
  * All required modules are already installed in order to not waste time installing them. Show `package.json`.
  * We are going to write the Webpack configuration in TypeScript in order to avoid silly mistakes. That's the reason why we have ts-node installed to eliminate the need for compiling the Wepback configuration files.
1. Add the following code to the Webpack configuration file explaining why we are adding each key:
```ts
entry: join(sourcePath, 'index.tsx'),
output: {
  path: outputPath,
  filename: 'index.js',
},
resolve: {
  extensions: ['', '.js', '.ts', '.tsx'],
  root: sourcePath,
},
module: {
  loaders: [
    { test: /\.tsx?$/, loader: `awesome-typescript-loader?tsconfig=${join(sourcePath, 'tsconfig.json')}` },
    { test: /\.css$/, loader: 'style!css' },
    { test: /\.svg$/, loader: 'url' },
  ],
},
plugins: [
  new HtmlWebpackPlugin({
    template: join(sourcePath, 'index.html'),
  }),
],
```
2. Show how to debug the generated code. Add `devtool: 'source-map'` to the configuration.
3. Add CSS to "beatify" the app. 
    * Include the loaders: 
    ```ts
    { test: /\.css$/, loader: 'style!css' }
    ```
    Explain how they are chained and what `css` and `style` loaders actually do.
    * `import` CSS files: `index.css` in `index.tsx` and `App.css` in `App.tsx`
    * Show the generated HTML via Chrome's Elements tab.
4. Add the app's logo.
    * Include the loader: 
    ```ts
    { test: /\.svg$/, loader: 'url' }
    ```
    * `import` the logo:
    ```ts
    const logo = require('./logo.svg');
    ```
    Explain why we are using require (to please TypeScript).
    * Use the logo. Insert an `img` after the `<h2>` in `App.tsx`:
    ```jsx
    <img src={logo} className="App-logo" alt="logo" />
    ```
