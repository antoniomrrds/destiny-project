import React from 'react';
import ReactDOM from 'react-dom/client';

import { Reset } from './styles/Reset';
import { GlobalStyles } from './styles/GlobalStyles';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Reset />
    <GlobalStyles />
    <App />
  </>,
);
