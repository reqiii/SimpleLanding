import { Section } from '../ui/primitives.js';

export const HeroSection = ({ topLeft, title, date, location, poetic }) => Section({
  id: 'top',
  className: 'section--hero',
  content: `
    <div class="hero-stage reveal" data-reveal>
      <p class="hero-stage__decor">${topLeft}</p>
      <div class="hero-stage__center">
        <h1 class="hero-stage__title">
          <span>${title[0]}</span>
          <span>&amp;</span>
          <span>${title[1]}</span>
        </h1>
        <div class="hero-stage__date-wrap" aria-hidden="true">
          <span class="hero-stage__date-ring hero-stage__date-ring--outer"></span>
          <span class="hero-stage__date-ring hero-stage__date-ring--inner"></span>
          <p class="hero-stage__date">${date}</p>
        </div>
        <p class="hero-stage__location">${location}</p>
      </div>
      <p class="hero-stage__poetic">${poetic}</p>
      <div class="hero-stage__ornaments" aria-hidden="true">
        <span class="hero-stage__arc hero-stage__arc--left"></span>
        <span class="hero-stage__arc hero-stage__arc--right"></span>
      </div>
    </div>
  `,
});
