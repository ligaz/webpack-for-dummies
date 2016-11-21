# **Demo 2**

This demo illustrates advanced Webpack features and techniques:
* Configuration merging
* Server app bundling (for server side rendering)
* Hot Module Reloading

## Steps

### Prerequisites

Checkout the start `branch` and `npm install` all dependencies.

Explain that: 
  * The app is the same as Demo 1, but comes with a server written in Express.
  * It compiles the server and serves the client bundle via `webpack-dev-middleware`. Explain the needed changes in the webpack configuration to make this work: mainly `process.env.APP_ROOT_DIR`.

### Add hot module reloading via React Hot Loader.

1. Update Webpack config with the commented code (at the bottom).
```ts
  entry: [
    'webpack-hot-middleware/client?dynamicPublicPath=true',
    'react-hot-loader/patch',
    join(sourcePath, 'index.tsx'),
  ],

  // In loaders
  { test: /\.tsx?$/, loaders: ['react-hot-loader/webpack', `awesome-typescript-loader?tsconfig=${join(sourcePath, 'tsconfig.json')}`] },

  // In plugins
  new webpack.HotModuleReplacementPlugin()
```
2. Update `App.tsx` to **accept** the change:

  * Use `AppContainer` to wrap the root component:
  ```jsx
  const { AppContainer } = require('react-hot-loader');
  ...
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('root')
  );
  ```
  Explain what `AppContainer` does and why it is needed.

  * Re-render the app on hot change:
  ```ts
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App', () => {
      const NewApp = require('./App').default;
      renderApp(NewApp);
    });
  }
  ```
  Explain that the App has a `default` export and that's the reason we need to require it like this.

### Add server side rendering

1. Change the `home.tsx` to render the `App` component. Mention that the file has an `.tsx` extension. 
```ts
import * as React from 'react';
import { renderToString } from 'react-dom/server';

//...
export const home: RequestHandler = (req, res, next) => {
  const app = renderToString(
      <App />
  );
  res.send(renderIndex(app));
};

// Uncomment the renderIndex function:
const indexTemplate = template(readFileSync(join(__dirname, 'index.html')).toString(), {
  interpolate: /{{([\s\S]+?)}}/g,
});

const renderIndex = (app: string) => (
  indexTemplate({
    app,
  })
);
```
Run the app show that it does not compile because the client is bundled with Webpack and the server is not.

2. Extract a common Webpack config that should be used for server and client bundling. Explain the server Webpack configuration and its differences with the client one: mainly: `target: 'node'` and `externals`. 

Change `npm start` script to use webpack for bundling. Run the app and show that it does not compile due to CSS imports.

3. Use the ExtractTextPlugin to extract the CSS into separate file. Run the app again and show that it does not work. Explain that it is never easy with Webpack 😜

4. Change the `process.env.APP_ROOT_DIR` to one level up. Run the app and show that everything works now 🎉  


