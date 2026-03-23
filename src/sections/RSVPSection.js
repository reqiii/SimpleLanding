import { Section, SectionHeading, SurfaceCard } from '../ui/primitives.js';

export const RSVPSection = ({ label, title, fields, options, submit }) => Section({
  id: 'rsvp',
  className: 'section--rsvp',
  content: `
    ${SectionHeading({ label, title })}
    ${SurfaceCard({
      className: 'surface-card--form reveal',
      attributes: 'data-reveal data-reveal-delay="60"',
      content: `
        <form class="rsvp-form">
          <label>
            <span>${fields.name}</span>
            <input type="text" name="name" placeholder="Your full name" />
          </label>
          <label>
            <span>${fields.attendance}</span>
            <select name="attendance">
              ${options.map((option) => `<option>${option}</option>`).join('')}
            </select>
          </label>
          <label>
            <span>${fields.guest}</span>
            <input type="text" name="guest" placeholder="If you are bringing someone" />
          </label>
          <label>
            <span>${fields.note}</span>
            <textarea name="note" rows="4" placeholder="Share allergies or seating notes"></textarea>
          </label>
          <button type="button" class="button button--primary">${submit}</button>
        </form>
      `,
    })}
  `,
});
