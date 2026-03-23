import { Container, ButtonLink } from '../ui/primitives.js';

export const HeaderSection = ({ brand, header }) => Container({
  as: 'header',
  className: 'site-header',
  attributes: 'data-reveal',
  content: `
    <div>
      <p class="site-header__label">${header.label}</p>
      <a class="site-header__brand" href="#top">${brand}</a>
    </div>
    ${ButtonLink({ href: header.action.href, text: header.action.text, variant: 'ghost' })}
  `,
});
