<script>
  import Icon from './Icon.svelte';

  const services = [
    {
      icon: 'camera',
      number: '01',
      title: 'Corporate & Event Photography',
      description: 'Capturing the people, atmosphere and defining moments that make every event memorable.',
      items: [
        'Corporate events & conferences',
        'Product launches',
        'Networking & business functions',
        'Professional portraits',
        'Organisational photography'
      ]
    },
    {
      icon: 'film',
      number: '02',
      title: 'Videography & Content Production',
      description: 'Creating engaging video content that brings brands, events and stories to life.',
      items: [
        'Corporate event videography',
        'Event highlight videos',
        'Promotional videos',
        'Social media reels',
        'Brand storytelling'
      ]
    },
    {
      icon: 'portrait',
      number: '03',
      title: 'Portrait & Lifestyle Photography',
      description: 'Authentic photography that captures personality, connection and individual expression.',
      items: [
        'Individual portraits',
        'Couples photography',
        'Lifestyle sessions',
        'Personal branding',
        'Graduation photography'
      ]
    },
    {
      icon: 'rings',
      number: '04',
      title: 'Wedding Photography',
      description: 'Preserving the emotions, details and unforgettable moments of your special day.',
      items: [
        'Wedding day coverage',
        'Couple portraits',
        'Ceremony photography',
        'Reception coverage'
      ]
    }
  ];
</script>

<section class="services section-dark" id="services">
  <div class="section-heading">
    <div class="section-label light">
      <p>Our services</p>
    </div>
    <div>
      <p class="eyebrow light">What we do</p>
      <h2>
        Visual work with<br />
        <em>purpose.</em>
      </h2>
    </div>
    <p>
      From one defining moment to a full brand story, we shape each project around what matters most to you.
    </p>
  </div>

  <div class="service-grid">
    {#each services as service (service.title)}
      <article class="service-card">
        <div class="service-card-top">
          <Icon name={service.icon} />
          <span>{service.number}</span>
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <ul>
          {#each service.items as item (item)}
            <li>{item}</li>
          {/each}
        </ul>
      </article>
    {/each}
  </div>
</section>
