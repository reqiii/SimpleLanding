import { Section, SectionHeading, ButtonLink } from '../ui/primitives.js';

export const VenueSection = ({ number, label, title, venueName, address, copy, mapAction }) => Section({
  className: 'section--venue',
  content: `
    <div class="venue-ornament reveal" data-reveal>
      <div class="venue-ornament__frame">
        <span class="venue-ornament__loop venue-ornament__loop--left"></span>
        <span class="venue-ornament__loop venue-ornament__loop--right"></span>
        <span class="venue-ornament__node venue-ornament__node--left"></span>
        <span class="venue-ornament__node venue-ornament__node--right"></span>
        <div class="venue-ornament__content">
          ${SectionHeading({ number, label, title, align: 'center', reveal: false })}
          <p class="venue-ornament__address">${address}</p>
          <h3 class="venue-ornament__name">${venueName}</h3>
          <p class="venue-ornament__copy">${copy}</p>
          ${ButtonLink({ href: '#rsvp', text: mapAction, variant: 'ghost' })}
        </div>
      </div>
    </div>
  `,
});
