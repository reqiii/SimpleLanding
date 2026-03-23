import { Section, SectionHeading } from '../ui/primitives.js';

const renderItem = ([time, title, copy], index) => `
  <article class="timeline-point reveal" data-reveal data-reveal-delay="${index * 70}">
    <p class="timeline-point__label">${title}</p>
    <p class="timeline-point__time">${time}</p>
    <p class="timeline-point__copy">${copy}</p>
  </article>
`;

export const TimelineSection = ({ number, label, title, items }) => Section({
  className: 'section--timeline',
  content: `
    ${SectionHeading({ number, label, title, align: 'center' })}
    <div class="timeline-system">
      <span class="timeline-system__line"></span>
      <div class="timeline-system__track">
        ${items.map(renderItem).join('')}
      </div>
    </div>
  `,
});
