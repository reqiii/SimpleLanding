import { Section, SurfaceCard } from '../ui/primitives.js';

export const DateSection = ({ label, weekday, fullDate, time, copy }) => Section({
  className: 'section--date',
  content: `
    <div class="date-stage reveal" data-reveal>
      ${SurfaceCard({
        className: 'surface-card--frame date-stage__card',
        content: `
          <p class="section-heading__label">${label}</p>
          <h2 class="date-stage__weekday">${weekday}</h2>
          <p class="date-stage__date">${fullDate}</p>
          <p class="date-stage__time">${time}</p>
          <p class="date-stage__copy">${copy}</p>
        `,
      })}
    </div>
  `,
});
