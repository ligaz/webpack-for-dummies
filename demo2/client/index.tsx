import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const renderApp = (Root) => {
  ReactDOM.render(
      <Root />,
    document.getElementById('root')
  );
}

renderApp(App);