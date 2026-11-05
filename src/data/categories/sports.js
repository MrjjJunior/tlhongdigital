/**
 * ====================================================================
 * SPORTS & ACTION GALLERY DATA
 * ====================================================================
 * 
 * Each category contains multiple EVENTS / MATCHES.
 * Inside each event is the complete collection of PHOTOS.
 * ====================================================================
 */

export const sportsGallery = {
  id: 'sports',
  slug: 'sports',
  title: 'Sports',
  eyebrow: 'Athletics, Motion & Competition',
  subtitle: 'Energy in motion, discipline in practice, and peak performance.',
  description:
    'Freezing split-second intensity, determination, and triumph across tournaments, school leagues, and professional athletic fixtures with razor-sharp precision.',
  coverImage: '/images/sports/ujBoys.jpg',
  events: [
    {
      id: 'sba-championship-game',
      slug: 'sba-championship-game',
      title: 'UJ sigma cup 10s',
      tag: 'Rugby 10s tournament',
      location: 'Indoor Arena',
      date: 'October 2026',
      coverImage: '/images/sports/ujBoys.jpg',
      description: 'Rugby 10s tournament fixture featuring fast breaks, intense defensive clashes, and high-flying athletic plays.',
      photos: [
        {
          id: 'sport-1',
          src: '/images/sports/tunnel.jpg',
          alt: 'Athletes in action during intense competition',
          title: 'Walk in',
          caption: 'The start of every game',
          featured: true
        },
        {
          id: 'sport-2',
          src: '/images/PSX_20261004_063347.jpg',
          alt: 'Court-side play and tactical adjustment',
          title: 'Intense ruck',
          caption: 'Players giving their all'
        },
        {
          id: 'sport-3',
          src: '/images/PSX_20261004_064145.jpg',
          alt: 'Celebration and victory reaction from team bench',
          title: 'Victory Emotion',
          caption: 'Diving celebration'
        },
        {
          id: 'sport-4',
          src: '/images/sports/tumokick.jpg',
          alt: 'Dynamic sports athlete driving with intense focus',
          title: 'Pure Focus',
          caption: 'To lead the team to victory'
        }
      ]
    }//,
    // {
    //   id: 'track-and-field-invitational',
    //   slug: 'track-and-field-invitational',
    //   title: 'Track & Field Invitational',
    //   tag: 'Athletics',
    //   location: 'Athletics Stadium',
    //   date: 'May 2026',
    //   coverImage: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=85',
    //   description: 'Capturing explosive sprint starts, hurdle clearances, and the raw emotion of crossing the finish line.',
    //   photos: [
    //     {
    //       id: 'track-1',
    //       src: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=85',
    //       alt: 'Runner pushing through the finish line at track event',
    //       title: 'Split Seconds',
    //       caption: 'Sprint Finals · Finish Line',
    //       featured: true
    //     },
    //     {
    //       id: 'track-2',
    //       src: 'https://images.unsplash.com/photo-1554126196-3bdaba97491c?auto=format&fit=crop&w=1200&q=85',
    //       alt: 'Stadium atmosphere under floodlights',
    //       title: 'Stadium Energy',
    //       caption: 'Night Session Invitational'
    //     }
    //   ]
    // }
  ]
};

export default sportsGallery;
