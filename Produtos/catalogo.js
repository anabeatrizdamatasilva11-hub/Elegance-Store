const PRODUCTS = [
    { id:1, name:'Bolsa Milão', cat:'bolsa', price:320, badge:'new', isNew:true, limited:false, sale:false,
      colors:['preto','caramelo'], desc:'Bolsa estruturada em couro sintético italiano com alças ajustáveis e interior forrado. Fechamento por fivela dourada. Perfeita para o dia a dia com personalidade.',
      details:['Couro sintético premium','Alças reguláveis','Interior forrado em cetim','Medidas: 30 × 22 × 10 cm'] },
    { id:2, name:'Clutch Aurora', cat:'clutch', price:195, badge:'limited', isNew:false, limited:true, sale:false,
      colors:['nude','branco'], desc:'Clutch de edição limitada em couro natural texturizado. Corrente dourada removível. Uma peça de destaque para eventos especiais.',
      details:['Couro natural texturizado','Corrente dourada removível','Fecho magnético discreto','Medidas: 24 × 14 cm'] },
    { id:3, name:'Carteira Paris', cat:'carteira', price:158, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto','vinho','caramelo'], desc:'Carteira slim com 8 porta-cartões, compartimento para notas e zíper para moedas. Design minimalista que cabe em qualquer bolsa.',
      details:['Couro sintético macio','8 porta-cartões','Zíper para moedas','Medidas: 19 × 10 cm'] },
    { id:4, name:'Bolsa Siena', cat:'bolsa', price:285, badge:'sale', isNew:false, limited:false, sale:true, oldPrice:380,
      colors:['caramelo','nude'], desc:'Bolsa hobo em couro camurça com fechamento de ímã e alça de corrente. Estilo relaxado com acabamento de luxo.',
      details:['Camurça genuína','Alça de corrente dourada','Fecho magnético','Medidas: 35 × 25 × 12 cm'] },
    { id:5, name:'Minibag Capri', cat:'clutch', price:170, badge:'new', isNew:true, limited:false, sale:false,
      colors:['branco','verde'], desc:'Minibag transversal em couro granulado com alça de corda trançada. Compacta mas com espaço para o essencial.',
      details:['Couro granulado','Alça de corda trançada','Zíper principal + bolso frontal','Medidas: 18 × 14 cm'] },
    { id:6, name:'Bolsa Veneza', cat:'bolsa', price:360, badge:'limited', isNew:false, limited:true, sale:false,
      colors:['preto','vinho'], desc:'Bolsa tote estruturada em couro full-grain com costura à vista. Alças duplas de couro e base reforçada. Peça atemporal.',
      details:['Couro full-grain','Costura à vista','Base reforçada','Medidas: 38 × 30 × 14 cm'] },
    { id:7, name:'Carteira Monaco', cat:'carteira', price:189, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto','caramelo','branco'], desc:'Carteira envelope em couro liso com interior organizado. Bolso externo para acesso rápido. Elegância sem exageros.',
      details:['Couro liso premium','Bolso externo rápido','6 porta-cartões + nota','Medidas: 20 × 10 cm'] },
    { id:8, name:'Clutch Notte', cat:'clutch', price:210, badge:'limited', isNew:false, limited:true, sale:false,
      colors:['preto','vinho'], desc:'Clutch rígida com bordado artesanal em fio metálico dourado. Exclusiva de edição limitada. Para noites que merecem destaque.',
      details:['Bordado artesanal','Fio metálico dourado','Interior em veludo','Medidas: 22 × 13 cm'] },
    { id:9, name:'Bolsa Florença', cat:'bolsa', price:298, badge:'sale', isNew:false, limited:false, sale:true, oldPrice:395,
      colors:['nude','verde'], desc:'Bolsa bucket em couro suave com cordão regulável. Estilo descontraído com qualidade premium. Versatilidade para todos os dias.',
      details:['Couro suave tratado','Cordão regulável','Interior com divisória','Medidas: 28 × 28 × 14 cm'] },
    { id:10, name:'Lenço de seda', cat:'acessorio', price:152, badge:'new', isNew:true, limited:false, sale:false,
      colors:['nude','verde','vinho'], desc:'Lenço 100% seda natural com estampa exclusiva desenhada pela Elegance Store. Use no pescoço, na bolsa ou no cabelo.',
      details:['100% seda natural','Estampa exclusiva','Borda de rolinho artesanal','Medidas: 85 × 85 cm'] },
    { id:11, name:'Cinto Milanese', cat:'acessorio', price:178, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto','caramelo'], desc:'Cinto em couro legítimo com fivela dourada ajustável. Corte reto clássico que funciona com looks casuais e formais.',
      details:['Couro legítimo','Fivela dourada','5 furos de ajuste','Disponível nos tamanhos P ao GG'] },
    { id:12, name:'Carteira Côte d\'Azur', cat:'carteira', price:215, badge:'sale', isNew:false, limited:false, sale:true, oldPrice:290,
      colors:['branco','nude','verde'], desc:'Carteira de bolso com acabamento verniz brilhante e interior colorido. Peça que chama atenção sem precisar de muito espaço.',
      details:['Acabamento verniz','Interior colorido contrastante','8 porta-cartões + 2 secretas','Medidas: 20 × 10 cm'] },
  ];
 
  const COLOR_HEX = { preto:'#1a1a18', caramelo:'#c0894a', nude:'#d4a98a', branco:'#f0ede8', vinho:'#7a2535', verde:'#4a6741' };
 
  let state = { cat:'all', search:'', maxPrice:400, color:'all', avail:'all', sort:'default', view:'grid', cart:0 };
  let currentProduct = null;
 
  function filtered() {
    return PRODUCTS.filter(p => {
      if (state.cat !== 'all' && p.cat !== state.cat) return false;
      if (state.search && !p.name.toLowerCase().includes(state.search.toLowerCase()) && !p.cat.includes(state.search.toLowerCase())) return false;
      if (p.price > state.maxPrice) return false;
      if (state.color !== 'all' && !p.colors.includes(state.color)) return false;
      if (state.avail === 'limited' && !p.limited) return false;
      if (state.avail === 'sale' && !p.sale) return false;
      return true;
    }).sort((a,b) => {
      if (state.sort === 'price-asc') return a.price - b.price;
      if (state.sort === 'price-desc') return b.price - a.price;
      if (state.sort === 'name') return a.name.localeCompare(b.name);
      if (state.sort === 'new') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0;
    });
  }
 
  function fmt(n) { return 'R$\u00a0' + n.toLocaleString('pt-BR'); }
 
  function renderGrid() {
    const grid = document.getElementById('productGrid');
    const items = filtered();
    document.getElementById('countLabel').textContent = items.length + ' peça' + (items.length !== 1 ? 's' : '');
    grid.innerHTML = '';
    grid.className = 'product-grid' + (state.view === 'list' ? ' list-view' : '');
 
    if (items.length === 0) {
      grid.innerHTML = '<div class="empty-state"><i class="ti ti-zoom-cancel"></i><p>Nenhuma peça encontrada com esses filtros.</p></div>';
      return;
    }
 
    items.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.style.animationDelay = (i * 40) + 'ms';
      const badgeHtml = p.badge ? `<span class="product-card__badge ${p.badge}">${p.badge === 'new' ? 'Novo' : p.badge === 'limited' ? 'Limitado' : 'Oferta'}</span>` : '';
      const oldPriceHtml = p.oldPrice ? `<span class="product-card__price-old">${fmt(p.oldPrice)}</span>` : '';
      const dotsHtml = p.colors.map(c => `<div class="product-card__color-dot" style="background:${COLOR_HEX[c]||'#ccc'}" title="${c}"></div>`).join('');
      card.innerHTML = `
        <div class="product-card__img">
          ${badgeHtml}
          <button class="product-card__fav" data-id="${p.id}" aria-label="Favoritar"><i class="ti ti-heart"></i></button>
          <i class="ti ti-shopping-bag" aria-hidden="true"></i>
          <p>Foto do produto</p>
        </div>
        <div class="product-card__body">
          <p class="product-card__cat">${p.cat.charAt(0).toUpperCase()+p.cat.slice(1)}</p>
          <p class="product-card__name">${p.name}</p>
          <div class="product-card__price">${oldPriceHtml}${fmt(p.price)}</div>
          <div class="product-card__colors">${dotsHtml}</div>
        </div>`;
      card.addEventListener('click', (e) => {
        if (e.target.closest('.product-card__fav')) {
          e.stopPropagation();
          const btn = e.target.closest('.product-card__fav');
          btn.classList.toggle('liked');
          showToast(btn.classList.contains('liked') ? 'Adicionado à lista de desejos' : 'Removido da lista de desejos');
          return;
        }
        openModal(p);
      });
      grid.appendChild(card);
    });
  }
 
  function openModal(p) {
    currentProduct = p;
    document.getElementById('mCat').textContent = p.cat.charAt(0).toUpperCase() + p.cat.slice(1);
    document.getElementById('mName').textContent = p.name;
    const oldPriceHtml = p.oldPrice ? `<span class="modal__price-old">${fmt(p.oldPrice)}</span>` : '';
    document.getElementById('mPrice').innerHTML = oldPriceHtml + fmt(p.price);
    document.getElementById('mDesc').textContent = p.desc;
 
    const colorsEl = document.getElementById('mColors');
    colorsEl.innerHTML = p.colors.map((c,i) =>
      `<div class="modal__color-opt${i===0?' active':''} ${c==='branco'?'outline-opt':''}" data-color="${c}" style="background:${COLOR_HEX[c]||'#ccc'}" title="${c}"></div>`
    ).join('');
    colorsEl.querySelectorAll('.modal__color-opt').forEach(el => {
      el.addEventListener('click', () => {
        colorsEl.querySelectorAll('.modal__color-opt').forEach(e => e.classList.remove('active'));
        el.classList.add('active');
      });
    });
 
    const detailsEl = document.getElementById('mDetails');
    detailsEl.innerHTML = p.details.map(d => `<li><i class="ti ti-check" aria-hidden="true"></i>${d}</li>`).join('');
 
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
 
  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
    currentProduct = null;
  }
 
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2500);
  }
 
  // Category pills (toolbar)
  document.getElementById('catPills').addEventListener('click', e => {
    const pill = e.target.closest('.pill');
    if (!pill) return;
    document.querySelectorAll('#catPills .pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.cat = pill.dataset.cat;
    syncSidebar();
    renderGrid();
  });
 
  // Sidebar category
  document.getElementById('sidebarCats').addEventListener('click', e => {
    const opt = e.target.closest('.sidebar-opt');
    if (!opt) return;
    document.querySelectorAll('#sidebarCats .sidebar-opt').forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
    state.cat = opt.dataset.cat;
    document.querySelectorAll('#catPills .pill').forEach(p => {
      p.classList.toggle('active', p.dataset.cat === state.cat);
    });
    renderGrid();
  });
 
  function syncSidebar() {
    document.querySelectorAll('#sidebarCats .sidebar-opt').forEach(o => {
      o.classList.toggle('active', o.dataset.cat === state.cat);
    });
  }
 
  // Availability filter
  document.querySelectorAll('[data-avail]').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('[data-avail]').forEach(e => e.classList.remove('active'));
      el.classList.add('active');
      state.avail = el.dataset.avail;
      renderGrid();
    });
  });
 
  // Price range
  const priceRange = document.getElementById('priceRange');
  priceRange.addEventListener('input', () => {
    state.maxPrice = parseInt(priceRange.value);
    document.getElementById('priceLabel').textContent = 'Até R$ ' + state.maxPrice;
    renderGrid();
  });
 
  // Color swatches
  document.getElementById('colorSwatches').addEventListener('click', e => {
    const sw = e.target.closest('.swatch');
    if (!sw) return;
    document.querySelectorAll('#colorSwatches .swatch').forEach(s => s.classList.remove('active'));
    sw.classList.add('active');
    state.color = sw.dataset.color;
    renderGrid();
  });
 
  // Search
  document.getElementById('searchInput').addEventListener('input', e => {
    state.search = e.target.value;
    renderGrid();
  });
 
  // Sort
  document.getElementById('sortSelect').addEventListener('change', e => {
    state.sort = e.target.value;
    renderGrid();
  });
 
  // View toggle
  document.getElementById('gridBtn').addEventListener('click', () => {
    state.view = 'grid';
    document.getElementById('gridBtn').classList.add('active');
    document.getElementById('listBtn').classList.remove('active');
    renderGrid();
  });
  document.getElementById('listBtn').addEventListener('click', () => {
    state.view = 'list';
    document.getElementById('listBtn').classList.add('active');
    document.getElementById('gridBtn').classList.remove('active');
    renderGrid();
  });
 
  // Clear filters
  document.getElementById('clearBtn').addEventListener('click', () => {
    state = { ...state, cat:'all', search:'', maxPrice:400, color:'all', avail:'all', sort:'default' };
    document.getElementById('searchInput').value = '';
    document.getElementById('priceRange').value = 400;
    document.getElementById('priceLabel').textContent = 'Até R$ 400';
    document.querySelectorAll('#catPills .pill').forEach(p => p.classList.toggle('active', p.dataset.cat === 'all'));
    document.querySelectorAll('#sidebarCats .sidebar-opt').forEach(o => o.classList.toggle('active', o.dataset.cat === 'all'));
    document.querySelectorAll('#colorSwatches .swatch').forEach((s,i) => s.classList.toggle('active', i===0));
    document.querySelectorAll('[data-avail]').forEach((e,i) => e.classList.toggle('active', i===0));
    document.getElementById('sortSelect').value = 'default';
    renderGrid();
  });
 
  // Modal
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
 
  document.getElementById('mAddCart').addEventListener('click', () => {
    if (!currentProduct) return;
    state.cart++;
    document.getElementById('cartCount').textContent = state.cart;
    showToast(currentProduct.name + ' adicionado ao carrinho');
    closeModal();
  });
  document.getElementById('mWishlist').addEventListener('click', () => {
    showToast('Adicionado à lista de desejos');
  });
  document.getElementById('cartBtn').addEventListener('click', () => {
    if (state.cart === 0) { showToast('Seu carrinho está vazio'); return; }
    showToast(state.cart + ' item(s) no carrinho');
  });
 
  // Mobile ham
  document.getElementById('hamBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('mob-open');
  });
 
  renderGrid();