import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const { AppContainer } = require('react-hot-loader');

const renderApp = (Root) => {
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('root')
  );
}

renderApp(App);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;
    renderApp(NewApp);
  });
}
