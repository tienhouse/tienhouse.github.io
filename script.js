// ===== PRODUCT DATA (from moji.vn reference) =====
const products = [
  { id: 1, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "89.000₫", oldPrice: "120.000₫", sale: true, img: "product_image.jpg" },
  { id: 2, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "89.000₫", oldPrice: "110.000₫", sale: true, img: "product_image.jpg" },
  { id: 3, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "79.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 4, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "79.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 5, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "79.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 6, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "89.000₫", oldPrice: "115.000₫", sale: true, img: "product_image.jpg" },
  { id: 7, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "79.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 8, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "79.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 9, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "85.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 10, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "89.000₫", oldPrice: "120.000₫", sale: true, img: "product_image.jpg" },
  { id: 11, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "95.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 12, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "69.000₫", oldPrice: "99.000₫", sale: true, img: "product_image.jpg" },
  { id: 13, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "95.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 14, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "95.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 15, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "95.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 16, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "89.000₫", oldPrice: "110.000₫", sale: true, img: "product_image.jpg" },
  { id: 17, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "89.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 18, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "89.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 19, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "85.000₫", oldPrice: "110.000₫", sale: true, img: "product_image.jpg" },
  { id: 20, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "95.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 21, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "95.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 22, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "89.000₫", oldPrice: "115.000₫", sale: true, img: "product_image.jpg" },
  { id: 23, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "79.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
  { id: 24, name: "Ốp IPhone Vương Lâm", code: "T.001", price: "95.000₫", oldPrice: "", sale: false, img: "product_image.jpg" },
];

// ===== RENDER PRODUCTS =====
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = products.map(p => `
    <div class="product-card" onclick="openModal(${p.id})" id="product-${p.id}">
      <span class="tag-new">MỚI ✨</span>
      ${p.sale ? '<span class="tag-sale">SALE 🔥</span>' : ''}
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="overlay"></div>
      </div>
      <div class="product-info">
        <h3>${p.code} ${p.name}</h3>
        <div class="product-price">
          <span class="price-current">${p.price}</span>
          ${p.oldPrice ? `<span class="price-old">${p.oldPrice}</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn-cart" onclick="event.stopPropagation();openModal(${p.id})">🛒 Đặt Hàng</button>
          <a href="https://zalo.me/0988882700" target="_blank" class="btn-zalo" onclick="event.stopPropagation()">💬 Zalo</a>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== MODAL =====
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modalName').textContent = `${p.code} ${p.name}`;
  document.getElementById('modalPrice').textContent = p.price;
  const imgContainer = document.getElementById('modalImg');
  imgContainer.innerHTML = `<img src="${p.img}" alt="${p.name}">`;
  document.getElementById('modalOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ===== FLOATING HEARTS =====
function createHearts() {
  const container = document.getElementById('floatingHearts');
  const hearts = ['💖', '💕', '💗', '🌸', '✨', '🎀', '💝', '🌷', '💮', '🦋'];
  for (let i = 0; i < 15; i++) {
    const span = document.createElement('span');
    span.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.animationDuration = (6 + Math.random() * 8) + 's';
    span.style.animationDelay = Math.random() * 10 + 's';
    span.style.fontSize = (14 + Math.random() * 18) + 'px';
    container.appendChild(span);
  }
}

// ===== SCROLL TO TOP =====
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('show', window.scrollY > 400);
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SMOOTH SCROLL FOR NAV =====
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== INIT =====
renderProducts();
createHearts();
