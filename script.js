document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const header = document.getElementById('site-header');
  const navToggle = document.getElementById('navToggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => header.classList.toggle('open'));
  }

  // Pixel terrain skyline (procedural, no external assets)
  const terrain = document.getElementById('terrain');
  if (terrain) {
    const cols = 60;
    for (let i = 0; i < cols; i++) {
      const bar = document.createElement('span');
      const h = 20 + Math.round(Math.random() * 80);
      bar.style.height = h + '%';
      terrain.appendChild(bar);
    }
  }

  // Copy server IP
  const copyBtn = document.getElementById('copyIp');
  const ipEl = document.getElementById('ipAddress');
  if (copyBtn && ipEl) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(ipEl.textContent.trim());
        const original = copyBtn.textContent;
        copyBtn.textContent = 'Скопировано!';
        setTimeout(() => (copyBtn.textContent = original), 1500);
      } catch (e) {
        console.error('Clipboard error', e);
      }
    });
  }

  // Online counter placeholder.
  // Replace this block with a real request to your server-status API
  // (e.g. a self-hosted endpoint that pings mc.reallyworld.ru via the
  // Minecraft server-list-ping protocol) to show live numbers.
  const onlineNum = document.getElementById('onlineNum');
  if (onlineNum) {
    onlineNum.textContent = '— / 9000';
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));
});
