import { siteContent } from '../content.js';

const renderTimelineItem = ([time, title, copy]) => `
  <article class="timeline-item reveal" data-reveal>
    <div class="timeline-item__time">${time}</div>
    <div class="timeline-item__body">
      <h3>${title}</h3>
      <p>${copy}</p>
    </div>
  </article>
`;

const renderNoteCard = ({ label, title, copy }) => `
  <article class="content-card reveal" data-reveal>
    <p class="section-heading__label">${label}</p>
    <h2>${title}</h2>
    <p class="muted">${copy}</p>
  </article>
`;

export const renderPage = () => {
  const { brand, location, dateShort, dateNumeric, hero, intro, dateBlock, venue, timeline, timelineTitle, ribbonWords, notes, rsvp, countdown } = siteContent;

  return `
    <div class="page-shell">
      <div class="page-backdrop" aria-hidden="true">
        <div class="backdrop-layer backdrop-layer--base"></div>
        <div class="backdrop-layer backdrop-layer--photo"></div>
        <div class="backdrop-layer backdrop-layer--veil"></div>
        <div class="backdrop-highlight highlight--halo"></div>
        <div class="backdrop-highlight highlight--rose"></div>
        <div class="backdrop-highlight highlight--gold"></div>
        <div class="grain"></div>
      </div>

      <header class="site-header container reveal" data-reveal>
        <div class="brand-mark">${brand}</div>
        <nav class="header-meta" aria-label="Event quick facts">
          <span>${location}</span>
          <span>${dateShort}</span>
        </nav>
      </header>

      <main>
        <section class="hero section container">
          <div class="hero__frame reveal" data-reveal>
            <div class="hero__eyebrow">${hero.eyebrow}</div>
            <p class="hero__lead">${hero.lead}</p>
            <h1 class="hero__title">${hero.title[0]} <span>&amp;</span> ${hero.title[1]}</h1>
            <p class="hero__date">${dateNumeric}</p>
            <p class="hero__note">${hero.note}</p>
            <a class="button button--ghost" href="#details">${hero.cta}</a>
          </div>
        </section>

        <section class="section container intro-grid" id="details">
          <div class="section-heading reveal" data-reveal>
            <p class="section-heading__label">${intro.label}</p>
            <h2 class="section-heading__title">${intro.title}</h2>
          </div>
          <div class="content-card content-card--soft reveal" data-reveal>
            <p>${intro.copy}</p>
          </div>
        </section>

        <section class="section container date-block">
          <div class="floating-frame reveal" data-reveal>
            <div class="floating-frame__inner">
              <p class="section-heading__label">${dateBlock.label}</p>
              <h2>${dateBlock.weekday}</h2>
              <p class="date-block__number">${dateBlock.fullDate}</p>
              <p class="muted">${dateBlock.copy}</p>
            </div>
          </div>
        </section>

        <section class="section container venue-grid">
          <article class="content-card content-card--accent reveal" data-reveal>
            <p class="section-heading__label">${venue.label}</p>
            <h2>${venue.title}</h2>
            <p>${venue.copy}</p>
            <a class="button" href="#rsvp">Reply to invitation</a>
          </article>
          <article class="content-card content-card--address reveal" data-reveal>
            <p class="section-heading__label">${venue.addressLabel}</p>
            <p class="venue-copy">${venue.address}</p>
            <p class="muted">${venue.addressCopy}</p>
          </article>
        </section>

        <section class="section container timeline-section">
          <div class="section-heading reveal" data-reveal>
            <p class="section-heading__label">Timeline</p>
            <h2 class="section-heading__title">${timelineTitle}</h2>
          </div>
          <div class="timeline">
            ${timeline.map(renderTimelineItem).join('')}
          </div>
        </section>

        <section class="section container marquee-section reveal" data-reveal>
          <div class="marquee-track">
            ${ribbonWords.map((word) => `<span>${word}</span>`).join('')}
          </div>
        </section>

        <section class="section container notes-grid">
          ${notes.map(renderNoteCard).join('')}
        </section>

        <section class="section container rsvp-section" id="rsvp">
          <div class="section-heading reveal" data-reveal>
            <p class="section-heading__label">${rsvp.label}</p>
            <h2 class="section-heading__title">${rsvp.title}</h2>
          </div>
          <form class="rsvp-form reveal" data-reveal>
            <label>
              <span>${rsvp.fields.name}</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              <span>${rsvp.fields.attendance}</span>
              <select name="attendance">
                <option>Gladly attending</option>
                <option>Attending with a guest</option>
                <option>Unable to attend</option>
              </select>
            </label>
            <label>
              <span>${rsvp.fields.note}</span>
              <textarea name="note" rows="4" placeholder="Anything we should know?"></textarea>
            </label>
            <button type="button" class="button">Send response</button>
          </form>
        </section>

        <section class="section container countdown-section reveal" data-reveal>
          <p class="section-heading__label">${countdown.label}</p>
          <h2>${countdown.text}</h2>
        </section>
      </main>
    </div>
  `;
};
