/**
 * ====================================================================
 * MASTER GALLERY & EVENT DATA REGISTRY
 * ====================================================================
 * 
 * Hierarchy:
 * 1. Category (e.g. Corporate & Events, Portraits & Lifestyle, etc.)
 * 2. Event (e.g. Sasol Leadership Summit, World Trade Center Summit)
 * 3. Photos (The full set of pictures taken for that specific event)
 * ====================================================================
 */

import corporateEventsGallery from './categories/corporateEvents.js';
import portraitsLifestyleGallery from './categories/portraitsLifestyle.js';
import celebrationsGallery from './categories/celebrations.js';
import sportsGallery from './categories/sports.js';

export {
  corporateEventsGallery,
  portraitsLifestyleGallery,
  celebrationsGallery,
  sportsGallery
};

export const categoryGalleries = [
  corporateEventsGallery,
  portraitsLifestyleGallery,
  celebrationsGallery,
  sportsGallery
];

// Unified "All Work" Gallery containing all events from every category
export const allGallery = {
  id: 'all',
  slug: 'all',
  title: 'All Work',
  eyebrow: 'Selected Visual Stories',
  subtitle: 'A complete showcase of our visual storytelling across disciplines.',
  description:
    'Browse our comprehensive portfolio spanning corporate gatherings, brand milestones, intimate portraiture, unforgettable celebrations, and high-energy sports.',
  coverImage: corporateEventsGallery.coverImage,
  events: [
    ...corporateEventsGallery.events.map(ev => ({
      ...ev,
      categoryTitle: corporateEventsGallery.title,
      categorySlug: corporateEventsGallery.slug
    })),
    ...portraitsLifestyleGallery.events.map(ev => ({
      ...ev,
      categoryTitle: portraitsLifestyleGallery.title,
      categorySlug: portraitsLifestyleGallery.slug
    })),
    ...celebrationsGallery.events.map(ev => ({
      ...ev,
      categoryTitle: celebrationsGallery.title,
      categorySlug: celebrationsGallery.slug
    })),
    ...sportsGallery.events.map(ev => ({
      ...ev,
      categoryTitle: sportsGallery.title,
      categorySlug: sportsGallery.slug
    }))
  ]
};

export const categoryNavList = [
  { slug: 'all', title: 'All Work' },
  { slug: 'corporate-events', title: 'Corporate & Events' },
  { slug: 'portraits-lifestyle', title: 'Portraits & Lifestyle' },
  { slug: 'celebrations', title: 'Celebrations' },
  { slug: 'sports', title: 'Sports' }
];

// Category cards displayed as clickable pictures in Portfolio.svelte
export const categoryCards = [
  {
    slug: 'all',
    title: 'All Work',
    tag: 'Full Portfolio',
    coverImage: '/images/5fmlookback.jpg',
    description: 'Explore the complete archive across all events and photography disciplines.',
    eventCount: allGallery.events.length,
    photoCount: allGallery.events.reduce((sum, ev) => sum + (ev.photos?.length || 0), 0),
    className: 'card-featured'
  },
  {
    slug: 'corporate-events',
    title: 'Corporate & Events',
    tag: 'Conferences & Summits',
    coverImage: '/images/sasolgroup.jpg',
    description: 'Executive summits, business conferences, and evening galas.',
    eventCount: corporateEventsGallery.events.length,
    photoCount: corporateEventsGallery.events.reduce((sum, ev) => sum + (ev.photos?.length || 0), 0),
    className: 'card-tall'
  },
  {
    slug: 'portraits-lifestyle',
    title: 'Portraits & Lifestyle',
    tag: 'Portraits & Branding',
    coverImage: '/images/leraiSeated.jpg',
    description: 'Authentic character, personal branding, and editorial studio sessions.',
    eventCount: portraitsLifestyleGallery.events.length,
    photoCount: portraitsLifestyleGallery.events.reduce((sum, ev) => sum + (ev.photos?.length || 0), 0),
    className: ''
  },
  {
    slug: 'celebrations',
    title: 'Celebrations',
    tag: 'Weddings & Milestones',
    coverImage: '/images/hero.webp',
    description: 'Weddings, nuptials, and joyful family milestone celebrations.',
    eventCount: celebrationsGallery.events.length,
    photoCount: celebrationsGallery.events.reduce((sum, ev) => sum + (ev.photos?.length || 0), 0),
    className: 'card-wide'
  },
  {
    slug: 'sports',
    title: 'Sports',
    tag: 'Athletics & Action',
    coverImage: '/images/sba.jpg',
    description: 'High-energy fixtures, tournament matches, and explosive motion.',
    eventCount: sportsGallery.events.length,
    photoCount: sportsGallery.events.reduce((sum, ev) => sum + (ev.photos?.length || 0), 0),
    className: ''
  }
];

export function categoryToSlug(category) {
  if (!category) return 'all';
  const norm = category.toLowerCase().trim();
  if (norm.includes('corporate')) return 'corporate-events';
  if (norm.includes('portrait')) return 'portraits-lifestyle';
  if (norm.includes('celebration') || norm.includes('wedding')) return 'celebrations';
  if (norm.includes('sport')) return 'sports';
  if (norm === 'all') return 'all';
  return norm.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'all';
}

export function slugToCategory(slug) {
  switch (slug) {
    case 'corporate-events':
      return 'Corporate & Events';
    case 'portraits-lifestyle':
      return 'Portraits & Lifestyle';
    case 'celebrations':
      return 'Celebrations';
    case 'sports':
      return 'Sports';
    case 'all':
    default:
      return 'All Work';
  }
}

export function getGalleryBySlug(slug) {
  if (!slug || slug === 'all') {
    return allGallery;
  }
  const match = categoryGalleries.find(g => g.slug === slug);
  return match || allGallery;
}

export function getEventBySlug(categorySlug, eventSlug) {
  const gallery = getGalleryBySlug(categorySlug);
  if (!gallery || !gallery.events) return null;
  const event = gallery.events.find(ev => ev.slug === eventSlug || ev.id === eventSlug);
  return event || null;
}
