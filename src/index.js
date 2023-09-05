//import React from 'react';
// import { createRoot } from 'react-dom';
// import ReactDOM from 'react-dom';

// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// const root = document.getElementById('root');
// const reactRoot = createRoot(root);
// reactRoot.render(<App />);



import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);