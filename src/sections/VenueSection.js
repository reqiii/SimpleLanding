import { Section, SectionHeading, SurfaceCard, ButtonLink } from '../ui/primitives.js';

export const VenueSection = ({ label, title, copy, addressLabel, address, addressCopy, mapAction }) => Section({
  className: 'section--venue',
  content: `
    <div class="split-layout split-layout--venue">
      <div class="venue-stack">
        ${SectionHeading({ label, title })}
        ${SurfaceCard({
          className: 'surface-card--soft reveal',
          attributes: 'data-reveal data-reveal-delay="60"',
          content: `<p>${copy}</p>`,
        })}
      </div>
      <div class="venue-stack">
        ${SurfaceCard({
          className: 'surface-card--accent reveal',
          attributes: 'data-reveal data-reveal-delay="120"',
          content: `
            <p class="section-heading__label">${addressLabel}</p>
            <h3 class="surface-card__title">${address}</h3>
            <p>${addressCopy}</p>
            <div class="venue-stack__actions">
              ${ButtonLink({ href: '#rsvp', text: 'Share your reply' })}
              ${ButtonLink({ href: '#top', text: mapAction, variant: 'ghost' })}
            </div>
          `,
        })}
      </div>
    </div>
  `,
});
