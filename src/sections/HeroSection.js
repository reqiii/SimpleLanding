import { Section, ButtonLink } from '../ui/primitives.js';

export const HeroSection = ({ topLeft, topRight, title, date, location, poetic, cta, secondaryCta }) => Section({
  id: 'top',
  className: 'section--hero',
  content: `
    <div class="hero-stage reveal" data-reveal>
      <div class="hero-stage__topline">
        <p class="hero-stage__decor hero-stage__decor--left">${topLeft}</p>
        <p class="hero-stage__decor hero-stage__decor--right">${topRight}</p>
      </div>
      <div class="hero-stage__center">
        <h1 class="hero-stage__title">
          <span>${title[0]}</span>
          <span>&amp;</span>
          <span>${title[1]}</span>
        </h1>
        <p class="hero-stage__date">${date}</p>
        <p class="hero-stage__location">${location}</p>
      </div>
      <p class="hero-stage__poetic">${poetic}</p>
      <div class="hero-stage__actions">
        ${ButtonLink({ href: '#details', text: cta })}
        ${ButtonLink({ href: '#rsvp', text: secondaryCta, variant: 'ghost' })}
      </div>
    </div>
  `,
});
