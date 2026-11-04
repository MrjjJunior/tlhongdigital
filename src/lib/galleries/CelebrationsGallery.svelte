<script>
  import GalleryView from './GalleryView.svelte';

  let {
    eventSlug = null,
    onSelectCategory = () => {},
    onBackToHome = () => {}
  } = $props();
</script>

<GalleryView
  categorySlug="celebrations"
  {eventSlug}
  {onSelectCategory}
  {onBackToHome}
/>
