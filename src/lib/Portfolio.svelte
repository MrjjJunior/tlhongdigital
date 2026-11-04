<script>
  import Icon from './Icon.svelte';
  import { categoryCards } from '../data/galleryData.js';

  let { onSelectCategory = null } = $props();

  function navigateToSlug(slug) {
    if (onSelectCategory) {
      onSelectCategory(slug);
    } else {
      window.location.hash = `#/gallery/${slug}`;
    }
  }
</script>

<section class="portfolio section" id="portfolio">
  <div class="portfolio-heading">
    <div class="section-label">
      <span>03</span>
      <p>Our portfolio</p>
    </div>
    <div>
      <p class="eyebrow">Explore our galleries</p>
      <h2>
        Every frame tells<br />
        <em>a story.</em>
      </h2>
    </div>
    <p>
      Select any category below to enter its gallery and view all photographs from our corporate events, editorial portraits, wedding celebrations, and sports fixtures.
    </p>
  </div>

  <!-- Clickable Category Pictures Grid -->
  <div class="category-picture-grid">
    {#each categoryCards as category (category.slug)}
      <a
        href={`#/gallery/${category.slug}`}
        class="category-card {category.className}"
        aria-label="Open {category.title} gallery"
        onclick={(e) => {
          e.preventDefault();
          navigateToSlug(category.slug);
        }}
      >
        <div class="category-image-wrap">
          <img
            src={category.coverImage}
            alt="{category.title} gallery showcase"
            loading="lazy"
          />
        </div>
        <div class="category-overlay"></div>
        <div class="category-info">
          <div class="category-meta">
            <span class="category-tag">{category.tag}</span>
            <span class="category-count">
              {category.eventCount} {category.eventCount === 1 ? 'Event' : 'Events'}
            </span>
          </div>
          <h3 class="category-title">{category.title}</h3>
          <p class="category-desc">{category.description}</p>
          <div class="category-action">
            <span>Explore gallery</span>
            <span class="arrow-circle" aria-hidden="true">
              <Icon name="arrow" />
            </span>
          </div>
        </div>
      </a>
    {/each}
  </div>
</section>

<style>
  .category-picture-grid {
    margin-top: 56px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    grid-auto-flow: dense;
  }

  .category-card {
    position: relative;
    background: var(--forest, #123126);
    border-radius: 4px;
    overflow: hidden;
    height: 420px;
    text-decoration: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: 0 8px 24px rgba(18, 49, 38, 0.12);
    transition: transform 0.45s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.45s;
    outline: none;
  }

  .category-card:focus-visible {
    outline: 3px solid var(--sage, #9ab195);
    outline-offset: 4px;
  }

  .category-card.card-featured {
    grid-column: span 2;
  }

  .category-card.card-wide {
    grid-column: span 2;
  }

  .category-card.card-tall {
    grid-row: span 1;
  }

  .category-image-wrap {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .category-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.85);
    transition: transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1), filter 0.5s;
  }

  .category-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(7, 21, 15, 0.15) 0%,
      rgba(7, 21, 15, 0.55) 55%,
      rgba(7, 21, 15, 0.92) 100%
    );
    transition: background 0.3s ease;
  }

  .category-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 42px rgba(18, 49, 38, 0.25);
  }

  .category-card:hover img {
    transform: scale(1.06);
    filter: saturate(1.05);
  }

  .category-card:hover .category-overlay {
    background: linear-gradient(
      to bottom,
      rgba(7, 21, 15, 0.1) 0%,
      rgba(7, 21, 15, 0.45) 50%,
      rgba(7, 21, 15, 0.88) 100%
    );
  }

  .category-info {
    position: relative;
    z-index: 2;
    padding: 28px 26px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .category-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 2px;
  }

  .category-tag {
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--sage, #9ab195);
    font-weight: 600;
  }

  .category-count {
    font-size: 11px;
    letter-spacing: 0.08em;
    color: rgba(245, 242, 233, 0.75);
    background: rgba(255, 255, 255, 0.1);
    padding: 3px 8px;
    border-radius: 999px;
  }

  .category-title {
    font-family: var(--font-serif, "Playfair Display", Georgia, serif);
    font-size: clamp(26px, 3vw, 36px);
    font-style: italic;
    font-weight: 400;
    line-height: 1.15;
    color: #fff;
    margin: 0;
  }

  .category-desc {
    font-size: 13px;
    color: rgba(245, 242, 233, 0.8);
    font-weight: 300;
    line-height: 1.5;
    max-width: 90%;
    margin: 0 0 6px 0;
  }

  .category-action {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #fff;
    margin-top: 6px;
  }

  .arrow-circle {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    display: grid;
    place-items: center;
    background: rgba(255, 255, 255, 0.08);
    transition: all 0.25s ease;
  }

  .category-card:hover .arrow-circle {
    background: var(--cream, #f5f2e9);
    color: var(--forest, #123126);
    border-color: var(--cream, #f5f2e9);
    transform: translateX(4px);
  }

  .arrow-circle :global(svg) {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 960px) {
    .category-picture-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .category-card.card-featured,
    .category-card.card-wide {
      grid-column: span 1;
    }
  }

  @media (max-width: 640px) {
    .category-picture-grid {
      grid-template-columns: 1fr;
    }
    .category-card {
      height: 360px;
    }
  }
</style>
