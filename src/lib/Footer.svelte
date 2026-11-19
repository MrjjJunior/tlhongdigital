<script>
  import Icon from './Icon.svelte';
  import { selectContactService } from './contactState.svelte.js';
</script>

<footer>
  <div class="footer-top">
    <a class="brand footer-brand" href="#home">
      <span class="brand-mark">T</span>
      <span class="brand-copy">
        <strong>TLHONG</strong>
        <small>Digital</small>
      </span>
    </a>
    <p>Photography, videography and visual storytelling from South Africa.</p>
    <a
      class="footer-email"
      href="#contact"
      onclick={() => selectContactService('General Enquiry')}
      aria-label="Send an enquiry via our contact form"
    >
      <span>tlhongdigital@gmail.com</span> <Icon name="arrow" />
    </a>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Tlhong Digital. All rights reserved.</span>
    <span>South Africa · Available nationwide</span>
    <a href="#home">Back to top ↑</a>
  </div>
</footer>
