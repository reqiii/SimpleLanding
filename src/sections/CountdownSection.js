import { Section, SectionHeading } from '../ui/primitives.js';
import { siteContent } from '../content.js';

export const CountdownSection = ({ label, title, fallback, orbitLabel }) => Section({
  className: 'section--countdown',
  content: `
    <div class="countdown-stage">
      ${SectionHeading({ number: '08', label, title, align: 'center' })}
      <p class="countdown-stage__value reveal" data-reveal data-reveal-delay="70" data-countdown-target="${siteContent.countdownTarget}" data-countdown-fallback="${fallback}">${fallback}</p>
      <div class="countdown-stage__rings reveal" data-reveal data-reveal-delay="120">
        <div class="countdown-stage__orbit countdown-stage__orbit--outer"></div>
        <div class="countdown-stage__orbit countdown-stage__orbit--inner">
          <span>${orbitLabel}</span>
        </div>
      </div>
    </div>
  `,
});
