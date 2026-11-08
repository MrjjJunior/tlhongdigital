<script>
  import Icon from './Icon.svelte';

  const CONTACT_EMAIL = 'tlhongdigital@gmail.com';

  function mailtoHref(subject) {
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
  }

  const pricingCards = [
    {
      id: 'photography',
      title: 'Photography',
      tag: 'Stills & Portraiture',
      icon: 'camera',
      price: 'From R1,200',
      priceNote: 'Call-out fee · First hour included',
      features: [
        'From R1,200 call-out fee.',
        'First hour included.',
        'Professional photo editing included.',
        'High-resolution digital delivery.',
        'Additional hours: R600/hour.'
      ],
      ctaText: 'Enquire for Photography',
      featured: false
    },
    {
      id: 'videography',
      title: 'Videography',
      tag: 'Film & Motion',
      icon: 'film',
      price: 'Custom quotation',
      priceNote: 'Tailored to your event scope',
      features: [
        'Custom quotation.',
        'Event video coverage.',
        'Highlight videos.',
        'Social media reels.',
        'Professional video editing.'
      ],
      ctaText: 'Enquire for Videography',
      featured: false
    },
    {
      id: 'combined',
      title: 'Photography & Videography',
      tag: 'Combined Package',
      icon: 'rings',
      price: 'Custom packages',
      priceNote: 'All-inclusive visual production',
      features: [
        'Custom packages.',
        'Combined event coverage.',
        'Edited photographs.',
        'Highlight video.'
      ],
      ctaText: 'Enquire for Combined',
      featured: true
    }
  ];
</script>

<section class="pricing section" id="pricing">
  <div class="pricing-heading">
    <div class="section-label">
      <span>04</span>
      <p>Pricing</p>
    </div>
    <div>
      <p class="eyebrow">Rates & Packages</p>
      <h2>
        Transparent pricing<br />
        <em>for quality craft.</em>
      </h2>
    </div>
    <p>
      Clear, straightforward rates for photography, quotations for video production, and tailored combined packages to document your vision.
    </p>
  </div>

  <div class="pricing-grid">
    {#each pricingCards as card (card.id)}
      <article class="pricing-card" class:featured={card.featured}>
        <div class="card-header">
          <div class="card-meta">
            <span class="card-tag">{card.tag}</span>
            <span class="card-icon" aria-hidden="true">
              <Icon name={card.icon} />
            </span>
          </div>

          <h3 class="card-title">{card.title}</h3>

          <div class="card-price-wrap">
            <div class="card-price">
              <span class="price-value {card.id !== 'photography' ? 'custom' : ''}">
                {card.price}
              </span>
            </div>
            <span class="price-note">{card.priceNote}</span>
          </div>
        </div>

        <div class="card-divider" aria-hidden="true"></div>

        <ul class="features-list">
          {#each card.features as feature}
            <li>
              <span class="feature-icon" aria-hidden="true">
                <Icon name="check" />
              </span>
              <span>{feature}</span>
            </li>
          {/each}
        </ul>

        <div class="card-action">
          <a
            class="button button-light pricing-cta"
            href={mailtoHref(card.title)}
            aria-label="Enquire about {card.title} by email"
          >
            Enquire now <Icon name="arrow" />
          </a>
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  .pricing {
    background: var(--cream, #f5f2e9);
    position: relative;
  }

  .pricing-heading {
    display: grid;
    grid-template-columns: 140px 1fr 0.7fr;
    gap: 5vw;
    align-items: flex-start;
  }

  .pricing-heading h2 {
    font-size: clamp(42px, 4.5vw, 68px);
    font-family: var(--font-serif, "Playfair Display", Georgia, serif);
    font-weight: 400;
    line-height: 1.08;
    color: var(--forest, #123126);
    margin: 0;
  }

  .pricing-heading h2 em {
    font-style: italic;
  }

  .pricing-heading p:last-child {
    font-size: 14px;
    line-height: 1.7;
    color: var(--ink, #14231d);
    font-weight: 300;
  }

  .pricing-grid {
    margin-top: 56px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
  }

  .pricing-card {
    background: var(--forest, #123126);
    color: var(--cream, #f5f2e9);
    border-radius: 4px;
    padding: 38px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 24px rgba(18, 49, 38, 0.12);
    transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.4s, border-color 0.3s;
  }

  .pricing-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 22px 46px rgba(18, 49, 38, 0.25);
    border-color: rgba(154, 177, 149, 0.32);
  }

  .pricing-card.featured {
    background: #0d281f;
    border: 1px solid rgba(154, 177, 149, 0.28);
    box-shadow: 0 10px 30px rgba(18, 49, 38, 0.16);
  }

  .pricing-card.featured:hover {
    border-color: rgba(154, 177, 149, 0.55);
  }

  .card-header {
    display: flex;
    flex-direction: column;
  }

  .card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }

  .card-tag {
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--sage, #9ab195);
    font-weight: 600;
  }

  .card-icon {
    color: var(--sage, #9ab195);
    opacity: 0.85;
    display: inline-flex;
  }

  .card-icon :global(svg) {
    width: 22px;
    height: 22px;
  }

  .card-title {
    font-family: var(--font-serif, "Playfair Display", Georgia, serif);
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    line-height: 1.2;
    color: #fff;
    margin: 0 0 16px 0;
    min-height: 60px;
    display: flex;
    align-items: center;
  }

  .card-price-wrap {
    margin-bottom: 22px;
  }

  .card-price {
    display: flex;
    align-items: baseline;
    gap: 4px;
  }

  .price-value {
    font-family: var(--font-serif, "Playfair Display", Georgia, serif);
    font-size: 38px;
    font-weight: 400;
    color: #fff;
    line-height: 1.1;
    letter-spacing: -0.01em;
  }

  .price-value.custom {
    font-size: 28px;
    font-style: italic;
  }

  .price-note {
    display: block;
    margin-top: 6px;
    font-size: 12px;
    letter-spacing: 0.04em;
    color: rgba(245, 242, 233, 0.68);
    font-weight: 300;
  }

  .card-divider {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 24px;
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin: 0 0 32px 0;
    display: flex;
    flex-direction: column;
    gap: 13px;
    flex-grow: 1;
  }

  .features-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 13.5px;
    line-height: 1.5;
    color: rgba(245, 242, 233, 0.88);
    font-weight: 300;
  }

  .feature-icon {
    color: var(--sage, #9ab195);
    display: inline-flex;
    flex-shrink: 0;
    margin-top: 3px;
  }

  .feature-icon :global(svg) {
    width: 15px;
    height: 15px;
  }

  .card-action {
    margin-top: auto;
  }

  .pricing-cta {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    padding: 16px 22px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--forest, #123126);
    background: var(--cream, #f5f2e9);
    border-radius: 2px;
    transition: background 0.25s, color 0.25s, transform 0.2s, box-shadow 0.25s;
  }

  .pricing-cta:hover {
    background: var(--sage, #9ab195);
    color: var(--deep, #0b2118);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .pricing-cta :global(svg) {
    width: 15px;
    height: 15px;
    transition: transform 0.25s ease;
  }

  .pricing-cta:hover :global(svg) {
    transform: translateX(4px);
  }

  @media (max-width: 980px) {
    .pricing-heading {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .pricing-grid {
      grid-template-columns: 1fr;
      margin-top: 40px;
      gap: 20px;
    }

    .card-title {
      min-height: auto;
    }
  }

  @media (max-width: 640px) {
    .pricing-card {
      padding: 30px 22px;
    }

    .price-value {
      font-size: 32px;
    }

    .price-value.custom {
      font-size: 24px;
    }
  }
</style>
