<script>
  const steps = [
    ['01', 'Connect', 'We start by understanding your event, vision, expectations and requirements.'],
    ['02', 'Plan', 'We discuss the creative direction, coverage, logistics and deliverables.'],
    ['03', 'Capture', 'We document the important moments and bring your vision to life through photography and video.'],
    ['04', 'Deliver', 'We professionally edit and deliver your final visual content according to the agreed timeline.']
  ];
</script>

<section class="approach section" id="approach">
  <div class="approach-intro">
    <div class="section-label light">
      <p>Our approach</p>
    </div>
    <p class="eyebrow light">How we work</p>
    <h2>
      From vision to<br />
      <em>final delivery.</em>
    </h2>
    <p>
      Clear communication, thoughtful planning and careful craft at every stage.
    </p>
  </div>

  <div class="approach-list">
    {#each steps as [num, title, desc] (num)}
      <article>
        <span>{num}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </article>
    {/each}
  </div>
</section>
