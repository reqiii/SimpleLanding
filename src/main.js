import './styles.css';
import { renderPage } from './components/sections.js';
import { setupReveal } from './reveal.js';

const app = document.querySelector('#app');

app.innerHTML = renderPage();
setupReveal();
