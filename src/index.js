import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './assets/css/awesome.css';
import './assets/css/style.less';

import App from './components/App.jsx';
import routes from './routes';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <HashRouter>
      <App>{routes}</App>
    </HashRouter>
  </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
