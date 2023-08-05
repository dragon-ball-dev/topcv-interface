import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/lib/animate/animate.min.css";
ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root'),
);

registerServiceWorker();
