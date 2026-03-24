import { Section, SectionHeading } from '../ui/primitives.js';

export const IntroSection = ({ number, label, title, copy }) => Section({
  id: 'details',
  className: 'section--intro',
  content: `
    <div class="editorial-block editorial-block--intro">
      <div class="intro-ornament reveal" data-reveal data-reveal-delay="80">
        ${SectionHeading({ number, label, title, align: 'center' })}
        <div class="intro-ornament__frame">
          <p class="editorial-block__copy">${copy}</p>
        </div>
      </div>
    </div>
  `,
});
