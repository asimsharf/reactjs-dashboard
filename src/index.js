import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@ionic/react/css/core.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupIonicReact } from '@ionic/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setupIonicReact();
reportWebVitals();
