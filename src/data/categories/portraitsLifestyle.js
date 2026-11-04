/**
 * ====================================================================
 * PORTRAITS & LIFESTYLE GALLERY DATA
 * ====================================================================
 * 
 * Each category contains multiple EVENTS / SESSIONS.
 * Inside each session is the complete collection of PHOTOS.
 * ====================================================================
 */

export const portraitsLifestyleGallery = {
  id: 'portraits-lifestyle',
  slug: 'portraits-lifestyle',
  title: 'Portraits & Lifestyle',
  eyebrow: 'Portraiture & Personal Branding',
  subtitle: 'Quiet confidence, personality, and genuine expression.',
  description:
    'Tailored portrait sessions designed for executives, creative entrepreneurs, and individuals who want authentic visual representation that speaks with warmth, presence, and timeless style.',
  coverImage: '/images/leraiSeated.jpg',
  events: [
    {
      id: 'lerai-studio-editorial',
      slug: 'lerai-studio-editorial',
      title: 'Lerai — Studio Editorial',
      tag: 'Editorial Portrait',
      location: 'Studio Session · Johannesburg',
      date: 'June 2026',
      coverImage: '/images/leraiSeated.jpg',
      description: 'An editorial studio portrait session exploring natural light, poise, and subtle textures with a contemporary aesthetic.',
      photos: [
        {
          id: 'lerai-1',
          src: '/images/leraiSeated.jpg',
          alt: 'Editorial portrait of Lerai seated gracefully in studio lighting',
          title: 'Lerai — Editorial Grace',
          caption: 'Studio Session · Natural Light',
          featured: true
        },
        {
          id: 'lerai-2',
          src: '/images/small.jpg',
          alt: 'Thoughtful portrait study with gentle depth of field',
          title: 'Quiet Confidence',
          caption: 'Soft Light Study'
        },
        {
          id: 'lerai-3',
          src: 'https://images.unsplash.com/photo-1642711944808-e9c167934427?auto=format&fit=crop&w=900&q=85',
          alt: 'Editorial portrait of a woman on a city street',
          title: 'City Stories',
          caption: 'Urban Environmental Portrait'
        }
      ]
    },
    {
      id: 'gosego-portrait-study',
      slug: 'gosego-portrait-study',
      title: 'Gosego — Presence & Poise',
      tag: 'Character Study',
      location: 'Portrait Studio',
      date: 'November 2026',
      coverImage: '/images/gosego.jpg',
      description: 'Intimate close-up portrait session emphasizing character, depth of expression, and authentic personality.',
      photos: [
        {
          id: 'gosego-1',
          src: '/images/gosego.jpg',
          alt: 'Close-up portrait of Gosego with striking expression',
          title: 'Gosego — Presence & Poise',
          caption: 'Character Study · Studio Session',
          featured: true
        },
        {
          id: 'gosego-2',
          src: 'https://images.unsplash.com/photo-1608009140029-f1f9535601ed?auto=format&fit=crop&w=900&q=85',
          alt: 'Professional portrait of a gentleman outdoors in urban setting',
          title: 'Architect of Vision',
          caption: 'Natural Light Portraiture'
        }
      ]
    },
    {
      id: 'les-modern-identity',
      slug: 'les-modern-identity',
      title: 'Les — Modern Identity',
      tag: 'Personal Branding',
      location: 'Johannesburg',
      date: 'April 2026',
      coverImage: '/images/les.jpg',
      description: 'Personal branding portrait series tailored for professional presence, speaking engagements, and digital profiles.',
      photos: [
        {
          id: 'les-1',
          src: '/images/les.jpg',
          alt: 'Contemporary portrait of Les with warm earthy backdrop',
          title: 'Les — Modern Identity',
          caption: 'Personal Branding Session',
          featured: true
        },
        {
          id: 'les-2',
          src: '/images/PSX_20260409_134750.jpg',
          alt: 'Candid lifestyle portrait outdoors',
          title: 'Natural Perspective',
          caption: 'Outdoor Lifestyle'
        }
      ]
    }
  ]
};

export default portraitsLifestyleGallery;
