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
  coverImage: '/images/sports/SigmaCup/ujBoys.jpg',
  events: [
    {
      id: 'uj-sigma-cup-10s',
      slug: 'uj-sigma-cup-10s',
      aliases: ['sba-championship-game'],
      title: 'UJ Sigma Cup 10s',
      tag: 'Rugby 10s Tournament',
      location: 'UJ Arena / Grounds',
      date: 'October 2026',
      coverImage: '/images/sports/SigmaCup/ujBoys.jpg',
      description: 'Rugby 10s tournament fixture featuring fast breaks, intense defensive clashes, and high-flying athletic plays.',
      photos: [
        {
          id: 'sport-1',
          src: '/images/sports/SigmaCup/ujBoys.jpg',
          alt: 'UJ Rugby 10s squad lineup photo',
          title: 'UJ Squad Lineup',
          caption: 'The UJ Sigma Cup 10s Team',
          featured: true
        },
        {
          id: 'sport-2',
          src: '/images/sports/SigmaCup/tunnel.jpg',
          alt: 'Athletes in action during intense competition',
          title: 'Walk In',
          caption: 'The start of every game'
        },
        {
          id: 'sport-3',
          src: '/images/sports/SigmaCup/PSX_20261004_063347.jpg',
          alt: 'Court-side play and tactical adjustment',
          title: 'Intense Ruck',
          caption: 'Players giving their all'
        },
        {
          id: 'sport-4',
          src: '/images/sports/SigmaCup/PSX_20261004_064145.jpg',
          alt: 'Celebration and victory reaction from team bench',
          title: 'Victory Emotion',
          caption: 'Diving celebration'
        },
        {
          id: 'sport-5',
          src: '/images/sports/SigmaCup/tumokick.jpg',
          alt: 'Dynamic sports athlete driving with intense focus',
          title: 'Pure Focus',
          caption: 'To lead the team to victory'
        }
      ]
    }
  ]
};

export default sportsGallery;
