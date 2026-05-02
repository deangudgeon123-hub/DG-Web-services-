(function () {
  function getCurrentPath() {
    const page = window.location.pathname.split('/').pop();
    return page || 'index.html';
  }

  function navLinks() {
    return [
      { href: 'index.html', label: 'Home' },
      { href: 'shop.html', label: 'Shop' },
      { href: 'about.html', label: 'About' },
      { href: 'contact.html', label: 'Contact' },
      { href: 'cart.html', label: 'Basket' }
    ];
  }

  function renderHeader() {
    const activePath = getCurrentPath();
    const links = navLinks()
      .map(
        (link) =>
          `<a href="${link.href}" class="nav-link ${activePath === link.href ? 'active' : ''}">${link.label}</a>`
      )
      .join('');

    return `
      <header class="site-header">
        <div class="container header-inner">
          <a href="index.html" class="brand-mark" aria-label="Stone & Anvil home">
            <img src="Anvil logo.jpg" alt="Stone & Anvil logo" class="brand-logo" loading="eager" decoding="async" />
            <span class="brand-tagline">Recycled Silver • Handcrafted Jewellery</span>
          </a>
          <nav class="site-nav" aria-label="Primary navigation">${links}</nav>
        </div>
      </header>
    `;
  }

  function renderFooter() {
    return `
      <footer class="site-footer">
        <div class="container footer-inner">
          <p>© ${new Date().getFullYear()} Stone & Anvil. Handcrafted in small batches.</p>
          <p class="muted">Made with care, intention, and respect for the materials.</p>
        </div>
      </footer>
    `;
  }

  function formatPrice(value) {
    return `£${value.toFixed(2)}`;
  }

  function productCard(product) {
    return `
      <article class="product-card">
        <img src="${product.images[0]}" alt="${product.name}" class="product-image" loading="lazy" />
        <div class="product-body">
          <p class="product-category">${product.category}</p>
          <h3>${product.name}</h3>
          <p class="product-price">${formatPrice(product.price)}</p>
          <p class="product-description">${product.shortDescription}</p>
          <a class="btn btn-secondary" href="product.html?id=${product.id}">View Piece</a>
        </div>
      </article>
    `;
  }

  window.StoneAnvilUI = {
    renderHeader,
    renderFooter,
    productCard,
    formatPrice
  };
})();
