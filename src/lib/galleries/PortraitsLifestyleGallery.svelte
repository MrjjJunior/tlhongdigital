<script>
  import GalleryView from './GalleryView.svelte';

  let {
    eventSlug = null,
    onSelectCategory = () => {},
    onBackToHome = () => {}
  } = $props();
</script>

<GalleryView
  categorySlug="portraits-lifestyle"
  {eventSlug}
  {onSelectCategory}
  {onBackToHome}
/>
