/**
 * ====================================================================
 * CORPORATE & EVENTS GALLERY DATA
 * ====================================================================
 * 
 * Each category contains multiple EVENTS.
 * Inside each event is the complete collection of PHOTOS for that event.
 * 
 * TO ADD A NEW EVENT:
 * Add a new object to the `events` array below with its cover picture and photos.
 * 
 * TO ADD PICTURES TO AN EXISTING EVENT:
 * 1. Put your image files into `public/images/`
 * 2. Add them to the `photos` array of that event.
 * ====================================================================
 */

export const corporateEventsGallery = {
  id: 'corporate-events',
  slug: 'corporate-events',
  title: 'Corporate & Events',
  eyebrow: 'Conferences, Summits & Activations',
  subtitle: 'Moments of connection, leadership, and shared purpose.',
  description:
    'From executive conferences and brand activations to evening galas, we capture the professional atmosphere, key speakers, and defining moments of your organisation.',
  coverImage: '/images/sasolgroup.jpg',
  events: [
    {
      id: 'sasol-leadership-summit',
      slug: 'sasol-leadership-summit',
      title: 'Sasol Leadership Summit',
      tag: 'Executive Gala',
      location: 'Johannesburg',
      date: 'June 2026',
      coverImage: '/images/sasolgroup.jpg',
      description: 'Annual corporate gathering bringing together executive leadership, department heads, and partners for an evening of vision, recognition, and fellowship.',
      photos: [
        {
          id: 'sasol-1',
          src: '/images/sasolgroup.jpg',
          alt: 'Sasol corporate event attendees gathered for a group portrait',
          title: 'Leadership Group Portrait',
          caption: 'Main Foyer · Sasol Summit 2026',
          featured: true
        },
        {
          id: 'sasol-2',
          src: '/images/PSX_20260627_161039.jpg',
          alt: 'Executive delegates in conversation during pre-dinner reception',
          title: 'Delegate Networking & Conversations',
          caption: 'Executive Cocktail Lounge'
        },
        {
          id: 'sasol-3',
          src: '/images/PSX_20260627_192700.jpg',
          alt: 'Evening gala atmosphere and table arrangement under warm lighting',
          title: 'Gala Ambience & Setup',
          caption: 'Grand Ballroom Setup'
        },
        {
          id: 'sasol-4',
          src: '/images/PSX_20260627_200503.jpg',
          alt: 'Keynote presentation and address on the main stage',
          title: 'Keynote Address',
          caption: 'Auditorium Main Stage'
        },
        {
          id: 'sasol-5',
          src: '/images/PSX_20260627_201355.jpg',
          alt: 'Executive awards ceremony presentation and celebration',
          title: 'Awards of Excellence',
          caption: 'Annual Recognition Ceremony'
        }
      ]
    },
    {
      id: 'wtc-summit',
      slug: 'wtc-summit',
      title: 'World Trade Center Summit',
      tag: 'International Conference',
      location: 'Sandton Convention Centre',
      date: 'April 2026',
      coverImage: '/images/wtcgroup.jpg',
      description: 'International trade conference and high-level roundtables discussing continental market access, investment, and cross-border innovation.',
      photos: [
        {
          id: 'wtc-1',
          src: '/images/wtcgroup.jpg',
          alt: 'World Trade Center conference delegates standing in plenary hall',
          title: 'Delegation Group Photograph',
          caption: 'Sandton Convention Centre',
          featured: true
        },
        {
          id: 'wtc-2',
          src: '/images/stockwtc.jpg',
          alt: 'Stage presentation and keynotes at business summit',
          title: 'Trade & Innovation Plenary',
          caption: 'Main Plenary Stage'
        },
        {
          id: 'wtc-3',
          src: '/images/amahlewtcsign.jpg',
          alt: 'Attendee signing the delegate wall at WTC conference',
          title: 'Signatures of Impact',
          caption: 'Summit Registration & Declaration Wall'
        },
        {
          id: 'wtc-4',
          src: '/images/PSX_20260407_164320.jpg',
          alt: 'Delegates in interactive breakout workshop',
          title: 'Executive Roundtables',
          caption: 'Innovation Workshop Room'
        }
      ]
    },
    {
      id: '5fm-live-experience',
      slug: '5fm-live-experience',
      title: '5FM Live Experience',
      tag: 'Brand Activation',
      location: 'National Broadcast',
      date: 'June 2026',
      coverImage: '/images/5fmlookback.jpg',
      description: 'Dynamic live broadcast and brand activation documenting on-air talent, listener engagement, and behind-the-scenes broadcast energy.',
      photos: [
        {
          id: '5fm-1',
          src: '/images/5fmlookback.jpg',
          alt: '5FM live broadcast studio setup with host looking back smiling',
          title: 'Live On-Air Moment',
          caption: 'Live Broadcast Booth',
          featured: true
        },
        {
          id: '5fm-2',
          src: '/images/PSX_20260613_085858.jpg',
          alt: 'Audience engagement during 5FM showcase event',
          title: 'Audience Pulse',
          caption: 'Live Activation Arena'
        },
        {
          id: '5fm-3',
          src: '/images/PSX_20260613_092946.jpg',
          alt: 'Sound engineering and producer deck at the event',
          title: 'The Production Deck',
          caption: 'Audio Control & Broadcast Console'
        }
      ]
    }
  ]
};

export default corporateEventsGallery;
