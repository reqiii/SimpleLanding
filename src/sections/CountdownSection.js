import { Section, SectionHeading } from '../ui/primitives.js';

export const CountdownSection = ({ number, label, title, target, fallback, completeText, orbitLabel, units }) => Section({
  className: 'section--countdown',
  content: `
    <div class="countdown-stage">
      ${SectionHeading({ number, label, title, align: 'center' })}
      <p
        class="countdown-stage__value reveal"
        data-reveal
        data-reveal-delay="70"
        data-countdown-target="${target}"
        data-countdown-fallback="${fallback}"
        data-countdown-complete="${completeText}"
        data-countdown-days="${units.days}"
        data-countdown-hours="${units.hours}"
        data-countdown-minutes="${units.minutes}"
        data-countdown-suffix="${units.suffix}"
      >${fallback}</p>
      <div class="countdown-stage__rings reveal" data-reveal data-reveal-delay="120">
        <div class="countdown-stage__orbit countdown-stage__orbit--outer"></div>
        <div class="countdown-stage__orbit countdown-stage__orbit--inner">
          <span>${orbitLabel}</span>
        </div>
      </div>
    </div>
  `,
});
