import './styles.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page-shell">
    <div class="page-backdrop" aria-hidden="true">
      <div class="backdrop-layer backdrop-layer--video"></div>
      <div class="backdrop-layer backdrop-layer--vignette"></div>
      <div class="backdrop-orb orb--top"></div>
      <div class="backdrop-orb orb--middle"></div>
      <div class="backdrop-orb orb--bottom"></div>
      <div class="grain"></div>
    </div>

    <header class="site-header container reveal" data-reveal>
      <div class="brand-mark">A&A</div>
      <nav class="header-meta" aria-label="Event quick facts">
        <span>Moscow region</span>
        <span>12 September 2026</span>
      </nav>
    </header>

    <main>
      <section class="hero section container">
        <div class="hero__eyebrow reveal" data-reveal>Wedding invitation</div>
        <p class="hero__intro reveal" data-reveal>
          We are getting married and would love to share a slow, warm September evening with the people closest to us.
        </p>
        <h1 class="hero__title reveal" data-reveal>
          Artem <span>&amp;</span> Alesya
        </h1>
        <p class="hero__date reveal" data-reveal>12 / 09 / 2026</p>
        <div class="hero__card reveal" data-reveal>
          <p>
            The reference uses a cinematic full-screen background, centered monogram composition, light serif-led typography, and soft luminous layering.
            This foundation recreates that hierarchy using reusable tokens and components.
          </p>
          <a class="button button--ghost" href="#details">Explore details</a>
        </div>
      </section>

      <section class="section container two-column" id="details">
        <div class="section-heading reveal" data-reveal>
          <p class="section-heading__label">Invitation</p>
          <h2 class="section-heading__title">A calm sequence of moments instead of a crowded screen.</h2>
        </div>
        <div class="content-card reveal" data-reveal>
          <p>
            The original page unfolds as a single art-directed story: invitation, date, venue, timeline, dress code, wishes, RSVP, and a countdown finish.
            The section order and spacing rhythm are mirrored here to keep the reconstruction aligned from the beginning.
          </p>
        </div>
      </section>

      <section class="section container date-block">
        <div class="floating-frame reveal" data-reveal>
          <div class="floating-frame__inner">
            <p class="section-heading__label">Date</p>
            <h2>Saturday</h2>
            <p class="date-block__number">12 September 2026</p>
            <p class="muted">A focused announcement block that echoes the centered, ceremonial composition from the reference.</p>
          </div>
        </div>
      </section>

      <section class="section container venue-grid">
        <div class="content-card content-card--accent reveal" data-reveal>
          <p class="section-heading__label">Location</p>
          <h2>Due to Love</h2>
          <p>
            Country-club atmosphere, softened edge treatment, translucent panels, and a restrained champagne palette are used to emulate the venue segment.
          </p>
          <a class="button" href="#rsvp">Open RSVP</a>
        </div>
        <div class="content-card reveal" data-reveal>
          <p class="section-heading__label">Address</p>
          <p class="venue-copy">Moscow region</p>
          <p class="muted">A compact support card stands in for the map/location module while preserving the card density and spacing cadence.</p>
        </div>
      </section>

      <section class="section container timeline-section">
        <div class="section-heading reveal" data-reveal>
          <p class="section-heading__label">Timeline</p>
          <h2 class="section-heading__title">Softly revealed event milestones with paired time chips.</h2>
        </div>
        <div class="timeline">
          ${[
            ['16:30', 'Guests gathering', 'Welcome drinks and first embraces on the terrace.'],
            ['17:30', 'Ceremony', 'A short open-air ceremony with close family and friends.'],
            ['18:00', 'Dinner', 'Toasts, music, and a warm candlelit dinner service.'],
            ['23:00', 'Afterglow', 'Late dancing and a final unhurried goodbye.'],
          ]
            .map(
              ([time, title, copy]) => `
                <article class="timeline-item reveal" data-reveal>
                  <div class="timeline-item__time">${time}</div>
                  <div class="timeline-item__body">
                    <h3>${title}</h3>
                    <p>${copy}</p>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section container marquee-section reveal" data-reveal>
        <div class="marquee-track">
          <span>flowers</span>
          <span>candlelight</span>
          <span>music</span>
          <span>love</span>
          <span>celebration</span>
          <span>flowers</span>
          <span>candlelight</span>
          <span>music</span>
        </div>
      </section>

      <section class="section container notes-grid">
        <div class="content-card reveal" data-reveal>
          <p class="section-heading__label">Dress code</p>
          <h2>Elegant evening neutrals</h2>
          <p class="muted">The reference uses framed chips, ornamented dividers, and airy text blocks; this version sets the foundation with restrained cards and decorative glow edges.</p>
        </div>
        <div class="content-card reveal" data-reveal>
          <p class="section-heading__label">Wishes</p>
          <h2>Your presence is the main gift</h2>
          <p class="muted">If you wish to bring flowers, soft seasonal arrangements will best fit the atmosphere of the day.</p>
        </div>
      </section>

      <section class="section container rsvp-section" id="rsvp">
        <div class="section-heading reveal" data-reveal>
          <p class="section-heading__label">RSVP</p>
          <h2 class="section-heading__title">A minimal form scaffold prepared for the richer response flow in the next iteration.</h2>
        </div>
        <form class="rsvp-form reveal" data-reveal>
          <label>
            <span>Full name</span>
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            <span>Attendance</span>
            <select name="attendance">
              <option>Gladly attending</option>
              <option>Attending with a guest</option>
              <option>Unable to attend</option>
            </select>
          </label>
          <label>
            <span>Note</span>
            <textarea name="note" rows="4" placeholder="Anything we should know?"></textarea>
          </label>
          <button type="button" class="button">Send response</button>
        </form>
      </section>

      <section class="section container countdown-section reveal" data-reveal>
        <p class="section-heading__label">Countdown</p>
        <h2>173 days until the evening begins</h2>
      </section>
    </main>
  </div>
`;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: '0px 0px -8% 0px',
  },
);

document.querySelectorAll('[data-reveal]').forEach((element, index) => {
  element.style.setProperty('--reveal-delay', `${Math.min(index * 70, 520)}ms`);
  observer.observe(element);
});
