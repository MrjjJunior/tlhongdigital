<script>
  import Icon from './Icon.svelte';
</script>

<section class="hero" id="home">
  <div
    class="hero-image"
    role="img"
    aria-label="A professionally photographed couple on their wedding day"
  ></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="eyebrow light">Photography · Film · Storytelling</p>
    <h1>
      <!-- We capture more<br />
      than moments.<br /> -->
      <!-- <em>We capture stories.</em> -->
       <em>Tlhong Digital</em>
    </h1>
    <p class="hero-copy">
      Professional photography, videography and visual content production for brands, businesses and individuals.
    </p>
    <div class="hero-actions">
      <a class="button button-light" href="#portfolio">
        Explore our work <Icon name="arrow" />
      </a>
      <a class="text-link light" href="#contact">
        Book a shoot <Icon name="arrow" />
      </a>
    </div>
  </div>

  <div class="hero-note">
    <span>Based in South Africa</span>
    <span>Available nationwide</span>
  </div>

  <a class="scroll-cue" href="#about" aria-label="Scroll to about section">
    <span>Scroll</span>
    <i></i>
  </a>
</section>
