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
      <div class="rsvp-layout__frame reveal" data-reveal data-reveal-delay="120">
        <span class="rsvp-layout__halo" aria-hidden="true"></span>
        <form class="rsvp-form">
          <div class="rsvp-form__stack">
            <div class="rsvp-form__group">
              <label class="rsvp-form__field">
                <span>${fields.name}</span>
                <input type="text" name="name" placeholder="Ваше имя" />
              </label>
            </div>
            <fieldset class="rsvp-form__fieldset rsvp-form__group">
              <legend>${fields.attendance}</legend>
              <div class="rsvp-form__choices">
                ${attendanceOptions.map((option, index) => renderOption('attendance', option, index)).join('')}
              </div>
            </fieldset>
            <fieldset class="rsvp-form__fieldset rsvp-form__group">
              <legend>${fields.transfer}</legend>
              <div class="rsvp-form__choices">
                ${transferOptions.map((option, index) => renderOption('transfer', option, index)).join('')}
              </div>
            </fieldset>
          </div>
          <div class="rsvp-form__actions">
            <p class="rsvp-form__helper">${deadline}</p>
            <button type="button" class="button button--ghost">${submit}</button>
          </div>
        </form>
      </div>
    </div>
  `,
});
