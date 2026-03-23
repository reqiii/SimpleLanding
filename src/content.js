export const siteContent = {
  brand: 'E & M',
  quickFacts: ['Forest estate', '18 June 2027'],
  countdownTarget: '2027-06-18T16:30:00+03:00',
  header: {
    label: 'Wedding weekend',
    action: {
      href: '#rsvp',
      text: 'Confirm attendance',
    },
  },
  hero: {
    eyebrow: 'A celebration of vows, family, and summer light',
    title: ['Emilia', 'Maksim'],
    date: '18 / 06 / 2027',
    lead:
      'We would love to welcome you to a heartfelt evening with an outdoor ceremony, candlelit dinner, and dancing beneath the trees.',
    note:
      'The page is intentionally structured for layered visuals and motion, so every section can be art-directed with precision during the next stage.',
    cta: 'Explore the day',
    secondaryCta: 'Reply now',
  },
  intro: {
    label: 'Invitation',
    title: 'Please join us for a quiet, elegant gathering marking the beginning of our marriage.',
    copy:
      'Come ready for warm conversations, gentle music, and a celebration that moves slowly from daylight into a glowing summer night.',
  },
  dateBlock: {
    label: 'Date',
    weekday: 'Friday',
    fullDate: '18 June 2027',
    time: 'Guests arrive from 16:00 · Ceremony at 16:30',
    copy:
      'The schedule allows for an unhurried flow, with enough time for the ceremony, dinner, toasts, and the evening program.',
  },
  venue: {
    label: 'Venue',
    title: 'Glass Garden Estate',
    copy:
      'A secluded country venue with a ceremony lawn, reflective glass pavilion, and long dinner tables surrounded by greenery.',
    addressLabel: 'Address',
    address: 'Birch Lane 14, Riverside District',
    addressCopy:
      'Parking, transfer timing, and arrival notes can be added later without changing the section structure.',
    mapAction: 'Open directions',
  },
  timeline: {
    label: 'Timeline',
    title: 'The celebration follows a soft and balanced rhythm.',
    items: [
      ['16:00', 'Guest arrival', 'Welcome drinks, quiet music, and time to settle in before the ceremony begins.'],
      ['16:30', 'Ceremony', 'A garden ceremony framed by florals, vows, and the people who matter most to us.'],
      ['18:00', 'Dinner', 'Shared courses, speeches, and a long table atmosphere that carries the evening forward.'],
      ['21:30', 'First dance', 'The formal part gives way to movement, warm light, and a more intimate late-evening mood.'],
    ],
  },
  notes: {
    label: 'Additional information',
    items: [
      {
        label: 'Dress code',
        title: 'Evening palette',
        copy: 'Muted neutrals, smoky florals, and elegant silhouettes will harmonize beautifully with the setting.',
      },
      {
        label: 'Wishes',
        title: 'The best gift is your presence',
        copy: 'If you would like to mark the day with a gift, a card with a few warm words will be more than enough.',
      },
    ],
  },
  rsvp: {
    label: 'RSVP',
    title: 'Please share your response so we can prepare your place at the table.',
    fields: {
      name: 'Full name',
      attendance: 'Attendance',
      guest: 'Guest name',
      note: 'Dietary notes',
    },
    options: ['Delighted to attend', 'Attending with a guest', 'Unable to attend'],
    submit: 'Send response',
  },
  countdown: {
    label: 'Countdown',
    fallback: 'The celebration is drawing near.',
  },
};
