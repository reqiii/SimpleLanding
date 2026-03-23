import { Section, SurfaceCard, ButtonLink } from '../ui/primitives.js';

export const HeroSection = ({
  eyebrow,
  title,
  date,
  lead,
  note,
  cta,
  secondaryCta,
  summaryLabel,
  summaryTitle,
  summaryItems,
}) => Section({
  id: 'top',
  className: 'section--hero',
  content: `
    <div class="hero-layout">
      <div class="hero-layout__content reveal" data-reveal>
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
      ${SurfaceCard({
        className: 'hero-layout__summary reveal',
        attributes: 'data-reveal data-reveal-delay="100"',
        content: `
          <p class="section-heading__label">${summaryLabel}</p>
          <h2 class="surface-card__title hero-layout__summary-title">${summaryTitle}</h2>
          <ul class="hero-layout__summary-list">
            ${summaryItems.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        `,
      })}
    </div>
  `,
});
