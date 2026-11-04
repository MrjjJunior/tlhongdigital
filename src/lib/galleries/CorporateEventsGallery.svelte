<script>
  import GalleryView from './GalleryView.svelte';

  let {
    eventSlug = null,
    onSelectCategory = () => {},
    onBackToHome = () => {}
  } = $props();
</script>

<GalleryView
  categorySlug="corporate-events"
  {eventSlug}
  {onSelectCategory}
  {onBackToHome}
/>
