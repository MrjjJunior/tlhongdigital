<script>
  let { name = 'arrow', className = '' } = $props();
</script>

<svg
  class={className}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.6"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  {#if name === 'arrow'}
    <path d="M5 12h14M14 7l5 5-5 5" />
  {:else if name === 'camera'}
    <path d="M4 8h3l2-3h6l2 3h3v11H4Z" />
    <circle cx="12" cy="13" r="3.5" />
  {:else if name === 'film'}
    <rect x="3" y="5" width="14" height="14" rx="2" />
    <path d="m17 10 4-2v8l-4-2M7 5v14M3 9h4M3 15h4" />
  {:else if name === 'portrait'}
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
  {:else if name === 'rings'}
    <circle cx="9" cy="12" r="6" />
    <circle cx="15" cy="12" r="6" />
  {:else if name === 'menu'}
    <path d="M4 7h16M4 12h16M4 17h16" />
  {:else if name === 'close'}
    <path d="m6 6 12 12M18 6 6 18" />
  {/if}
</svg>
