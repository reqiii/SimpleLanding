import { siteContent } from '../content.js';
import { PageShell } from '../ui/PageShell.js';
import { HeaderSection } from '../sections/HeaderSection.js';
import { HeroSection } from '../sections/HeroSection.js';
import { IntroSection } from '../sections/IntroSection.js';
import { DateSection } from '../sections/DateSection.js';
import { VenueSection } from '../sections/VenueSection.js';
import { TimelineSection } from '../sections/TimelineSection.js';
import { AdditionalInfoSection } from '../sections/AdditionalInfoSection.js';
import { RSVPSection } from '../sections/RSVPSection.js';
import { CountdownSection } from '../sections/CountdownSection.js';

export const renderApp = () => {
  const sections = [
    HeaderSection(siteContent),
    HeroSection(siteContent.hero),
    IntroSection(siteContent.intro),
    DateSection(siteContent.dateBlock),
    VenueSection(siteContent.venue),
    TimelineSection(siteContent.timeline),
    AdditionalInfoSection(siteContent.notes),
    RSVPSection(siteContent.rsvp),
    CountdownSection(siteContent.countdown),
  ].join('');

  return PageShell({
    content: sections,
    quickFacts: siteContent.quickFacts,
  });
};
