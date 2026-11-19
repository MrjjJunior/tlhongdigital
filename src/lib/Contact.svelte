<script>
  import Icon from './Icon.svelte';
  import { contactState, closeContactForm } from './contactState.svelte.js';

  let name = $state('');
  let email = $state('');
  let phone = $state('');
  let message = $state('');

  let status = $state('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  let errorMessage = $state('');
  let isOpen = $state(false);

  // Sync external open requests (e.g. from Pricing, Nav, or Gallery)
  $effect(() => {
    if (contactState.isOpen) {
      isOpen = true;
    }
  });

  function toggleForm() {
    isOpen = !isOpen;
    contactState.isOpen = isOpen;
    if (isOpen) {
      setTimeout(() => {
        const el = document.getElementById('contact-form-drawer');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 250);
    }
  }

  function handleClose() {
    isOpen = false;
    closeContactForm();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    status = 'submitting';
    errorMessage = '';

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || 'Not provided',
      message: message.trim(),
      _subject: `New Client Enquiry from ${name.trim()}`,
      _template: 'table',
      _captcha: 'false'
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/tlhongdigital@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const resData = await response.json().catch(() => null);

      if (response.ok && (resData?.success === 'true' || resData?.success === true || response.status === 200)) {
        status = 'success';
      } else {
        throw new Error(resData?.message || 'Submission was not completed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      status = 'error';
      errorMessage = 'Could not deliver enquiry. Please check your connection or email tlhongdigital@gmail.com directly.';
    }
  }

  function handleReset() {
    name = '';
    email = '';
    phone = '';
    message = '';
    status = 'idle';
    errorMessage = '';
  }
</script>

<section class="contact" id="contact" class:form-open={isOpen}>
  <!-- Background photograph -->
  <div
    class="contact-image"
    role="img"
    aria-label="A joyful gathering captured in a candid photograph"
  ></div>

  <!-- Dynamic overlay: starts at 30%, increases to 70% when contact is pressed -->
  <div class="contact-overlay" aria-hidden="true"></div>

  <div class="contact-inner">
    <!-- Hero / Headline block: Main visual on the section -->
    <div class="contact-hero">
      <p class="eyebrow light">Your story deserves to be seen</p>
      <h2>
        Let's create something<br />
        <em>worth remembering.</em>
      </h2>
      <p class="contact-lead">
        Have an event coming up? Launching a brand? Looking for professional photography or videography? We'd love to hear about your project.
      </p>

      <!-- Prominent Call-To-Action Button -->
      <div class="contact-cta-wrapper">
        <button
          type="button"
          class="button button-light contact-trigger-btn"
          class:is-active={isOpen}
          onclick={toggleForm}
          aria-expanded={isOpen}
          aria-controls="contact-form-drawer"
        >
          {#if isOpen}
            <span>Close</span> <Icon name="close" />
          {:else}
            <span>Contact</span> <Icon name="arrow" />
          {/if}
        </button>
      </div>
    </div>

    <!-- Expansion Container for Contact Form -->
    <div
      class="form-expansion-drawer"
      class:expanded={isOpen}
      id="contact-form-drawer"
      aria-hidden={!isOpen}
    >
      <div class="drawer-overflow-shield">
        <!-- Khumbuza-inspired seamless two-column layout -->
        <div class="khumbuza-layout" id="contact-form-card">
          <!-- Left Column: Simple & Fast Form -->
          <div class="khumbuza-left-col">
            <div class="live-status-bar">
              <span class="live-dot" aria-hidden="true"></span>
              <span class="live-text">Bookings open for 2026 · Nationwide</span>
            </div>

            {#if status === 'success'}
              <div class="form-feedback success" role="alert">
                <div class="feedback-badge" aria-hidden="true">
                  <Icon name="check" />
                </div>
                <h3>Enquiry Received</h3>
                <p class="feedback-text">
                  Thank you, <strong>{name}</strong>! Your message has been forwarded directly to
                  <strong>tlhongdigital@gmail.com</strong>. We will review your request and get in touch shortly.
                </p>
                <div class="feedback-actions">
                  <button type="button" class="button button-light" onclick={handleReset}>
                    Send another enquiry
                  </button>
                  <button type="button" class="button-ghost" onclick={handleClose}>
                    Done
                  </button>
                </div>
              </div>
            {:else}
              <form
                class="khumbuza-form"
                action="https://formsubmit.co/tlhongdigital@gmail.com"
                method="POST"
                onsubmit={handleSubmit}
              >
                <input type="hidden" name="_subject" value="New Client Enquiry - Tlhong Digital" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {#if status === 'error'}
                  <div class="form-alert error" role="alert">
                    <span>⚠️ {errorMessage}</span>
                  </div>
                {/if}

                <!-- Field 1: Name -->
                <label class="k-label">
                  <span class="k-label-text">Your name <span class="req">*</span></span>
                  <input
                    name="name"
                    type="text"
                    required
                    autocomplete="name"
                    bind:value={name}
                    disabled={status === 'submitting'}
                  />
                </label>

                <!-- Field 2: Email -->
                <label class="k-label">
                  <span class="k-label-text">Your email <span class="req">*</span></span>
                  <input
                    name="email"
                    type="email"
                    required
                    autocomplete="email"
                    placeholder="name@example.com"
                    bind:value={email}
                    disabled={status === 'submitting'}
                  />
                </label>

                <!-- Field 3: Phone (optional) -->
                <label class="k-label">
                  <span class="k-label-text">Phone or WhatsApp (optional)</span>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+27 82 000 0000"
                    autocomplete="tel"
                    bind:value={phone}
                    disabled={status === 'submitting'}
                  />
                </label>

                <!-- Field 4: Message -->
                <label class="k-label">
                  <span class="k-label-text">Your message or question <span class="req">*</span></span>
                  <textarea
                    name="msg"
                    rows="4"
                    required
                    bind:value={message}
                    disabled={status === 'submitting'}
                  ></textarea>
                </label>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="khumbuza-submit-btn"
                  disabled={status === 'submitting'}
                >
                  {#if status === 'submitting'}
                    <span>Sending enquiry...</span>
                  {:else}
                    <span>Send enquiry</span> <Icon name="arrow" />
                  {/if}
                </button>

                <p class="k-footnote">
                  Enquiries are delivered straight to <strong>tlhongdigital@gmail.com</strong>
                </p>
              </form>
            {/if}
          </div>

          <!-- Right Column: Direct Contact & Process Steps -->
          <div class="khumbuza-right-col">
            <div class="direct-email-block">
              <span class="col-eyebrow">Direct Contact</span>
              <div class="direct-email-display">
                tlhongdigital<span class="at-sign">@</span>gmail.com
              </div>
              <p class="direct-email-sub">
                Prefer direct communication? Send us your brief and we will reply promptly.
              </p>
            </div>

            <div class="location-badge">
              <span>South Africa · Available Nationwide</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contact {
    min-height: 720px;
    color: var(--cream);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 120px 6vw;
    overflow: hidden;
  }

  .contact-image {
    background: url("/images/celebrations/TheFamily/fam.jpg") 50% / cover no-repeat;
    position: absolute;
    inset: 0;
    transform: scale(1.02);
    transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .contact.form-open .contact-image {
    transform: scale(1.05);
  }

  /* Overlay: Starts at 30%, increases to 70% when form is open */
  .contact-overlay {
    position: absolute;
    inset: 0;
    background-color: #051b12;
    opacity: 0.30;
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
  }

  .contact.form-open .contact-overlay {
    opacity: 0.70;
  }

  .contact-inner {
    position: relative;
    z-index: 2;
    max-width: 1040px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* Hero Section: The main visual anchor */
  .contact-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 780px;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .contact.form-open .contact-hero {
    transform: translateY(-8px);
  }

  .contact-hero h2 {
    font-size: clamp(48px, 6.2vw, 88px);
    font-weight: 300;
    line-height: 0.98;
    letter-spacing: -0.04em;
    margin: 0 0 24px 0;
    text-shadow: 0 3px 20px rgba(0, 0, 0, 0.55);
  }

  .contact-hero h2 em {
    color: var(--sage, #9ab195);
    font-family: var(--font-serif);
    font-weight: 500;
    font-style: italic;
  }

  .contact-lead {
    color: rgba(245, 242, 233, 0.88);
    font-size: clamp(14.5px, 1.2vw, 17px);
    line-height: 1.8;
    max-width: 580px;
    margin: 0 0 38px 0;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
    font-weight: 300;
  }

  .contact-cta-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact-trigger-btn {
    padding: 18px 38px;
    font-size: 11.5px;
    letter-spacing: 0.16em;
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    transition: transform 0.25s, background 0.25s, box-shadow 0.25s;
  }

  .contact-trigger-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  }

  .contact-trigger-btn.is-active {
    background: var(--sage, #9ab195);
    color: var(--deep, #0b2118);
  }

  /* Expansion Drawer Animation */
  .form-expansion-drawer {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    width: 100%;
  }

  .form-expansion-drawer.expanded {
    grid-template-rows: 1fr;
    margin-top: 48px;
  }

  .drawer-overflow-shield {
    overflow: hidden;
    opacity: 0;
    transform: translateY(-20px) scale(0.98);
    transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .form-expansion-drawer.expanded .drawer-overflow-shield {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition-delay: 0.1s;
  }

  /* Khumbuza-inspired seamless two-column layout */
  .khumbuza-layout {
    position: relative;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 64px;
    background: transparent;
    border: none;
    border-radius: 0;
    padding: 16px 0 0;
    box-shadow: none;
    text-align: left;
  }

  /* Live status bar */
  .live-status-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
  }

  .live-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--sage, #9ab195);
    box-shadow: 0 0 10px var(--sage, #9ab195);
    display: inline-block;
  }

  .live-text {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--sage, #9ab195);
    font-weight: 600;
  }

  /* Left Column: Clean & simple form */
  .khumbuza-form {
    display: grid;
    gap: 22px;
  }

  .k-label {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .k-label-text {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--sage, #9ab195);
    font-weight: 500;
  }

  .req {
    color: #e5989b;
  }

  /* Khumbuza underline input styling */
  .k-label input,
  .k-label textarea {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(245, 242, 233, 0.22);
    border-radius: 0;
    color: var(--cream, #f5f2e9);
    font-family: var(--font-sans);
    font-size: 14.5px;
    padding: 10px 0;
    box-sizing: border-box;
    transition: border-bottom-color 0.25s, color 0.2s;
  }

  .k-label input::placeholder,
  .k-label textarea::placeholder {
    color: rgba(245, 242, 233, 0.35);
    font-size: 13.5px;
  }

  .k-label input:focus,
  .k-label textarea:focus {
    outline: none;
    border-bottom: 2px solid var(--sage, #9ab195);
  }

  .k-label input:disabled,
  .k-label textarea:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .k-label textarea {
    resize: vertical;
    min-height: 95px;
    line-height: 1.6;
  }

  /* Khumbuza signature submit button */
  .khumbuza-submit-btn {
    font-family: var(--font-serif);
    font-size: clamp(20px, 2.2vw, 26px);
    font-weight: 400;
    font-style: italic;
    color: var(--cream);
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--sage, #9ab195);
    padding: 8px 0;
    margin-top: 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 16px;
    transition: all 0.25s ease;
    width: fit-content;
  }

  .khumbuza-submit-btn :global(svg) {
    width: 18px;
    height: 18px;
    transition: transform 0.25s ease;
  }

  .khumbuza-submit-btn:hover:not(:disabled) {
    color: var(--deep, #0b2118);
    background: var(--sage, #9ab195);
    padding: 8px 18px;
    border-radius: 2px;
  }

  .khumbuza-submit-btn:hover:not(:disabled) :global(svg) {
    transform: translateX(4px);
  }

  .khumbuza-submit-btn:disabled {
    opacity: 0.6;
    cursor: wait;
  }

  .k-footnote {
    font-size: 11px;
    color: rgba(245, 242, 233, 0.5);
    margin: 8px 0 0 0;
  }

  .k-footnote strong {
    color: rgba(245, 242, 233, 0.85);
  }

  .form-alert.error {
    background: rgba(180, 40, 40, 0.2);
    border: 1px solid rgba(220, 80, 80, 0.4);
    color: #ffb4b4;
    padding: 12px 16px;
    border-radius: 3px;
    font-size: 13px;
    margin-bottom: 12px;
  }

  /* Right Column: Direct info & 3-step process */
  .khumbuza-right-col {
    display: flex;
    flex-direction: column;
    gap: 36px;
    padding-left: 20px;
  }

  .col-eyebrow {
    font-size: 10.5px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--sage, #9ab195);
    font-weight: 600;
    margin-bottom: 12px;
    display: block;
  }

  .direct-email-display {
    font-family: var(--font-serif);
    font-size: clamp(20px, 2.2vw, 27px);
    font-style: italic;
    color: var(--cream, #f5f2e9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 8px;
    display: inline-block;
  }

  .at-sign {
    color: var(--sage, #9ab195);
  }

  .direct-email-sub {
    font-size: 13px;
    color: rgba(245, 242, 233, 0.65);
    margin-top: 10px;
    line-height: 1.6;
  }

  .location-badge {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(245, 242, 233, 0.45);
    padding-top: 16px;
  }

  /* Feedback screen */
  .form-feedback.success {
    text-align: center;
    padding: 24px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .feedback-badge {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(154, 177, 149, 0.18);
    color: var(--sage, #9ab195);
    border: 1px solid rgba(154, 177, 149, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
  }

  .feedback-badge :global(svg) {
    width: 24px;
    height: 24px;
  }

  .form-feedback h3 {
    font-family: var(--font-serif);
    font-size: 26px;
    font-style: italic;
    color: #fff;
    margin: 0 0 10px 0;
  }

  .feedback-text {
    font-size: 14px;
    line-height: 1.7;
    color: rgba(245, 242, 233, 0.85);
    max-width: 420px;
    margin: 0 auto 24px;
  }

  .feedback-actions {
    display: flex;
    gap: 14px;
    align-items: center;
  }

  .button-ghost {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: var(--cream, #f5f2e9);
    padding: 15px 22px;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    border-radius: 2px;
    transition: border-color 0.2s, background 0.2s;
  }

  .button-ghost:hover {
    border-color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 860px) {
    .contact {
      padding: 90px 5vw;
    }

    .khumbuza-layout {
      grid-template-columns: 1fr;
      gap: 40px;
      padding: 10px 0;
    }

    .khumbuza-right-col {
      padding-left: 0;
      padding-top: 24px;
    }

    .contact-hero h2 {
      font-size: 40px;
    }
  }
</style>
