import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./components/Style.css"
import { ThemeProvider } from './components/ThemeProvider';
ReactDOM.render(
<ThemeProvider>
    <App />
</ThemeProvider>,
document.getElementById('root'));
