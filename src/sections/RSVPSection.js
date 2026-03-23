import { Section, SectionHeading } from '../ui/primitives.js';

const renderOption = (option, index) => `
  <label class="rsvp-choice">
    <input type="radio" name="attendance" value="${option}" ${index === 0 ? 'checked' : ''} />
    <span>${option}</span>
  </label>
`;

export const RSVPSection = ({ label, title, deadline, fields, options, submit }) => Section({
  id: 'rsvp',
  className: 'section--rsvp',
  content: `
    <div class="rsvp-layout">
      ${SectionHeading({ number: '07', label, title })}
      <p class="rsvp-layout__deadline reveal" data-reveal data-reveal-delay="70">${deadline}</p>
      <form class="rsvp-form reveal" data-reveal data-reveal-delay="120">
        <label class="rsvp-form__field">
          <span>${fields.name}</span>
          <input type="text" name="name" placeholder="Your full name" />
        </label>
        <fieldset class="rsvp-form__fieldset">
          <legend>${fields.attendance}</legend>
          <div class="rsvp-form__choices">
            ${options.map(renderOption).join('')}
          </div>
        </fieldset>
        <button type="button" class="button button--ghost">${submit}</button>
      </form>
    </div>
  `,
});
