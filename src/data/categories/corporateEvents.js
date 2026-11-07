/**
 * ====================================================================
 * CORPORATE & EVENTS GALLERY DATA
 * ====================================================================
 * 
 * Each category contains multiple EVENTS.
 * Inside each event is the complete collection of PHOTOS for that event.
 * ====================================================================
 */

export const corporateEventsGallery = {
  id: 'corporate-events',
  slug: 'corporate-events',
  title: 'Corporate & Events',
  eyebrow: 'Conferences, Summits & Activations',
  subtitle: 'Moments of connection, leadership, and shared purpose.',
  description:
    'From executive conferences and brand activations to tech summits and corporate initiatives, we capture the professional atmosphere, key speakers, and defining moments of your organisation.',
  coverImage: '/images/corporateAndEvents/SosalBrigdeToWork/sasolgroup.jpg',
  events: [
    {
      id: 'sasol-bridge-to-work',
      slug: 'sasol-bridge-to-work',
      aliases: ['sasol-leadership-summit'],
      title: 'Sasol Bridge to Work',
      tag: 'Corporate & Skills Programme',
      location: 'Johannesburg',
      date: 'June 2026',
      coverImage: '/images/corporateAndEvents/SosalBrigdeToWork/sasolgroup.jpg',
      description: 'Documenting the Sasol Bridge to Work programme, bringing together corporate leadership, ambitious participants, and partners for an inspiring milestone of empowerment and excellence.',
      photos: [
        {
          id: 'sasol-1',
          src: '/images/corporateAndEvents/SosalBrigdeToWork/sasolgroup.jpg',
          alt: 'Sasol Bridge to Work group photo with attendees and leadership',
          title: 'Programme Group Portrait',
          caption: 'Main Foyer · Sasol Bridge to Work 2026',
          featured: true
        },
        {
          id: 'sasol-2',
          src: '/images/corporateAndEvents/SosalBrigdeToWork/PSX_20260627_161039.jpg',
          alt: 'Delegates in conversation during pre-event reception',
          title: 'Delegate Networking & Conversations',
          caption: 'Executive Cocktail Lounge'
        },
        {
          id: 'sasol-3',
          src: '/images/corporateAndEvents/SosalBrigdeToWork/PSX_20260626_172959.jpg',
          alt: 'Programme presentation and participant engagement',
          title: 'Session Focus & Engagement',
          caption: 'Plenary Workshop'
        },
        {
          id: 'sasol-4',
          src: '/images/corporateAndEvents/SosalBrigdeToWork/leraiSeated.jpg',
          alt: 'Portrait of participant seated during event proceedings',
          title: 'Participant Poise',
          caption: 'Auditorium Proceedings'
        },
        {
          id: 'sasol-5',
          src: '/images/corporateAndEvents/SosalBrigdeToWork/amahlewtcsign.jpg',
          alt: 'Participant posing by the milestone sign',
          title: 'Milestone Signature',
          caption: 'Programme Signage & Wall'
        },
        {
          id: 'sasol-6',
          src: '/images/corporateAndEvents/SosalBrigdeToWork/hero.webp',
          alt: 'Key moment captured during the event',
          title: 'Defining Moments',
          caption: 'Programme Milestones'
        },
        {
          id: 'sasol-7',
          src: '/images/corporateAndEvents/SosalBrigdeToWork/hero.jpg',
          alt: 'Evening gala celebration moment',
          title: 'Programme Celebration',
          caption: 'Celebration & Fellowship'
        }
      ]
    },
    {
      id: 'wethinkcode',
      slug: 'wethinkcode',
      aliases: ['wtc-summit'],
      title: 'WeThinkCode_',
      tag: 'Tech Academy & Innovation',
      location: 'Johannesburg',
      date: 'April 2026',
      coverImage: '/images/corporateAndEvents/WeThinkCode/wtcgroup.jpg',
      description: 'Documenting student cohorts, tech workshops, coding hackathons, and continental youth innovation at the WeThinkCode_ tech academy.',
      photos: [
        {
          id: 'wtc-1',
          src: '/images/corporateAndEvents/WeThinkCode/wtcgroup.jpg',
          alt: 'WeThinkCode cohort group photograph',
          title: 'Cohort & Delegation Group',
          caption: 'WeThinkCode_ Campus Plenary',
          featured: true
        },
        {
          id: 'wtc-2',
          src: '/images/corporateAndEvents/WeThinkCode/stockwtc.jpg',
          alt: 'Stage presentation and keynotes at tech innovation event',
          title: 'Innovation & Tech Plenary',
          caption: 'Campus Innovation Stage'
        },
        {
          id: 'wtc-3',
          src: '/images/corporateAndEvents/WeThinkCode/PSX_20260407_164320.jpg',
          alt: 'Students engaged in interactive coding workshop',
          title: 'Collaborative Problem Solving',
          caption: 'Peer-to-Peer Coding Hub'
        },
        {
          id: 'wtc-4',
          src: '/images/corporateAndEvents/WeThinkCode/PSX_20260409_134750.jpg',
          alt: 'Candid campus moments between workshop sessions',
          title: 'Campus Reflections',
          caption: 'Courtyard Breakout'
        },
        {
          id: 'wtc-5',
          src: '/images/corporateAndEvents/WeThinkCode/PSX_20260702_233046.jpg',
          alt: 'Evening showcase and demo day celebration',
          title: 'Demo Night Celebration',
          caption: 'Showcase & Demo Evening'
        }
      ]
    },
    {
      id: '5fm-live-experience',
      slug: '5fm-live-experience',
      title: '5FM Live Experience',
      tag: 'Brand Activation & Broadcast',
      location: 'National Broadcast',
      date: 'June 2026',
      coverImage: '/images/corporateAndEvents/5fm/5fmlookback.jpg',
      description: 'Dynamic live broadcast and brand activation documenting on-air talent, listener engagement, and behind-the-scenes broadcast energy.',
      photos: [
        {
          id: '5fm-1',
          src: '/images/corporateAndEvents/5fm/5fmlookback.jpg',
          alt: '5FM live broadcast studio setup with host looking back smiling',
          title: 'Live On-Air Moment',
          caption: 'Live Broadcast Booth',
          featured: true
        },
        {
          id: '5fm-2',
          src: '/images/corporateAndEvents/5fm/PSX_20260613_085858.jpg',
          alt: 'Audience engagement during 5FM showcase event',
          title: 'Audience Pulse',
          caption: 'Live Activation Arena'
        },
        {
          id: '5fm-3',
          src: '/images/corporateAndEvents/5fm/PSX_20260613_092946.jpg',
          alt: 'Sound engineering and producer deck at the event',
          title: 'The Production Deck',
          caption: 'Audio Control & Broadcast Console'
        }
      ]
    },
    {
      id: 'gauteng-ai-community',
      slug: 'gauteng-ai-community',
      title: 'Gauteng AI Community',
      tag: 'Tech Meetup & AI Summit',
      location: 'Johannesburg',
      date: 'June 2026',
      coverImage: '/images/corporateAndEvents/GautengAICommunity/PSX_20260627_192700.jpg',
      description: 'Gathering tech leaders, AI practitioners, researchers, and innovators across Gauteng for visionary keynotes, insightful discussions, and community connections.',
      photos: [
        {
          id: 'gauteng-ai-1',
          src: '/images/corporateAndEvents/GautengAICommunity/PSX_20260627_192700.jpg',
          alt: 'Evening atmosphere and venue setup for Gauteng AI Community meetup',
          title: 'Summit Atmosphere & Setup',
          caption: 'Main Auditorium Setup',
          featured: true
        },
        {
          id: 'gauteng-ai-2',
          src: '/images/corporateAndEvents/GautengAICommunity/PSX_20260627_200503.jpg',
          alt: 'Keynote presentation and address on the main stage',
          title: 'AI Keynote Address',
          caption: 'Auditorium Main Stage'
        },
        {
          id: 'gauteng-ai-3',
          src: '/images/corporateAndEvents/GautengAICommunity/PSX_20260627_201355.jpg',
          alt: 'Speaker panel discussion and community recognition',
          title: 'Panel & Recognition',
          caption: 'Innovation Discussion Panel'
        }
      ]
    }
  ]
};

export default corporateEventsGallery;
