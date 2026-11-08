<script>
  import { onMount, tick } from 'svelte';
  import Header from './lib/Header.svelte';
  import Hero from './lib/Hero.svelte';
  import About from './lib/About.svelte';
  import Services from './lib/Services.svelte';
  import Portfolio from './lib/Portfolio.svelte';
  import Pricing from './lib/Pricing.svelte';
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
    const targetId = rawHash.replace(/^#\/?/, '');
    if (rawHash && rawHash !== '#') {
      showSection(targetId === 'home' ? '' : targetId);
    } else if (currentView === 'gallery') {
      // Back button returning from a gallery: let the browser restore the
      // previous scroll position.
      currentView = 'home';
      currentEventSlug = null;
    }
  }

  const SECTION_IDS = ['home', 'about', 'services', 'portfolio', 'pricing', 'approach', 'contact'];

  // Section links (#about, #contact, ...) are handled in-page so the address
  // bar stays clean instead of showing /#about. Gallery routes (#/gallery/...)
  // keep their shareable hash URLs.
  function cleanHashFromUrl() {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }

  function scrollToSection(targetId, wasGallery) {
    tick().then(() => {
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: wasGallery ? 'instant' : 'smooth' });
        return;
      }
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: wasGallery ? 'instant' : 'smooth' });
      }
    });
  }

  function showSection(targetId) {
    const wasGallery = currentView === 'gallery';
    currentView = 'home';
    currentEventSlug = null;
    scrollToSection(targetId, wasGallery);
    cleanHashFromUrl();
  }

  // Clicks on section anchors scroll in-page without adding a hash to the URL.
  function handleAnchorClick(event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
    if (!link) return;

    const targetId = link.getAttribute('href').slice(1);
    if (!targetId || targetId.startsWith('/') || !SECTION_IDS.includes(targetId)) return;

    event.preventDefault();
    showSection(targetId === 'home' ? '' : targetId);
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
    window.addEventListener('click', handleAnchorClick);
    return () => {
      window.removeEventListener('hashchange', parseHash);
      window.removeEventListener('click', handleAnchorClick);
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
    <Pricing />
    <Approach />
    <Contact />
  {/if}

  <Footer />
</main>
