<script>
  import Icon from '../Icon.svelte';
  import Lightbox from './Lightbox.svelte';
  import {
    getGalleryBySlug,
    getEventBySlug,
    categoryNavList,
    categoryToSlug
  } from '../../data/galleryData.js';

  let {
    categorySlug = 'all',
    eventSlug = null,
    onSelectCategory = () => {},
    onBackToHome = () => {}
  } = $props();

  let gallery = $derived(getGalleryBySlug(categorySlug));
  let events = $derived(gallery.events || []);

  // Track active event if selected
  let activeEventSlug = $state(null);

  // Sync with prop when passed or changed
  $effect(() => {
    activeEventSlug = eventSlug || null;
  });

  let currentEvent = $derived(
    activeEventSlug ? getEventBySlug(categorySlug, activeEventSlug) : null
  );

  let currentPhotos = $derived(
    currentEvent ? currentEvent.photos || [] : []
  );

  // Lightbox state
  let lightboxOpen = $state(false);
  let activePhotoIndex = $state(0);

  function openLightbox(index) {
    activePhotoIndex = index;
    lightboxOpen = true;
  }

  function closeLightbox() {
    lightboxOpen = false;
  }

  function prevPhoto() {
    activePhotoIndex = (activePhotoIndex - 1 + currentPhotos.length) % currentPhotos.length;
  }

  function nextPhoto() {
    activePhotoIndex = (activePhotoIndex + 1) % currentPhotos.length;
  }

  function selectEvent(ev) {
    activeEventSlug = ev.slug || ev.id;
    window.location.hash = `#/gallery/${categorySlug}/${activeEventSlug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function clearEvent() {
    activeEventSlug = null;
    window.location.hash = `#/gallery/${categorySlug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleCategoryTab(slug) {
    activeEventSlug = null;
    if (onSelectCategory) {
      onSelectCategory(slug);
    } else {
      window.location.hash = `#/gallery/${slug}`;
    }
  }

  function handleBackHome() {
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.location.hash = '#portfolio';
    }
  }
</script>

<div class="gallery-page">
  <!-- Top Breadcrumb & Back Bar -->
  <div class="gallery-nav-bar">
    {#if currentEvent}
      <button class="back-link" type="button" onclick={clearEvent}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Back to {gallery.title} Events</span>
      </button>
    {:else}
      <button class="back-link" type="button" onclick={handleBackHome}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Back to Portfolio</span>
      </button>
    {/if}

    <nav class="breadcrumb" aria-label="Breadcrumbs">
      <a href="#home" onclick={handleBackHome}>Home</a>
      <span>/</span>
      <a href="#portfolio" onclick={handleBackHome}>Portfolio</a>
      <span>/</span>
      {#if currentEvent}
        <button class="breadcrumb-link-btn" type="button" onclick={clearEvent}>
          {gallery.title}
        </button>
        <span>/</span>
        <strong>{currentEvent.title}</strong>
      {:else}
        <strong>{gallery.title}</strong>
      {/if}
    </nav>
  </div>

  {#if currentEvent}
    <!-- ============================================================== -->
    <!-- EVENT VIEW: All Pictures of that set event                     -->
    <!-- ============================================================== -->
    <header class="gallery-header event-header">
      <div class="gallery-header-inner">
        <div class="event-meta-pill">
          {#if currentEvent.tag}
            <span class="event-badge">{currentEvent.tag}</span>
          {/if}
          {#if currentEvent.location}
            <span class="event-loc">{currentEvent.location}</span>
          {/if}
          {#if currentEvent.date}
            <span class="event-date">· {currentEvent.date}</span>
          {/if}
        </div>
        <h1>{currentEvent.title}</h1>
        {#if currentEvent.description}
          <p class="gallery-description">{currentEvent.description}</p>
        {/if}
      </div>

      <div class="gallery-meta">
        <span class="count-badge">
          <strong>{currentPhotos.length}</strong> {currentPhotos.length === 1 ? 'Photograph' : 'Photographs'} in this set
        </span>
      </div>
    </header>

    <!-- Photo Grid for the specific Event -->
    <main class="gallery-grid-wrapper">
      {#if currentPhotos.length === 0}
        <div class="empty-gallery">
          <Icon name="camera" />
          <h3>No photographs uploaded yet for this event</h3>
          <p>You can add photos into the event entry in <code>src/data/categories/{categorySlug}.js</code>.</p>
        </div>
      {:else}
        <div class="photos-grid">
          {#each currentPhotos as photo, i (photo.id || photo.src)}
            <button
              type="button"
              class="photo-card {photo.featured ? 'photo-featured' : ''}"
              aria-label="View photograph: {photo.title || 'Event photo'}"
              onclick={() => openLightbox(i)}
            >
              <figure class="photo-card-inner">
                <div class="image-container">
                  <img
                    src={photo.src}
                    alt={photo.alt || photo.title || 'Event photograph'}
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <div class="card-text">
                    <strong>{photo.title || 'Untitled'}</strong>
                    {#if photo.caption}
                      <span class="caption">{photo.caption}</span>
                    {/if}
                  </div>
                  <span class="expand-btn" aria-hidden="true">
                    <Icon name="arrow" />
                  </span>
                </figcaption>
              </figure>
            </button>
          {/each}
        </div>
      {/if}
    </main>

  {:else}
    <!-- ============================================================== -->
    <!-- CATEGORY VIEW: Shows the Events of this Category               -->
    <!-- ============================================================== -->
    <header class="gallery-header">
      <div class="gallery-header-inner">
        <p class="eyebrow">{gallery.eyebrow || 'Gallery Showcase'}</p>
        <h1>{gallery.title}</h1>
        {#if gallery.subtitle}
          <p class="gallery-subtitle">{gallery.subtitle}</p>
        {/if}
        {#if gallery.description}
          <p class="gallery-description">{gallery.description}</p>
        {/if}
      </div>

      <!-- Category Filter Tabs to switch between categories -->
      <div class="gallery-filter-tabs" role="group" aria-label="Browse categories">
        {#each categoryNavList as cat (cat.slug)}
          <button
            class={categorySlug === cat.slug ? "filter active" : "filter"}
            type="button"
            onclick={() => handleCategoryTab(cat.slug)}
          >
            {cat.title}
          </button>
        {/each}
      </div>

      <div class="gallery-meta">
        <span class="count-badge">
          <strong>{events.length}</strong> {events.length === 1 ? 'Event' : 'Events'} · Click an event to view all pictures
        </span>
      </div>
    </header>

    <!-- Grid of Events in this Category -->
    <main class="gallery-grid-wrapper">
      {#if events.length === 0}
        <div class="empty-gallery">
          <Icon name="camera" />
          <h3>No events added yet</h3>
          <p>Add events to <code>src/data/categories/{categorySlug}.js</code>.</p>
        </div>
      {:else}
        <div class="events-grid">
          {#each events as event (event.id || event.slug)}
            <button
              type="button"
              class="event-card"
              aria-label="Open event: {event.title}"
              onclick={() => selectEvent(event)}
            >
              <div class="event-image-wrap">
                <img
                  src={event.coverImage}
                  alt="{event.title} cover"
                  loading="lazy"
                />
              </div>
              <div class="event-overlay"></div>
              <div class="event-info">
                <div class="event-top-row">
                  {#if event.tag}
                    <span class="event-tag">{event.tag}</span>
                  {/if}
                  <span class="event-photo-count">
                    {event.photos?.length || 0} {event.photos?.length === 1 ? 'Photo' : 'Photos'}
                  </span>
                </div>
                <h3 class="event-title">{event.title}</h3>
                {#if event.location || event.date}
                  <p class="event-sub">
                    {event.location}{#if event.location && event.date} · {/if}{event.date}
                  </p>
                {/if}
                <div class="event-view-action">
                  <span>View event photos</span>
                  <span class="event-arrow-circle" aria-hidden="true">
                    <Icon name="arrow" />
                  </span>
                </div>
              </div>
            </button>
          {/each}
        </div>
      {/if}
    </main>
  {/if}

  <!-- Gallery Bottom CTA -->
  <section class="gallery-cta">
    <div class="cta-inner">
      <p class="eyebrow light">Book your session</p>
      <h2>
        Planning an event or<br />
        <em>visual project?</em>
      </h2>
      <p>
        Whether you require comprehensive event coverage, striking editorial portraits, or dynamic campaign imagery, let's create timeless visuals together.
      </p>
      <div class="cta-buttons">
        <a
          class="button button-light"
          href="mailto:hello@tlhongdigital.co.za?subject={encodeURIComponent('Shoot enquiry: ' + (currentEvent ? currentEvent.title : gallery.title))}"
        >
          Inquire about this style <Icon name="arrow" />
        </a>
        {#if currentEvent}
          <button class="button-outline" type="button" onclick={clearEvent}>
            ← View other events
          </button>
        {:else}
          <button class="button-outline" type="button" onclick={handleBackHome}>
            ← Back to portfolio
          </button>
        {/if}
      </div>
    </div>
  </section>

  <!-- Fullscreen Lightbox for Event Photos -->
  {#if currentPhotos.length > 0}
    <Lightbox
      items={currentPhotos}
      currentIndex={activePhotoIndex}
      isOpen={lightboxOpen}
      onClose={closeLightbox}
      onPrev={prevPhoto}
      onNext={nextPhoto}
    />
  {/if}
</div>

<style>
  .gallery-page {
    background: var(--paper, #ece8dc);
    min-height: 100vh;
    padding-top: 110px;
  }

  .gallery-nav-bar {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4vw 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border-bottom: 1px solid var(--line, rgba(20, 35, 29, 0.12));
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--ink, #14231d);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.05em;
    padding: 8px 16px;
    border-radius: 999px;
    background: rgba(20, 35, 29, 0.05);
    border: 1px solid rgba(20, 35, 29, 0.12);
    transition: all 0.25s ease;
    cursor: pointer;
  }

  .back-link svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
  }

  .back-link:hover {
    background: var(--forest, #123126);
    color: var(--cream, #f5f2e9);
    border-color: var(--forest, #123126);
  }

  .back-link:hover svg {
    transform: translateX(-3px);
  }

  .breadcrumb {
    font-size: 12px;
    color: #6a7972;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .breadcrumb a {
    color: #6a7972;
    transition: color 0.2s;
  }

  .breadcrumb a:hover {
    color: var(--forest, #123126);
  }

  .breadcrumb-link-btn {
    background: none;
    border: none;
    padding: 0;
    font-size: 12px;
    color: #6a7972;
    cursor: pointer;
    font-family: inherit;
    transition: color 0.2s;
  }

  .breadcrumb-link-btn:hover {
    color: var(--forest, #123126);
    text-decoration: underline;
  }

  .breadcrumb strong {
    color: var(--ink, #14231d);
    font-weight: 600;
  }

  .gallery-header {
    max-width: 1400px;
    margin: 0 auto;
    padding: 48px 4vw 32px;
  }

  .event-header {
    padding-bottom: 24px;
  }

  .event-meta-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #53615b;
    margin-bottom: 14px;
    font-weight: 600;
  }

  .event-badge {
    background: var(--forest, #123126);
    color: var(--cream, #f5f2e9);
    padding: 3px 10px;
    border-radius: 999px;
  }

  .gallery-header-inner {
    max-width: 860px;
  }

  .gallery-header h1 {
    color: var(--ink, #14231d);
    font-size: clamp(38px, 5.2vw, 72px);
    font-weight: 300;
    line-height: 1.05;
    margin-bottom: 16px;
    letter-spacing: -0.04em;
  }

  .gallery-subtitle {
    font-family: var(--font-serif, "Playfair Display", Georgia, serif);
    font-style: italic;
    font-size: clamp(20px, 2.5vw, 28px);
    color: var(--green, #1b4635);
    line-height: 1.35;
    margin-bottom: 16px;
  }

  .gallery-description {
    font-size: 15px;
    color: #53615b;
    font-weight: 300;
    line-height: 1.8;
    max-width: 720px;
  }

  .gallery-filter-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 40px;
    padding-top: 24px;
    border-top: 1px solid var(--line, rgba(20, 35, 29, 0.12));
  }

  .gallery-meta {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .count-badge {
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #6a7972;
    background: rgba(20, 35, 29, 0.05);
    padding: 6px 14px;
    border-radius: 999px;
  }

  .count-badge strong {
    color: var(--forest, #123126);
  }

  .gallery-grid-wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 10px 4vw 90px;
  }

  /* ============================================================== */
  /* EVENTS GRID                                                    */
  /* ============================================================== */
  .events-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
  }

  .event-card {
    position: relative;
    background: var(--forest, #123126);
    border-radius: 4px;
    overflow: hidden;
    height: 440px;
    cursor: pointer;
    text-align: left;
    padding: 0;
    border: none;
    font-family: inherit;
    box-shadow: 0 8px 26px rgba(18, 49, 38, 0.12);
    transition: transform 0.45s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.45s;
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .event-card:focus-visible {
    outline: 3px solid var(--sage, #9ab195);
    outline-offset: 4px;
  }

  .event-image-wrap {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .event-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.85);
    transition: transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1), filter 0.5s;
  }

  .event-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(7, 21, 15, 0.15) 0%,
      rgba(7, 21, 15, 0.55) 55%,
      rgba(7, 21, 15, 0.94) 100%
    );
    transition: background 0.3s ease;
  }

  .event-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 22px 46px rgba(18, 49, 38, 0.26);
  }

  .event-card:hover img {
    transform: scale(1.06);
    filter: saturate(1.05);
  }

  .event-info {
    position: relative;
    z-index: 2;
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: #fff;
  }

  .event-top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 4px;
  }

  .event-tag {
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--sage, #9ab195);
    font-weight: 600;
  }

  .event-photo-count {
    font-size: 11px;
    letter-spacing: 0.08em;
    color: rgba(245, 242, 233, 0.8);
    background: rgba(255, 255, 255, 0.12);
    padding: 3px 8px;
    border-radius: 999px;
  }

  .event-title {
    font-family: var(--font-serif, "Playfair Display", Georgia, serif);
    font-size: 26px;
    font-style: italic;
    font-weight: 400;
    line-height: 1.15;
    color: #fff;
    margin: 0;
  }

  .event-sub {
    font-size: 12px;
    color: rgba(245, 242, 233, 0.72);
    font-weight: 300;
    margin: 0;
  }

  .event-view-action {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #fff;
    margin-top: 10px;
  }

  .event-arrow-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    display: grid;
    place-items: center;
    background: rgba(255, 255, 255, 0.08);
    transition: all 0.25s ease;
  }

  .event-card:hover .event-arrow-circle {
    background: var(--cream, #f5f2e9);
    color: var(--forest, #123126);
    border-color: var(--cream, #f5f2e9);
    transform: translateX(3px);
  }

  .event-arrow-circle :global(svg) {
    width: 14px;
    height: 14px;
  }

  /* ============================================================== */
  /* PHOTOS GRID (Inside an Event)                                 */
  /* ============================================================== */
  .photos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    grid-auto-flow: dense;
  }

  .photo-card {
    position: relative;
    background: var(--forest, #123126);
    border-radius: 3px;
    overflow: hidden;
    height: 380px;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(18, 49, 38, 0.08);
    transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.4s;
    outline: none;
    border: none;
    padding: 0;
    text-align: left;
    display: block;
    width: 100%;
  }

  .photo-card:focus-visible {
    outline: 3px solid var(--green, #1b4635);
  }

  .photo-card.photo-featured {
    grid-column: span 2;
  }

  .photo-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
  }

  .image-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .photo-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.85);
    transition: transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1), filter 0.5s;
  }

  .photo-card-inner::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      rgba(0, 0, 0, 0) 45%,
      rgba(5, 25, 17, 0.88) 100%
    );
    pointer-events: none;
    transition: opacity 0.3s;
  }

  .photo-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(18, 49, 38, 0.18);
  }

  .photo-card:hover img {
    transform: scale(1.05);
    filter: saturate(1.05);
  }

  .photo-card figcaption {
    position: absolute;
    bottom: 22px;
    left: 22px;
    right: 22px;
    z-index: 2;
    color: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
    pointer-events: none;
  }

  .card-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 80%;
  }

  .card-text strong {
    font-family: var(--font-serif, "Playfair Display", Georgia, serif);
    font-size: 20px;
    font-style: italic;
    font-weight: 500;
    line-height: 1.2;
    color: #fff;
  }

  .card-text .caption {
    font-size: 11px;
    color: rgba(245, 242, 233, 0.75);
    font-weight: 300;
  }

  .expand-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    display: grid;
    place-items: center;
    color: #fff;
    flex-shrink: 0;
    transition: all 0.25s ease;
    background: rgba(255, 255, 255, 0.08);
  }

  .photo-card:hover .expand-btn {
    background: rgba(255, 255, 255, 0.25);
    border-color: #fff;
    transform: scale(1.08);
  }

  .expand-btn :global(svg) {
    width: 16px;
    height: 16px;
  }

  .empty-gallery {
    text-align: center;
    padding: 80px 20px;
    background: rgba(20, 35, 29, 0.03);
    border: 1px dashed rgba(20, 35, 29, 0.2);
    border-radius: 8px;
    color: #53615b;
  }

  .empty-gallery :global(svg) {
    width: 44px;
    height: 44px;
    margin-bottom: 16px;
    stroke: var(--green, #1b4635);
  }

  .empty-gallery h3 {
    font-family: var(--font-serif, "Playfair Display", Georgia, serif);
    font-size: 24px;
    color: var(--ink, #14231d);
    margin-bottom: 8px;
  }

  .empty-gallery code {
    background: rgba(20, 35, 29, 0.08);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 13px;
  }

  /* Gallery CTA */
  .gallery-cta {
    background: var(--forest, #123126);
    color: var(--cream, #f5f2e9);
    padding: 90px 4vw;
  }

  .cta-inner {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cta-inner .eyebrow {
    justify-content: center;
  }

  .cta-inner .eyebrow::before {
    display: none;
  }

  .cta-inner h2 {
    font-size: clamp(38px, 5vw, 68px);
    margin-bottom: 20px;
    line-height: 1.05;
  }

  .cta-inner h2 em {
    font-family: var(--font-serif, "Playfair Display", Georgia, serif);
    font-style: italic;
    color: var(--sage, #9ab195);
  }

  .cta-inner p {
    font-size: 16px;
    line-height: 1.8;
    color: rgba(245, 242, 233, 0.8);
    max-width: 600px;
    margin-bottom: 36px;
    font-weight: 300;
  }

  .cta-buttons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .button-outline {
    background: transparent;
    color: var(--cream, #f5f2e9);
    border: 1px solid rgba(245, 242, 233, 0.35);
    padding: 14px 28px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.08em;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .button-outline:hover {
    background: rgba(245, 242, 233, 0.12);
    border-color: #fff;
  }

  @media (max-width: 1024px) {
    .events-grid,
    .photos-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .photo-card.photo-featured {
      grid-column: span 1;
    }
  }

  @media (max-width: 680px) {
    .gallery-page {
      padding-top: 90px;
    }
    .events-grid,
    .photos-grid {
      grid-template-columns: 1fr;
    }
    .event-card {
      height: 380px;
    }
    .photo-card {
      height: 340px;
    }
    .gallery-nav-bar {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }
</style>
