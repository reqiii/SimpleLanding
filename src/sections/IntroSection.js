import { Section, SectionHeading } from '../ui/primitives.js';

export const IntroSection = ({ number, label, title, copy }) => Section({
  id: 'details',
  className: 'section--intro',
  content: `
    <div class="editorial-block editorial-block--intro">
      ${SectionHeading({ number, label, title, align: 'center' })}
      <p class="editorial-block__copy reveal" data-reveal data-reveal-delay="80">${copy}</p>
    </div>
  `,
});
