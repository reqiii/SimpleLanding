import { Section } from '../ui/primitives.js';

export const HeroSection = ({ topLeft, topRight, title, date, location, poetic }) => Section({
  id: 'top',
  className: 'section--hero',
  content: `
    <div class="hero-stage reveal" data-reveal>
      <div class="hero-stage__inner">
        <div class="hero-stage__composition">
          <p class="hero-stage__invite-label">${topLeft}</p>
          <div class="hero-stage__core">
            <div class="hero-stage__layer hero-stage__layer--decorative" aria-hidden="true">
              <p class="hero-stage__decor hero-stage__decor--top">${topLeft}</p>
              <p class="hero-stage__decor hero-stage__decor--bottom">${topRight}</p>
            </div>
            <div class="hero-stage__layer hero-stage__layer--text">
              <h1 class="hero-stage__title">
                <span>${title[0]}</span>
                <span>&amp;</span>
                <span>${title[1]}</span>
              </h1>
              <div class="hero-stage__date-wrap">
                <div class="hero-stage__ring-system" aria-hidden="true">
                  <span class="hero-stage__ring hero-stage__ring--outer"></span>
                  <span class="hero-stage__ring hero-stage__ring--inner"></span>
                  <span class="hero-stage__ring hero-stage__ring--core"></span>
                </div>
                <p class="hero-stage__date">${date}</p>
              </div>
              <p class="hero-stage__location">${location}</p>
            </div>
          </div>
        </div>
        <p class="hero-stage__poetic">${poetic}</p>
      </div>
    </div>
  `,
});
