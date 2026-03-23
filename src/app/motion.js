const revealSelector = '[data-reveal]';
const countdownSelector = '[data-countdown-target]';

const setupCountdown = (root) => {
  const countdown = root.querySelector(countdownSelector);

  if (!countdown) return;

  const targetValue = countdown.getAttribute('data-countdown-target');
  const fallback = countdown.getAttribute('data-countdown-fallback') || '';
  const targetDate = new Date(targetValue);

  if (Number.isNaN(targetDate.getTime())) {
    countdown.textContent = fallback;
    return;
  }

  const parts = {
    day: 1000 * 60 * 60 * 24,
    hour: 1000 * 60 * 60,
    minute: 1000 * 60,
  };

  const update = () => {
    const diff = targetDate.getTime() - Date.now();

    if (diff <= 0) {
      countdown.textContent = 'Today is the day.';
      return;
    }

    const days = Math.floor(diff / parts.day);
    const hours = Math.floor((diff % parts.day) / parts.hour);
    const minutes = Math.floor((diff % parts.hour) / parts.minute);

    countdown.textContent = `${days} days · ${hours} hours · ${minutes} minutes until the celebration`;
  };

  update();
  window.setInterval(update, 60000);
};

export const setupReveal = (root = document) => {
  const elements = [...root.querySelectorAll(revealSelector)];

  if (!elements.length) {
    setupCountdown(root);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -12% 0px',
    },
  );

  elements.forEach((element, index) => {
    const delay = element.dataset.revealDelay || `${Math.min(index * 70, 420)}`;
    element.style.setProperty('--reveal-delay', `${delay}ms`);
    observer.observe(element);
  });

  setupCountdown(root);
};
