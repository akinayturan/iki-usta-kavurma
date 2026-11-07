const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.menu-card');
const status = document.getElementById('menu-status');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.category;
    filters.forEach((button) => {
      const active = button === filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    let count = 0;
    cards.forEach((card) => {
      card.hidden = category !== 'all' && card.dataset.type !== category;
      if (!card.hidden) count++;
    });
    status.textContent = `${count} ürün gösteriliyor.`;
  });
});

document.querySelectorAll('.portion-picker').forEach((picker) => {
  picker.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-price]');
    if (!button) return;
    picker.querySelectorAll('button').forEach((option) => {
      const selected = option === button;
      option.classList.toggle('selected', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
    const card = picker.closest('.menu-card');
    card.querySelector('.price').replaceChildren(document.createTextNode(`${button.dataset.price} `), Object.assign(document.createElement('small'), { textContent: '₺' }));
    card.querySelector('.portion-label').textContent = `${button.dataset.grams} g pişmiş kavurma`;
    status.textContent = `${card.querySelector('h3').textContent}: ${button.dataset.grams} gram, ${button.dataset.price} TL.`;
  });
});

document.getElementById('print-menu').addEventListener('click', () => window.print());
