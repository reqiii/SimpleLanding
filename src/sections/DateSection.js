import { Section, SectionHeading } from '../ui/primitives.js';

export const DateSection = ({ number, label, title, weekday, fullDate, time, copy }) => Section({
  className: 'section--date',
  content: `
    <div class="date-stage">
      ${SectionHeading({ number, label, title, align: 'center' })}
      <div class="date-stage__content reveal" data-reveal data-reveal-delay="80">
        <p class="date-stage__weekday">${weekday}</p>
        <p class="date-stage__date">${fullDate}</p>
        <p class="date-stage__time">${time}</p>
        <p class="date-stage__copy">${copy}</p>
      </div>
    </div>
  `,
});
