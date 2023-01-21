const btnDarkMode = document.querySelector('.dark-mode-btn');

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  document.body.classList.add('dark');
  btnDarkMode.classList.add('dark-mode-btn--active');
}

if (localStorage.getItem('darkMode') === 'dark') {
  document.body.classList.add('dark');
  btnDarkMode.classList.add('dark-mode-btn--active');
} else if (localStorage.getItem('darkMode') === 'light') {
  document.body.classList.remove('dark');
  btnDarkMode.classList.remove('dark-mode-btn--active');
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', event => {
    const newColorScheme = event.matches ? 'dark' : 'light';
    if (newColorScheme === 'dark') {
      document.body.classList.add('dark');
      btnDarkMode.classList.add('dark-mode-btn--active');
      localStorage.setItem('darkMode', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'light');
      btnDarkMode.classList.remove('dark-mode-btn--active');
    }
  });

btnDarkMode.addEventListener('click', () => {
  btnDarkMode.classList.toggle('dark-mode-btn--active');

  const isDark = document.body.classList.toggle('dark');

  if (isDark) {
    localStorage.setItem('darkMode', 'dark');
  } else {
    localStorage.setItem('darkMode', 'light');
  }
});
