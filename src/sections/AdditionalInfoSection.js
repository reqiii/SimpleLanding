import { Section, SectionHeading } from '../ui/primitives.js';

const renderPalette = ([index, name, color], delay) => `
  <div class="dresscode-bar reveal" data-reveal data-reveal-delay="${delay}">
    <span class="dresscode-bar__index" aria-label="/${index}">
      <span class="dresscode-bar__slash">/</span>
      <span class="dresscode-bar__code">${index}</span>
    </span>
    <div class="dresscode-bar__swatch" style="--dresscode-swatch:${color}"></div>
    <span class="dresscode-bar__name">${name}</span>
  </div>
`;

const renderDressCodeBars = (text, modifier = '') => `
  <div class="dresscode-bars ${modifier}" aria-hidden="true">
    <span class="dresscode-bars__row">${text}</span>
    <span class="dresscode-bars__row">${text}</span>
    <span class="dresscode-bars__row">${text}</span>
  </div>
`;

export const AdditionalInfoSection = ({ dressCode, details }) => Section({
  className: 'section--details',
  content: `
    ${renderDressCodeBars(dressCode.marquee, 'dresscode-bars--top')}
    <div class="dresscode-layout">
      ${SectionHeading({ number: dressCode.number, label: dressCode.label, title: dressCode.label, align: 'center' })}
      <p class="dresscode-layout__copy reveal" data-reveal data-reveal-delay="70">${dressCode.title}</p>
      <div class="dresscode-swatches">
        ${dressCode.palette.map((item, index) => renderPalette(item, index * 50)).join('')}
      </div>
    </div>
    ${renderDressCodeBars(dressCode.marquee, 'dresscode-bars--bottom')}
    <div class="details-layout">
      ${SectionHeading({ number: details.number, label: details.label, title: details.title })}
      <div class="details-layout__body reveal" data-reveal data-reveal-delay="70">
        <p class="details-layout__intro">${details.intro}</p>
        <div class="details-layout__text-group">
          <h3><span class="details-star" aria-hidden="true">✦</span>${details.wishesTitle}</h3>
          <p>${details.wishes}</p>
        </div>
        <div class="organizer-field">
          <span class="organizer-field__label"><span class="details-star" aria-hidden="true">✦</span>${details.organizerLabel}</span>
          <strong>${details.organizerName}</strong>
          <a class="organizer-field__contact" href="tel:${details.organizerPhone.replace(/[^+\d]/g, '')}"><span class="details-star" aria-hidden="true">✦</span>${details.organizerPhone}</a>
        </div>
        <p class="details-layout__note">${details.organizerNote}</p>
      </div>
    </div>
  `,
});
