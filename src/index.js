import React from "react";
import App from './App'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css'

const container = document.getElementById('root');
const roots = createRoot(container); 
roots.render(
    <Router>
        <App tab="home" />
    </Router>
);