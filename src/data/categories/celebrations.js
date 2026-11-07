/**
 * ====================================================================
 * CELEBRATIONS & WEDDINGS GALLERY DATA
 * ====================================================================
 * 
 * Each category contains multiple EVENTS / OCCASIONS.
 * Inside each event is the complete collection of PHOTOS.
 * ====================================================================
 */

export const celebrationsGallery = {
  id: 'celebrations',
  slug: 'celebrations',
  title: 'Celebrations',
  eyebrow: 'Weddings & Milestone Moments',
  subtitle: 'A promise remembered, laughter shared, and love documented.',
  description:
    'Every celebration carries a heartbeat of its own. We document weddings, family milestones, and joyful gatherings with cinematic sensitivity and intimate attention to detail.',
  coverImage: '/images/celebrations/Bonolo&SbuCelebration/IMG_9211.jpg',
  events: [
    {
      id: 'bonolo-sbu-celebration',
      slug: 'bonolo-sbu-celebration',
      title: 'Bonolo & Sbu Celebration',
      tag: 'Weddings & Nuptials',
      location: 'South Africa',
      date: '2026',
      coverImage: '/images/celebrations/Bonolo&SbuCelebration/IMG_9211.jpg',
      description: 'Joyous smiles, tender glances, and vibrant memories captured from the heartfelt milestone celebration of Bonolo and Sbu.',
      photos: [
        {
          id: 'bonolo-sbu-1',
          src: '/images/celebrations/Bonolo&SbuCelebration/IMG_9211.jpg',
          alt: 'Bonolo and Sbu celebration moment',
          title: 'A Beautiful Beginning',
          caption: 'Milestone Celebration · Outdoor Portrait',
          featured: true
        },
        {
          id: 'bonolo-sbu-2',
          src: '/images/celebrations/Bonolo&SbuCelebration/IMG_9238.jpg',
          alt: 'Celebration warmth and shared laughter',
          title: 'Joyful Connection',
          caption: 'Celebration Portraits'
        },
        {
          id: 'bonolo-sbu-3',
          src: '/images/celebrations/Bonolo&SbuCelebration/IMG_9430.jpg',
          alt: 'Vibrant celebration moments with loved ones',
          title: 'Shared Laughter',
          caption: 'Celebration Highlights'
        },
        {
          id: 'bonolo-sbu-4',
          src: '/images/celebrations/Bonolo&SbuCelebration/IMG_9439.jpg',
          alt: 'Celebration elegance and memorable moments',
          title: 'Unforgettable Moments',
          caption: 'Golden Hour Celebration'
        }
      ]
    },
    {
      id: 'the-family',
      slug: 'the-family',
      aliases: ['generations-of-joy'],
      title: 'Friends to family',
      tag: 'Friends',
      location: 'Outdoor Gathering',
      date: 'October 2026',
      coverImage: '/images/celebrations/TheFamily/fam.jpg',
      description: 'Friends coming together.',
      photos: [
        {
          id: 'fam-1',
          src: '/images/celebrations/TheFamily/fam.jpg',
          alt: 'Family gathering in joyful celebration outdoors',
          title: 'Friends Gathering',
          caption: 'Milestone Celebration Outdoors',
          featured: true
        },
        {
          id: 'fam-2',
          src: '/images/celebrations/TheFamily/IMG_0389.jpg',
          alt: 'Friends milestone moments and candid portraits',
          title: 'Cherished Bonds',
          caption: 'Friends Milestone Portrait'
        }
      ]
    }
  ]
};

export default celebrationsGallery;
