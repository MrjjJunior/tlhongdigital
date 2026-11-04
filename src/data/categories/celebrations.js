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
  coverImage: '/images/hero.webp',
  events: [
    {
      id: 'the-wedding-promise',
      slug: 'the-wedding-promise',
      title: 'A Promise Remembered — Wedding Nuptials',
      tag: 'Wedding Day',
      location: 'South Africa',
      date: 'June 2026',
      coverImage: '/images/hero.webp',
      description: 'The vows, tender glances, and unforgettable celebration of a newly married couple, from the ceremony to golden hour portraits.',
      photos: [
        {
          id: 'wed-1',
          src: '/images/hero.webp',
          alt: 'Newly married couple sharing an affectionate moment outdoors',
          title: 'A Promise Remembered',
          caption: 'Golden Hour Couple Portrait',
          featured: true
        },
        {
          id: 'wed-2',
          src: '/images/hero.jpg',
          alt: 'Couple smiling warmly in wedding attire',
          title: 'The Newlyweds',
          caption: 'Post-Ceremony Nuptials'
        },
        {
          id: 'wed-3',
          src: '/images/PSX_20260702_233046.jpg',
          alt: 'Evening reception laughter and celebration',
          title: 'Evening Celebration',
          caption: 'Reception Dance Floor'
        },
        {
          id: 'wed-4',
          src: 'https://images.unsplash.com/photo-1608009140243-081d0afe4b0c?auto=format&fit=crop&w=1200&q=85',
          alt: 'Newly married couple sharing a quiet private moment',
          title: 'Unspoken Words',
          caption: 'Private Moment Away from the Crowd'
        },
        {
          id: 'wed-5',
          src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
          alt: 'Intimate reception table setup with candlelight and florals',
          title: 'The Art of the Table',
          caption: 'Reception Florals & Ambience'
        }
      ]
    },
    {
      id: 'generations-of-joy',
      slug: 'generations-of-joy',
      title: 'Generations of Joy — Family Milestone',
      tag: 'Family Milestone',
      location: 'Outdoor Gathering',
      date: 'October 2026',
      coverImage: '/images/fam.jpg',
      description: 'Generations coming together in warm celebration, candid laughter, and shared stories under the open sky.',
      photos: [
        {
          id: 'fam-1',
          src: '/images/fam.jpg',
          alt: 'Family gathering in joyful celebration outdoors',
          title: 'Family Gathering',
          caption: 'Milestone Celebration Outdoors',
          featured: true
        },
        {
          id: 'fam-2',
          src: '/images/PSX_20261003_173434.jpg',
          alt: 'Candid smiles during milestone toast',
          title: 'Laughter & Warmth',
          caption: 'Celebration Moments'
        }
      ]
    }
  ]
};

export default celebrationsGallery;
