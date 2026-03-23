import { Section, SectionHeading, SurfaceCard } from '../ui/primitives.js';

export const IntroSection = ({ label, title, copy }) => Section({
  id: 'details',
  className: 'section--intro',
  content: `
    <div class="split-layout split-layout--intro">
      ${SectionHeading({ label, title })}
      ${SurfaceCard({
        className: 'surface-card--soft reveal',
        attributes: 'data-reveal data-reveal-delay="100"',
        content: `<p>${copy}</p>`,
      })}
    </div>
  `,
});
