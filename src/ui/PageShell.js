import { BackgroundLayers } from './background/BackgroundLayers.js';
import { Container } from './primitives.js';

export const PageShell = ({ content, quickFacts }) => `
  <div class="page-shell theme-invite">
    ${BackgroundLayers()}
    <div class="page-shell__chrome">
      ${Container({
        as: 'div',
        className: 'page-shell__meta reveal',
        attributes: 'data-reveal data-reveal-delay="0"',
        content: quickFacts.map((item) => `<span>${item}</span>`).join(''),
      })}
    </div>
    <main class="page-main">${content}</main>
  </div>
`;
