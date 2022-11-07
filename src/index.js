import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 className='components'>Styling using Functional and Class Components</h1>
    <Main/>
  </>
);