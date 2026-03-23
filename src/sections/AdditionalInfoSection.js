import { Section, SectionHeading, SurfaceCard } from '../ui/primitives.js';

const renderNote = ({ label, title, copy }, index) => SurfaceCard({
  className: 'reveal',
  attributes: `data-reveal data-reveal-delay="${index * 90}"`,
  content: `
    <p class="section-heading__label">${label}</p>
    <h3 class="surface-card__title">${title}</h3>
    <p>${copy}</p>
  `,
});

export const AdditionalInfoSection = ({ label, items }) => Section({
  className: 'section--notes',
  content: `
    ${SectionHeading({ label, title: 'A few practical notes for the evening.', align: 'center' })}
    <div class="notes-grid">
      ${items.map(renderNote).join('')}
    </div>
  `,
});
