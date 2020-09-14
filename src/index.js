import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/Home/Home'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
