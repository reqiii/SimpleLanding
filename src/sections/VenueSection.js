import { Section, SectionHeading, SurfaceCard, ButtonLink } from '../ui/primitives.js';

export const VenueSection = ({ label, title, copy, addressLabel, address, addressCopy, mapAction }) => Section({
  className: 'section--venue',
  content: `
    <div class="split-layout split-layout--venue">
      ${SurfaceCard({
        className: 'surface-card--accent reveal',
        attributes: 'data-reveal',
        content: `
          <p class="section-heading__label">${label}</p>
          <h2 class="surface-card__title">${title}</h2>
          <p>${copy}</p>
          ${ButtonLink({ href: '#rsvp', text: 'Share your reply' })}
        `,
      })}
      <div class="venue-stack">
        ${SurfaceCard({
          className: 'surface-card--soft reveal',
          attributes: 'data-reveal data-reveal-delay="80"',
          content: `
            ${SectionHeading({ label: addressLabel, title: address, reveal: false })}
            <p>${addressCopy}</p>
            ${ButtonLink({ href: '#top', text: mapAction, variant: 'ghost' })}
          `,
        })}
      </div>
    </div>
  `,
});
