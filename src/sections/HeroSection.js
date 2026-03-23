import { Section, ButtonLink } from '../ui/primitives.js';

export const HeroSection = ({ eyebrow, title, date, lead, note, cta, secondaryCta }) => Section({
  id: 'top',
  className: 'section--hero',
  content: `
    <div class="hero-layout reveal" data-reveal>
      <p class="hero-layout__eyebrow">${eyebrow}</p>
      <h1 class="hero-layout__title">${title[0]} <span>&amp;</span> ${title[1]}</h1>
      <p class="hero-layout__date">${date}</p>
      <p class="hero-layout__lead">${lead}</p>
      <p class="hero-layout__note">${note}</p>
      <div class="hero-layout__actions">
        ${ButtonLink({ href: '#details', text: cta })}
        ${ButtonLink({ href: '#rsvp', text: secondaryCta, variant: 'ghost' })}
      </div>
    </div>
  `,
});
