export const classNames = (...values) => values.filter(Boolean).join(' ');

export const Container = ({ as = 'div', className = '', attributes = '', content = '' }) => `
  <${as} class="${classNames('container', className)}" ${attributes}>${content}</${as}>
`;

export const Section = ({ id = '', className = '', attributes = '', content = '' }) => `
  <section ${id ? `id="${id}"` : ''} class="${classNames('section', className)}" ${attributes}>
    ${Container({ content })}
  </section>
`;

export const SurfaceCard = ({ className = '', attributes = '', content = '' }) => `
  <article class="${classNames('surface-card', className)}" ${attributes}>${content}</article>
`;

export const SectionHeading = ({ label, title, align = 'start', reveal = true }) => `
  <header class="section-heading section-heading--${align} ${reveal ? 'reveal' : ''}" ${reveal ? 'data-reveal' : ''}>
    <p class="section-heading__label">${label}</p>
    <h2 class="section-heading__title">${title}</h2>
  </header>
`;

export const ButtonLink = ({ href, text, variant = 'primary' }) => `
  <a class="button button--${variant}" href="${href}">${text}</a>
`;
