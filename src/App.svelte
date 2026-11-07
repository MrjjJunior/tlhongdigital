<script>
  import { onMount, tick } from 'svelte';
  import Header from './lib/Header.svelte';
  import Hero from './lib/Hero.svelte';
  import About from './lib/About.svelte';
  import Services from './lib/Services.svelte';
  import Portfolio from './lib/Portfolio.svelte';
  import Approach from './lib/Approach.svelte';
  import Contact from './lib/Contact.svelte';
  import Footer from './lib/Footer.svelte';

  // Dedicated Gallery Page Components
  import CorporateEventsGallery from './lib/galleries/CorporateEventsGallery.svelte';
  import PortraitsLifestyleGallery from './lib/galleries/PortraitsLifestyleGallery.svelte';
  import CelebrationsGallery from './lib/galleries/CelebrationsGallery.svelte';
  import SportsGallery from './lib/galleries/SportsGallery.svelte';
  import AllGallery from './lib/galleries/AllGallery.svelte';

  import { categoryToSlug } from './data/galleryData.js';

  // State: 'home' or 'gallery'
  let currentView = $state('home');
  let currentCategorySlug = $state('all');
  let currentEventSlug = $state(null);

  function parseHash() {
    const rawHash = window.location.hash || '';

    // Match #/gallery/:categorySlug/:eventSlug or #/gallery/:categorySlug
    const galleryMatch = rawHash.match(/^#\/?gallery(?:\/([a-zA-Z0-9_-]+))?(?:\/([a-zA-Z0-9_-]+))?/);
    if (galleryMatch) {
      currentView = 'gallery';
      currentCategorySlug = galleryMatch[1] || 'all';
      currentEventSlug = galleryMatch[2] || null;
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // Direct category slug e.g. #corporate-events, #sports
    const directSlugs = ['corporate-events', 'portraits-lifestyle', 'celebrations', 'sports', 'all'];
    const simpleHash = rawHash.replace(/^#\/?/, '').toLowerCase();
    if (directSlugs.includes(simpleHash)) {
      currentView = 'gallery';
      currentCategorySlug = simpleHash;
      currentEventSlug = null;
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // Otherwise we are on the home view
    const wasGallery = currentView === 'gallery';
    currentView = 'home';
    currentEventSlug = null;

    if (rawHash && rawHash !== '#' && rawHash !== '#home') {
      const targetId = rawHash.replace(/^#\/?/, '');
      tick().then(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: wasGallery ? 'instant' : 'smooth' });
        }
      });
    } else if (rawHash === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function navigateToGallery(slugOrCategory) {
    const slug = categoryToSlug(slugOrCategory);
    window.location.hash = `#/gallery/${slug}`;
  }

  function navigateToPortfolio() {
    window.location.hash = '#portfolio';
  }

  onMount(() => {
    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => {
      window.removeEventListener('hashchange', parseHash);
    };
  });
</script>

<main class={currentView === 'gallery' ? 'view-gallery' : 'view-home'}>
  <Header isGallery={currentView === 'gallery'} />

  {#if currentView === 'gallery'}
    {#if currentCategorySlug === 'corporate-events'}
      <CorporateEventsGallery
        eventSlug={currentEventSlug}
        onSelectCategory={navigateToGallery}
        onBackToHome={navigateToPortfolio}
      />
    {:else if currentCategorySlug === 'portraits-lifestyle'}
      <PortraitsLifestyleGallery
        eventSlug={currentEventSlug}
        onSelectCategory={navigateToGallery}
        onBackToHome={navigateToPortfolio}
      />
    {:else if currentCategorySlug === 'celebrations'}
      <CelebrationsGallery
        eventSlug={currentEventSlug}
        onSelectCategory={navigateToGallery}
        onBackToHome={navigateToPortfolio}
      />
    {:else if currentCategorySlug === 'sports'}
      <SportsGallery
        eventSlug={currentEventSlug}
        onSelectCategory={navigateToGallery}
        onBackToHome={navigateToPortfolio}
      />
    {:else}
      <AllGallery
        eventSlug={currentEventSlug}
        onSelectCategory={navigateToGallery}
        onBackToHome={navigateToPortfolio}
      />
    {/if}
  {:else}
    <Hero />
    <About />
    <Services />
    <Portfolio onSelectCategory={navigateToGallery} />
    <Approach />
    <Contact />
  {/if}

  <Footer />
</main>
