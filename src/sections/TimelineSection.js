import { Section, SectionHeading } from '../ui/primitives.js';

const renderItem = ([time, title, copy], index) => `
  <article class="timeline-point reveal" data-reveal data-reveal-delay="${index * 70}">
    <span class="timeline-point__dot" aria-hidden="true"></span>
    <div class="timeline-point__row">
      <p class="timeline-point__label">${title}</p>
      <p class="timeline-point__time">${time}</p>
    </div>
    <p class="timeline-point__copy">${copy}</p>
  </article>
`;

export const TimelineSection = ({ number, label, title, items }) => Section({
  className: 'section--timeline',
  content: `
    <div class="timeline-ornament reveal" data-reveal>
      <span class="timeline-ornament__line timeline-ornament__line--top"></span>
      <span class="timeline-ornament__line timeline-ornament__line--bottom"></span>
      <span class="timeline-ornament__arc timeline-ornament__arc--left"></span>
      <span class="timeline-ornament__arc timeline-ornament__arc--right"></span>
      ${SectionHeading({ number, label, title, align: 'center', reveal: false })}
    </div>
    <div class="timeline-system">
      <div class="timeline-system__track">
        ${items.map(renderItem).join('')}
      </div>
    </div>
  `,
});
