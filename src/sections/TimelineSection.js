import { Section, SectionHeading, SurfaceCard } from '../ui/primitives.js';

const renderItem = ([time, title, copy], index) => SurfaceCard({
  className: 'timeline-item reveal',
  attributes: `data-reveal data-reveal-delay="${index * 60}"`,
  content: `
    <div class="timeline-item__time">${time}</div>
    <div class="timeline-item__body">
      <h3>${title}</h3>
      <p>${copy}</p>
    </div>
  `,
});

export const TimelineSection = ({ label, title, items }) => Section({
  className: 'section--timeline',
  content: `
    ${SectionHeading({ label, title, align: 'center' })}
    <div class="timeline-list">
      ${items.map(renderItem).join('')}
    </div>
  `,
});
