<script>
  import Icon from './Icon.svelte';

  let menuOpen = $state(false);

  function closeMenu() {
    menuOpen = false;
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<header class="site-header">
  <a class="brand" href="#home" aria-label="Tlhong Digital home" onclick={closeMenu}>
    <span class="brand-mark">T</span>
    <span class="brand-copy">
      <strong>TLHONG</strong>
      <small>Digital</small>
    </span>
  </a>

  <nav class={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
    <a href="#about" onclick={closeMenu}>About</a>
    <a href="#services" onclick={closeMenu}>Services</a>
    <a href="#portfolio" onclick={closeMenu}>Portfolio</a>
    <a href="#approach" onclick={closeMenu}>Approach</a>
    <a class="nav-cta" href="#contact" onclick={closeMenu}>
      Book a shoot <Icon name="arrow" />
    </a>
  </nav>

  <button
    class="menu-button"
    type="button"
    aria-label={menuOpen ? "Close menu" : "Open menu"}
    aria-expanded={menuOpen}
    onclick={toggleMenu}
  >
    <Icon name={menuOpen ? "close" : "menu"} />
  </button>
</header>
