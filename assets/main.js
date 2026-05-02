(function () {
  const mountHeader = document.querySelector('[data-header]');
  const mountFooter = document.querySelector('[data-footer]');
  if (mountHeader) mountHeader.innerHTML = window.StoneAnvilUI.renderHeader();
  if (mountFooter) mountFooter.innerHTML = window.StoneAnvilUI.renderFooter();

  const products = window.STONE_ANVIL_PRODUCTS || [];

  const featuredGrid = document.querySelector('[data-featured-products]');
  if (featuredGrid) {
    featuredGrid.innerHTML = products.slice(0, 3).map(window.StoneAnvilUI.productCard).join('');
  }

  const shopGrid = document.querySelector('[data-shop-grid]');
  const categoryFilter = document.querySelector('[data-category-filter]');
  if (shopGrid) {
    const categories = ['All', ...new Set(products.map((p) => p.category))];
    if (categoryFilter) {
      categoryFilter.innerHTML = categories
        .map((category) => `<button class="filter-chip" data-filter="${category}">${category}</button>`)
        .join('');

      categoryFilter.addEventListener('click', (event) => {
        const button = event.target.closest('[data-filter]');
        if (!button) return;
        const selected = button.getAttribute('data-filter');
        document.querySelectorAll('.filter-chip').forEach((chip) => chip.classList.remove('active'));
        button.classList.add('active');
        renderShop(selected);
      });
      categoryFilter.querySelector('.filter-chip')?.classList.add('active');
    }

    function renderShop(category) {
      const filtered = category && category !== 'All' ? products.filter((p) => p.category === category) : products;
      shopGrid.innerHTML = filtered.map(window.StoneAnvilUI.productCard).join('');
    }

    renderShop('All');
  }

  const productPage = document.querySelector('[data-product-page]');
  if (productPage) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = products.find((p) => p.id === productId) || products[0];

    productPage.innerHTML = `
      <div class="product-layout">
        <div class="gallery-main">
          <img src="${product.images[0]}" alt="${product.name}" id="main-product-image" />
          <div class="gallery-thumbs">
            ${product.images
              .map(
                (image, index) =>
                  `<button class="thumb ${index === 0 ? 'active' : ''}" data-image="${image}"><img src="${image}" alt="${product.name} view ${
                    index + 1
                  }" /></button>`
              )
              .join('')}
          </div>
        </div>
        <div>
          <p class="product-category">${product.category}</p>
          <h1>${product.name}</h1>
          <p class="product-price">${window.StoneAnvilUI.formatPrice(product.price)}</p>
          <p>${product.description}</p>
          <p><strong>Materials:</strong> ${product.material}</p>
          <p class="note">Each piece is handcrafted in small batches from recycled silver and may vary slightly.</p>
          <button class="btn btn-primary">Add to Basket</button>
          <p class="integration-note">Ecommerce integration point: connect this action to your basket and payment provider.</p>
        </div>
      </div>
    `;

    productPage.addEventListener('click', (event) => {
      const thumb = event.target.closest('[data-image]');
      if (!thumb) return;
      const image = thumb.getAttribute('data-image');
      const main = productPage.querySelector('#main-product-image');
      if (main) main.src = image;
      productPage.querySelectorAll('.thumb').forEach((t) => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  }
})();
