import { Section, SurfaceCard } from '../ui/primitives.js';
import { siteContent } from '../content.js';

export const CountdownSection = ({ label, fallback }) => Section({
  className: 'section--countdown',
  content: `
    ${SurfaceCard({
      className: 'countdown-panel reveal',
      attributes: 'data-reveal',
      content: `
        <p class="section-heading__label">${label}</p>
        <h2 class="countdown-panel__value" data-countdown-target="${siteContent.countdownTarget}" data-countdown-fallback="${fallback}">${fallback}</h2>
      `,
    })}
  `,
});
