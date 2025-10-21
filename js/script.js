const btn = document.getElementById('toggle-theme');
const body = document.body;

// Verifica se o tema escuro estava salvo
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  btn.textContent = '☀️ Modo claro';
}

btn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    btn.textContent = '☀️ Modo claro';
    localStorage.setItem('theme', 'dark');
  } else {
    btn.textContent = '🌙 Modo escuro';
    localStorage.setItem('theme', 'light');
  }
});
