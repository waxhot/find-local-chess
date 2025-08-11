document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const applyTheme = (theme) => {
    // Persist and apply only light or dark
    const t = theme === 'light' ? 'light' : 'dark';
    localStorage.setItem('theme', t);
    if (t === 'light') {
      document.documentElement.classList.add('wa-light');
      document.documentElement.classList.remove('wa-dark');
    } else {
      document.documentElement.classList.add('wa-dark');
      document.documentElement.classList.remove('wa-light');
    }
  };

  // Web Awesome wa-select emits a standard 'change' event when value changes
  themeToggle.addEventListener('change', (event) => {
    const theme = event.target.value;
    applyTheme(theme);
  });

  const savedTheme = localStorage.getItem('theme') || 'dark';
  themeToggle.value = savedTheme;
  applyTheme(savedTheme);
});
