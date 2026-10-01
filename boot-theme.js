// Runs before the application/style chunks, without an external dependency.
(() => {
  let theme = 'light';
  try { const saved = localStorage.getItem('nomerok-theme'); if (saved === 'dark' || saved === 'game') theme = saved; } catch {}
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'game' ? '#159fe0' : theme === 'dark' ? '#0b1018' : '#eef0f4');
})();
