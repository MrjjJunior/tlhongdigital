<script>
  import Icon from '../Icon.svelte';

  let {
    items = [],
    currentIndex = 0,
    isOpen = false,
    onClose = () => {},
    onPrev = () => {},
    onNext = () => {}
  } = $props();

  let activeItem = $derived(items[currentIndex] || null);

  function handleKeydown(event) {
    if (!isOpen) return;
    if (event.key === 'Escape') {
      onClose();
    } else if (event.key === 'ArrowLeft') {
      onPrev();
    } else if (event.key === 'ArrowRight') {
      onNext();
    }
  }

  $effect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeydown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeydown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

{#if isOpen && activeItem}
  <div
    class="lightbox-backdrop"
    role="dialog"
    aria-modal="true"
    aria-label="Image preview"
    tabindex="-1"
    onclick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}
    onkeydown={(e) => {
      if (e.key === 'Escape') onClose();
    }}
  >
    <button
      class="lightbox-btn lightbox-close"
      type="button"
      aria-label="Close preview"
      onclick={onClose}
    >
      <Icon name="close" />
    </button>

    {#if items.length > 1}
      <button
        class="lightbox-btn lightbox-prev"
        type="button"
        aria-label="Previous image"
        onclick={onPrev}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        class="lightbox-btn lightbox-next"
        type="button"
        aria-label="Next image"
        onclick={onNext}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    {/if}

    <div class="lightbox-stage">
      <div class="lightbox-image-wrapper">
        <img
          src={activeItem.src}
          alt={activeItem.alt || activeItem.title || 'Portfolio photograph'}
          class="lightbox-image"
        />
      </div>

      <div class="lightbox-footer">
        <div class="lightbox-info">
          {#if activeItem.tag}
            <span class="lightbox-tag">{activeItem.tag}</span>
          {/if}
          <h3>{activeItem.title || 'Untitled'}</h3>
          {#if activeItem.caption}
            <p>{activeItem.caption}</p>
          {/if}
        </div>
        <div class="lightbox-counter">
          <span>{currentIndex + 1}</span> / <span>{items.length}</span>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .lightbox-backdrop {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(7, 21, 15, 0.94);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    animation: fadeIn 0.25s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .lightbox-stage {
    position: relative;
    max-width: 1200px;
    width: 100%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .lightbox-image-wrapper {
    position: relative;
    max-height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lightbox-image {
    max-height: 75vh;
    max-width: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 4px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55);
  }

  .lightbox-footer {
    width: 100%;
    margin-top: 18px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;
    color: var(--cream, #f5f2e9);
  }

  .lightbox-info {
    max-width: 600px;
  }

  .lightbox-tag {
    display: inline-block;
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--sage, #9ab195);
    margin-bottom: 6px;
    font-weight: 600;
  }

  .lightbox-info h3 {
    font-family: var(--font-serif, "Playfair Display", Georgia, serif);
    font-size: 22px;
    font-weight: 400;
    font-style: italic;
    color: #fff;
    margin: 0 0 4px 0;
  }

  .lightbox-info p {
    font-size: 13px;
    color: rgba(245, 242, 233, 0.72);
    font-weight: 300;
    margin: 0;
  }

  .lightbox-counter {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: var(--sage, #9ab195);
    white-space: nowrap;
    padding-bottom: 4px;
  }

  .lightbox-btn {
    position: absolute;
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 10001;
  }

  .lightbox-btn:hover {
    background: rgba(255, 255, 255, 0.22);
    border-color: #fff;
    transform: scale(1.06);
  }

  .lightbox-btn svg {
    width: 20px;
    height: 20px;
  }

  .lightbox-close {
    top: 24px;
    right: 28px;
  }

  .lightbox-prev {
    left: 28px;
    top: 50%;
    transform: translateY(-50%);
  }

  .lightbox-prev:hover {
    transform: translateY(-50%) scale(1.06);
  }

  .lightbox-next {
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
  }

  .lightbox-next:hover {
    transform: translateY(-50%) scale(1.06);
  }

  @media (max-width: 768px) {
    .lightbox-backdrop {
      padding: 16px;
    }

    .lightbox-image-wrapper {
      max-height: 65vh;
    }

    .lightbox-image {
      max-height: 65vh;
    }

    .lightbox-close {
      top: 14px;
      right: 14px;
      width: 40px;
      height: 40px;
    }

    .lightbox-prev {
      left: 10px;
      width: 40px;
      height: 40px;
    }

    .lightbox-next {
      right: 10px;
      width: 40px;
      height: 40px;
    }

    .lightbox-footer {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      margin-top: 12px;
    }

    .lightbox-info h3 {
      font-size: 18px;
    }
  }
</style>
