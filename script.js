// ===== BEST KOTA – Website Scripts =====

document.addEventListener('DOMContentLoaded', () => {
  // ----- Open / Closed Status (SAST / Africa/Johannesburg) -----
  function updateOpenStatus() {
    const banner = document.getElementById('status-banner');
    const statusText = document.getElementById('status-text');
    if (!banner || !statusText) return;

    // Get current time in South Africa
    const now = new Date();
    const options = { timeZone: 'Africa/Johannesburg', hour: 'numeric', minute: 'numeric', hour12: false };
    const timeStr = now.toLocaleTimeString('en-GB', options); // HH:MM
    const [hours, minutes] = timeStr.split(':').map(Number);
    const currentMinutes = hours * 60 + minutes;

    const openTime = 7 * 60 + 30;  // 07:30
    const closeTime = 18 * 60;     // 18:00

    if (currentMinutes >= openTime && currentMinutes < closeTime) {
      banner.classList.remove('closed');
      statusText.textContent = '🟢 WE ARE OPEN NOW! Order your favourite Kota today!';
    } else {
      banner.classList.add('closed');
      statusText.textContent = '🔴 WE ARE CURRENTLY CLOSED — Hours: 07:30 – 18:00. See you tomorrow!';
    }
  }

  updateOpenStatus();
  // Refresh every minute
  setInterval(updateOpenStatus, 60000);

  // ----- Mobile Menu -----
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('open');
    });

    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  // ----- Header scroll effect -----
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ----- Contact Form → WhatsApp -----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      let text = `Hello BEST KOTA 👋\n\n`;
      text += `Name: ${name}\n`;
      text += `Phone: ${phone}\n`;
      if (email) text += `Email: ${email}\n`;
      text += `\nMessage:\n${message}`;

      const url = `https://wa.me/27721471679?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }

  // ----- Smooth active nav highlight (optional enhancement) -----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = 'var(--gold)';
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
});
