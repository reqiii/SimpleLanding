import { Section, SectionHeading, SurfaceCard } from '../ui/primitives.js';

export const DateSection = ({ label, weekday, fullDate, time, copy }) => Section({
  className: 'section--date',
  content: `
    <div class="date-stage">
      ${SectionHeading({ label, title: 'Save the date and plan your arrival.', align: 'center' })}
      ${SurfaceCard({
        className: 'surface-card--frame date-stage__card reveal',
        attributes: 'data-reveal data-reveal-delay="80"',
        content: `
          <p class="section-heading__label">${label}</p>
          <h3 class="date-stage__weekday">${weekday}</h3>
          <p class="date-stage__date">${fullDate}</p>
          <p class="date-stage__time">${time}</p>
          <p class="date-stage__copy">${copy}</p>
        `,
      })}
    </div>
  `,
});
