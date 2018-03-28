import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.min.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
