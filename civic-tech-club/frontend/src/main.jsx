import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app using the root object
root.render(<App />);