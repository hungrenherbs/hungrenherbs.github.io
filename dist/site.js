const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
document.documentElement.classList.add('js');
menu?.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    menu.focus();
  }
});
document.querySelectorAll('.product-filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.product-filter').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const value = button.dataset.filter;
    let visible = 0;
    document.querySelectorAll('[data-category]').forEach(item => {
      item.hidden = value !== 'all' && item.dataset.category !== value;
      if (!item.hidden) visible++;
    });
    const status = document.querySelector('#filter-status');
    if (status) status.textContent = document.documentElement.lang === 'zh-Hans' ? `显示 ${visible} 个类别` : `Showing ${visible} ${visible === 1 ? 'category' : 'categories'}`;
  });
});
