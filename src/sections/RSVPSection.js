import { Section, SectionHeading } from '../ui/primitives.js';

const renderOption = (name, option, index) => `
  <label class="rsvp-choice">
    <input type="radio" name="${name}" value="${option}" ${index === 0 ? 'checked' : ''} />
    <span>${option}</span>
  </label>
`;

export const RSVPSection = ({ number, label, title, deadline, fields, attendanceOptions, transferOptions, submit }) => Section({
  id: 'rsvp',
  className: 'section--rsvp',
  content: `
    <div class="rsvp-layout reveal" data-reveal>
      <div class="rsvp-ornament">
        <span class="rsvp-ornament__line rsvp-ornament__line--top"></span>
        <span class="rsvp-ornament__line rsvp-ornament__line--bottom"></span>
        <span class="rsvp-ornament__arc rsvp-ornament__arc--left"></span>
        <span class="rsvp-ornament__arc rsvp-ornament__arc--right"></span>
        ${SectionHeading({ number, label, title, reveal: false })}
      </div>
      <p class="rsvp-layout__deadline reveal" data-reveal data-reveal-delay="70">${deadline}</p>
      <div class="rsvp-layout__frame reveal" data-reveal data-reveal-delay="120">
        <form class="rsvp-form">
          <label class="rsvp-form__field">
            <span>${fields.name}</span>
            <input type="text" name="name" placeholder="Ваше имя" />
          </label>
          <fieldset class="rsvp-form__fieldset">
            <legend>${fields.attendance}</legend>
            <div class="rsvp-form__choices">
              ${attendanceOptions.map((option, index) => renderOption('attendance', option, index)).join('')}
            </div>
          </fieldset>
          <fieldset class="rsvp-form__fieldset">
            <legend>${fields.transfer}</legend>
            <div class="rsvp-form__choices">
              ${transferOptions.map((option, index) => renderOption('transfer', option, index)).join('')}
            </div>
          </fieldset>
          <button type="button" class="button button--ghost">${submit}</button>
        </form>
      </div>
    </div>
  `,
});
