<script>
  import Icon from './Icon.svelte';

  const categories = [
    'All',
    'Corporate & Events',
    'Portraits & Lifestyle',
    'Celebrations',
    'Sports'
  ];

  const portfolioItems = [
    {
      src: 'https://images.unsplash.com/photo-1768508947770-bb3eaf08f971?auto=format&fit=crop&w=1200&q=85',
      alt: 'Two women embracing warmly at an event',
      category: 'Corporate & Events',
      title: 'Moments of connection',
      className: 'portfolio-tall'
    },
    {
      src: 'https://images.unsplash.com/photo-1608009140243-081d0afe4b0c?auto=format&fit=crop&w=1200&q=85',
      alt: 'Newly married couple sharing a quiet moment',
      category: 'Weddings & Celebrations',
      title: 'A promise remembered',
      className: 'portfolio-wide'
    },
    {
      src: 'https://images.unsplash.com/photo-1608009140029-f1f9535601ed?auto=format&fit=crop&w=900&q=85',
      alt: 'Professional portrait of a man outdoors',
      category: 'Portraits & Lifestyle',
      title: 'Quiet confidence',
      className: ''
    },
    {
      src: 'https://images.unsplash.com/photo-1554126196-3bdaba97491c?auto=format&fit=crop&w=1200&q=85',
      alt: 'Live performance with an energetic crowd',
      category: 'Video & Content Production',
      title: 'Energy in motion',
      className: 'portfolio-wide'
    },
    {
      src: 'https://images.unsplash.com/photo-1642711944808-e9c167934427?auto=format&fit=crop&w=900&q=85',
      alt: 'Editorial portrait of a woman on a city street',
      category: 'Portraits & Lifestyle',
      title: 'City stories',
      className: ''
    }
  ];

  let selectedCategory = $state('All');

  let filteredItems = $derived(
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === selectedCategory)
  );

  function setCategory(cat) {
    selectedCategory = cat;
  }
</script>

<section class="portfolio section" id="portfolio">
  <div class="portfolio-heading">
    <div class="section-label">
      <span>03</span>
      <p>Our portfolio</p>
    </div>
    <div>
      <p class="eyebrow">Selected work</p>
      <h2>
        Every frame tells<br />
        <em>a story.</em>
      </h2>
    </div>
    <p>
      Explore our photography and videography across corporate events, brands, celebrations and personal experiences.
    </p>
  </div>

  <div class="filter-row" role="group" aria-label="Filter portfolio">
    {#each categories as category (category)}
      <button
        class={selectedCategory === category ? "filter active" : "filter"}
        type="button"
        onclick={() => setCategory(category)}
      >
        {category}
      </button>
    {/each}
  </div>

  <div class="portfolio-grid">
    {#each filteredItems as item (item.src)}
      <figure class="portfolio-item {item.className}">
        <img src={item.src} alt={item.alt} loading="lazy" />
        <figcaption>
          <small>{item.category}</small>
          <strong>{item.title}</strong>
          <span>
            <Icon name="arrow" />
          </span>
        </figcaption>
      </figure>
    {/each}
  </div>
</section>
