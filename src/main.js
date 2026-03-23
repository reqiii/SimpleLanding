import './styles/index.css';
import { renderApp } from './app/renderApp.js';
import { setupReveal } from './app/motion.js';

const app = document.querySelector('#app');

app.innerHTML = renderApp();
setupReveal(app);
