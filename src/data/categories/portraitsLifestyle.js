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
    'Tailored portrait sessions designed for pageants, executives, creative entrepreneurs, and individuals who want authentic visual representation that speaks with warmth, presence, and timeless style.',
  coverImage: '/images/potraits/GautengCityCollegePeagent/sba.jpg',
  events: [
    {
      id: 'gauteng-city-college-pageant',
      slug: 'gauteng-city-college-pageant',
      title: 'Gauteng City College Pageant',
      tag: 'Pageant & Editorial',
      location: 'Gauteng City College',
      date: '2026',
      coverImage: '/images/potraits/GautengCityCollegePeagent/sba.jpg',
      description: 'Celebrating beauty, elegance, and charisma at the Gauteng City College Pageant, capturing stunning stage portraits and backstage poise.',
      photos: [
        {
          id: 'gcc-1',
          src: '/images/potraits/GautengCityCollegePeagent/sba.jpg',
          alt: 'Portrait of contestant at the Gauteng City College Pageant',
          title: 'Elegance in Frame',
          caption: 'Pageant Contestant Portrait',
          featured: true
        },
        {
          id: 'gcc-2',
          src: '/images/potraits/GautengCityCollegePeagent/small.jpg',
          alt: 'Portrait capture of pageant participant with gentle depth of field',
          title: 'Poise & Confidence',
          caption: 'Studio & Stage Expression'
        }
      ]
    },
    {
      id: 'personal-portraits',
      slug: 'personal-portraits',
      aliases: ['les-modern-identity'],
      title: 'Personal Portraits',
      tag: 'Personal Branding & Character',
      location: 'Johannesburg',
      date: '2026',
      coverImage: '/images/potraits/PersonalPotraits/les.jpg',
      description: 'Personal branding and character portrait series tailored for professional presence, speaking engagements, and modern identity.',
      photos: [
        {
          id: 'les-1',
          src: '/images/potraits/PersonalPotraits/les.jpg',
          alt: 'Contemporary portrait of Les with warm earthy backdrop',
          title: 'Les — Modern Identity',
          caption: 'Personal Branding Session',
          featured: true
        },
        {
          id: 'pablo-1',
          src: '/images/potraits/PersonalPotraits/pablo.jpg',
          alt: 'Character portrait of Pablo with natural expression and quiet confidence',
          title: 'Pablo — Distinct Presence',
          caption: 'Personal Character Study'
        },
        {
          id: 'lungi-1',
          src: '/images/potraits/PersonalPotraits/Lungi1.jpg',
          alt: 'Editorial portrait of Lungi with striking studio presence',
          title: 'Lungi',
          caption: ''
        }//,
        // {
        //   id: 'lungi-2',
        //   src: '/images/potraits/PersonalPotraits/lungi2.jpg',
        //   alt: 'Close-up character portrait study of Lungi',
        //   title: 'Lungi',
        //   caption: 'Natural Light Study'
        // },
        // {
        //   id: 'lungi-3',
        //   src: '/images/potraits/PersonalPotraits/lungi BW.jpg',
        //   alt: 'Monochrome black and white portrait of Lungi',
        //   title: 'Lungi — Timeless Monochrome',
        //   caption: 'Black & White Editorial'
        // }
      ]
    }
  ]
};

export default portraitsLifestyleGallery;
