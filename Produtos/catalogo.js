const PRODUCTS = [
    { id:1, name:'Bolsa Milão', cat:'bolsa', price:320, badge:'new', isNew:true, limited:false, sale:false,
      colors:['preto','caramelo'], images:{preto:'../assets/2.jpeg',caramelo:'../assets/2.jpeg'}, desc:'Bolsa estruturada em couro sintético italiano com alças ajustáveis e interior forrado. Fechamento por fivela dourada. Perfeita para o dia a dia com personalidade.',
      details:['Couro sintético premium','Alças reguláveis','Interior forrado em cetim','Medidas: 30 × 22 × 10 cm'] },
    { id:2, name:'Clutch Aurora', cat:'clutch', price:195, badge:'limited', isNew:false, limited:true, sale:false,
      colors:['nude','branco'], images:{nude:'../assets/3.jpeg',branco:'../assets/3.jpeg'}, desc:'Clutch de edição limitada em couro natural texturizado. Corrente dourada removível. Uma peça de destaque para eventos especiais.',
      details:['Couro natural texturizado','Corrente dourada removível','Fecho magnético discreto','Medidas: 24 × 14 cm'] },
    { id:3, name:'Carteira Paris', cat:'carteira', price:158, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto','vinho','caramelo'], images:{preto:'../assets/4.jpeg',vinho:'../assets/4.jpeg',caramelo:'../assets/4.jpeg'}, desc:'Carteira slim com 8 porta-cartões, compartimento para notas e zíper para moedas. Design minimalista que cabe em qualquer bolsa.',
      details:['Couro sintético macio','8 porta-cartões','Zíper para moedas','Medidas: 19 × 10 cm'] },
    { id:4, name:'Bolsa Siena', cat:'bolsa', price:285, badge:'sale', isNew:false, limited:false, sale:true, oldPrice:380,
      colors:['caramelo','nude'], images:{caramelo:'../assets/5.png',nude:'../assets/5.png'}, desc:'Bolsa hobo em couro camurça com fechamento de ímã e alça de corrente. Estilo relaxado com acabamento de luxo.',
      details:['Camurça genuína','Alça de corrente dourada','Fecho magnético','Medidas: 35 × 25 × 12 cm'] },
    { id:5, name:'Minibag Capri', cat:'clutch', price:170, badge:'new', isNew:true, limited:false, sale:false,
      colors:['branco','verde'], images:{branco:'../assets/6.jpeg',verde:'../assets/6.jpeg'}, desc:'Minibag transversal em couro granulado com alça de corda trançada. Compacta mas com espaço para o essencial.',
      details:['Couro granulado','Alça de corda trançada','Zíper principal + bolso frontal','Medidas: 18 × 14 cm'] },
    { id:6, name:'Bolsa Veneza', cat:'bolsa', price:360, badge:'limited', isNew:false, limited:true, sale:false,
      colors:['preto','vinho'], images:{preto:'../assets/7.jpeg',vinho:'../assets/7.jpeg'}, desc:'Bolsa tote estruturada em couro full-grain com costura à vista. Alças duplas de couro e base reforçada. Peça atemporal.',
      details:['Couro full-grain','Costura à vista','Base reforçada','Medidas: 38 × 30 × 14 cm'] },
    { id:7, name:'Carteira Monaco', cat:'carteira', price:189, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto','caramelo','branco'], images:{preto:'../assets/8.jpeg',caramelo:'../assets/8.jpeg',branco:'../assets/8.jpeg'}, desc:'Carteira envelope em couro liso com interior organizado. Bolso externo para acesso rápido. Elegância sem exageros.',
      details:['Couro liso premium','Bolso externo rápido','6 porta-cartões + nota','Medidas: 20 × 10 cm'] },
    { id:8, name:'Clutch Notte', cat:'clutch', price:210, badge:'limited', isNew:false, limited:true, sale:false,
      colors:['preto','vinho'], images:{preto:'../assets/9.jpeg',vinho:'../assets/9.jpeg'}, desc:'Clutch rígida com bordado artesanal em fio metálico dourado. Exclusiva de edição limitada. Para noites que merecem destaque.',
      details:['Bordado artesanal','Fio metálico dourado','Interior em veludo','Medidas: 22 × 13 cm'] },
    { id:9, name:'Bolsa Florença', cat:'bolsa', price:298, badge:'sale', isNew:false, limited:false, sale:true, oldPrice:395,
      colors:['nude','verde'], images:{nude:'../assets/10.jpeg',verde:'../assets/10.jpeg'}, desc:'Bolsa bucket em couro suave com cordão regulável. Estilo descontraído com qualidade premium. Versatilidade para todos os dias.',
      details:['Couro suave tratado','Cordão regulável','Interior com divisória','Medidas: 28 × 28 × 14 cm'] },
    { id:10, name:'Lenço de seda', cat:'acessorio', price:152, badge:'new', isNew:true, limited:false, sale:false,
      colors:['nude','verde','vinho'], images:{nude:'../assets/11.jpeg',verde:'../assets/11.jpeg',vinho:'../assets/11.jpeg'}, desc:'Lenço 100% seda natural com estampa exclusiva desenhada pela Elegance Store. Use no pescoço, na bolsa ou no cabelo.',
      details:['100% seda natural','Estampa exclusiva','Borda de rolinho artesanal','Medidas: 85 × 85 cm'] },
    { id:11, name:'Cinto Milanese', cat:'acessorio', price:178, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto','caramelo'], images:{preto:'../assets/12.jpeg',caramelo:'../assets/12.jpeg'}, desc:'Cinto em couro legítimo com fivela dourada ajustável. Corte reto clássico que funciona com looks casuais e formais.',
      details:['Couro legítimo','Fivela dourada','5 furos de ajuste','Disponível nos tamanhos P ao GG'] },
    { id:12, name:'Carteira Côte d\'Azur', cat:'carteira', price:215, badge:'sale', isNew:false, limited:false, sale:true, oldPrice:290,
      colors:['branco','nude','verde'], images:{branco:'../assets/13.jpeg',nude:'../assets/13.jpeg',verde:'../assets/13.jpeg'}, desc:'Carteira de bolso com acabamento verniz brilhante e interior colorido. Peça que chama atenção sem precisar de muito espaço.',
      details:['Acabamento verniz','Interior colorido contrastante','8 porta-cartões + 2 secretas','Medidas: 20 × 10 cm'] },
    { id:13, name:'Bolsa Éclat', cat:'bolsa', price:245, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/1.jpeg'}, desc:'Bolsa clássica com acabamento sofisticado e textura suave.',
      details:['Couro sintético premium','Alça ajustável','Bolso interno','Medidas: 31 × 23 × 11 cm'] },
    { id:14, name:'Clutch Solare', cat:'clutch', price:182, badge:'new', isNew:true, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/14.jpeg'}, desc:'Clutch compacta com acabamento acetinado, perfeita para evento noturno.',
      details:['Forro interno macio','Fecho magnético','Alça removível','Medidas: 23 × 14 cm'] },
    { id:15, name:'Carteira Bleu', cat:'carteira', price:165, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/15.jpeg'}, desc:'Carteira elegante com compartimentos espaçosos e design slim.',
      details:['6 porta-cartões','Bolso para notas','Zíper para moedas','Medidas: 19 × 10 cm'] },
    { id:16, name:'Lenço Alma', cat:'acessorio', price:148, badge:'new', isNew:true, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/16.jpeg'}, desc:'Lenço delicado com estampa exclusiva para looks versáteis.',
      details:['Tecido leve','Acabamento com bainha','Estampa floral','Medidas: 85 × 85 cm'] },
    { id:17, name:'Bolsa Coral', cat:'bolsa', price:312, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/17.jpeg'}, desc:'Bolsa feminina com formato estruturado e alça retrátil.',
      details:['Alça dupla','Fecho de ímã','Interior forrado','Medidas: 32 × 24 × 12 cm'] },
    { id:18, name:'Clutch Luna', cat:'clutch', price:190, badge:'limited', isNew:false, limited:true, sale:false,
      colors:['preto'], images:{preto:'../assets/18.jpeg'}, desc:'Clutch sofisticada com textura brilhante para ocasiões especiais.',
      details:['Corrente dourada','Fechamento magnético','Interior em veludo','Medidas: 24 × 13 cm'] },
    { id:19, name:'Carteira Oslo', cat:'carteira', price:172, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/19.jpeg'}, desc:'Carteira compacta com acabamento texturizado e compartimentos práticos.',
      details:['6 porta-cartões','Bolso para moedas','Design minimalista','Medidas: 19 × 10 cm'] },
    { id:20, name:'Cinto Paris', cat:'acessorio', price:182, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/20.jpeg'}, desc:'Cinto clássico com fivela elegante e acabamento premium.',
      details:['Couro sintético de alta qualidade','Fivela dourada','5 pontos de ajuste','Largura: 2,5 cm'] },
    { id:21, name:'Bolsa Nova', cat:'bolsa', price:330, badge:'new', isNew:true, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/21.jpeg'}, desc:'Bolsa moderna com detalhes metálicos e compartimentos amplos.',
      details:['Bolso externo','Fecho em zíper','Alça regulável','Medidas: 34 × 26 × 13 cm'] },
    { id:22, name:'Clutch Áurea', cat:'clutch', price:198, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/22.jpeg'}, desc:'Clutch elegante em tons sutis com acabamento em couro falso.',
      details:['Forro interno luxuoso','Fecho magnético','Alça removível','Medidas: 24 × 14 cm'] },
    { id:23, name:'Carteira Siena', cat:'carteira', price:168, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/23.jpeg'}, desc:'Carteira slim com design clean e compartimentos funcionais.',
      details:['Porta-cartões múltiplos','Bolso para notas','Zíper discreto','Medidas: 18 × 9 cm'] },
    { id:24, name:'Lenço Brisa', cat:'acessorio', price:155, badge:'new', isNew:true, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/24.jpeg'}, desc:'Lenço leve com estampa suave, ideal para complementar qualquer look.',
      details:['Tecido fluido','Costura invisível','Estampa elegante','Medidas: 85 × 85 cm'] },
    { id:25, name:'Bolsa Atlas', cat:'bolsa', price:305, badge:'limited', isNew:false, limited:true, sale:false,
      colors:['preto'], images:{preto:'../assets/25.jpeg'}, desc:'Bolsa tote espaçosa com acabamento sofisticado e alças reforçadas.',
      details:['Base estruturada','Interior forrado','Bolso interno','Medidas: 36 × 28 × 14 cm'] },
    { id:26, name:'Clutch Neo', cat:'clutch', price:185, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/26.jpeg'}, desc:'Clutch compacta com design contemporâneo e textura elegante.',
      details:['Cor poética','Detalhe em metal','Fecho magnético','Medidas: 23 × 13 cm'] },
    { id:27, name:'Carteira Rio', cat:'carteira', price:175, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/27.jpeg'}, desc:'Carteira prática com acabamento clean e interior funcional.',
      details:['6 porta-cartões','Bolso para moedas','Design minimalista','Medidas: 19 × 10 cm'] },
    { id:28, name:'Cinto Vogue', cat:'acessorio', price:180, badge:'sale', isNew:false, limited:false, sale:true, oldPrice:220,
      colors:['preto'], images:{preto:'../assets/28.jpeg'}, desc:'Cinto fashion com fivela statement e acabamento premium.',
      details:['Fivela metálica','Ajuste fácil','Couro sintético','Largura: 2,5 cm'] },
    { id:29, name:'Bolsa Riva', cat:'bolsa', price:315, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/29.jpeg'}, desc:'Bolsa elegante com detalhes sutis e design funcional.',
      details:['Bolso frontal','Alça ajustável','Interior espaçoso','Medidas: 33 × 25 × 12 cm'] },
    { id:30, name:'Clutch Lirio', cat:'clutch', price:190, badge:null, isNew:false, limited:false, sale:false,
      colors:['preto'], images:{preto:'../assets/30.jpeg'}, desc:'Clutch sofisticada com acabamento acetinado e formato compacto.',
      details:['Fecho magnético','Alça de corrente','Interior forrado','Medidas: 24 × 13 cm'] },
  ];
 
  const COLOR_HEX = { preto:'#1a1a18', caramelo:'#c0894a', nude:'#d4a98a', branco:'#f0ede8', vinho:'#7a2535', verde:'#4a6741' };
 
  let state = { cat:'all', search:'', maxPrice:400, color:'all', avail:'all', sort:'default', view:'grid', cart:0 };
  let currentProduct = null;
  let currentImageColor = null;
 
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
      const firstColor = p.colors[0];
      const imgSrc = p.images && p.images[firstColor] ? p.images[firstColor] : '';
      card.innerHTML = `
        <div class="product-card__img">
          ${badgeHtml}
          <button class="product-card__fav" data-id="${p.id}" aria-label="Favoritar"><i class="ti ti-heart"></i></button>
          ${imgSrc ? `<img src="${imgSrc}" alt="${p.name}" class="product-card__img-real" />` : '<i class="ti ti-shopping-bag" aria-hidden="true"></i><p>Foto do produto</p>'}
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
    currentImageColor = p.colors[0];
    document.getElementById('mCat').textContent = p.cat.charAt(0).toUpperCase() + p.cat.slice(1);
    document.getElementById('mName').textContent = p.name;
    const oldPriceHtml = p.oldPrice ? `<span class="modal__price-old">${fmt(p.oldPrice)}</span>` : '';
    document.getElementById('mPrice').innerHTML = oldPriceHtml + fmt(p.price);
    document.getElementById('mDesc').textContent = p.desc;
 
    // Update image
    updateModalImage();
 
    const colorsEl = document.getElementById('mColors');
    colorsEl.innerHTML = p.colors.map((c,i) =>
      `<div class="modal__color-opt${i===0?' active':''} ${c==='branco'?'outline-opt':''}" data-color="${c}" style="background:${COLOR_HEX[c]||'#ccc'}" title="${c}"></div>`
    ).join('');
    colorsEl.querySelectorAll('.modal__color-opt').forEach(el => {
      el.addEventListener('click', () => {
        colorsEl.querySelectorAll('.modal__color-opt').forEach(e => e.classList.remove('active'));
        el.classList.add('active');
        currentImageColor = el.dataset.color;
        updateModalImage();
      });
    });
 
    const detailsEl = document.getElementById('mDetails');
    detailsEl.innerHTML = p.details.map(d => `<li><i class="ti ti-check" aria-hidden="true"></i>${d}</li>`).join('');
 
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function updateModalImage() {
    const imgContainer = document.querySelector('.modal__img');
    if (!currentProduct || !imgContainer) return;
    
    const imgSrc = currentProduct.images && currentProduct.images[currentImageColor];
    if (imgSrc) {
      imgContainer.innerHTML = `<img src="${imgSrc}" alt="${currentProduct.name}" class="modal__img-real" />`;
      if (currentProduct.colors.length > 1) {
        imgContainer.innerHTML += `
          <button class="modal__img-nav modal__img-prev" id="imgPrev" aria-label="Imagem anterior"><i class="ti ti-chevron-left"></i></button>
          <button class="modal__img-nav modal__img-next" id="imgNext" aria-label="Próxima imagem"><i class="ti ti-chevron-right"></i></button>
        `;
        setupImageNavigation();
      }
    } else {
      imgContainer.innerHTML = `<i class="ti ti-shopping-bag"></i><p>Foto do produto</p>`;
    }
  }

  function setupImageNavigation() {
    const prevBtn = document.getElementById('imgPrev');
    const nextBtn = document.getElementById('imgNext');
    if (!prevBtn || !nextBtn) return;

    prevBtn.addEventListener('click', () => {
      const idx = currentProduct.colors.indexOf(currentImageColor);
      const newIdx = idx === 0 ? currentProduct.colors.length - 1 : idx - 1;
      currentImageColor = currentProduct.colors[newIdx];
      document.querySelectorAll('.modal__color-opt').forEach((el, i) => {
        el.classList.toggle('active', i === newIdx);
      });
      updateModalImage();
    });

    nextBtn.addEventListener('click', () => {
      const idx = currentProduct.colors.indexOf(currentImageColor);
      const newIdx = idx === currentProduct.colors.length - 1 ? 0 : idx + 1;
      currentImageColor = currentProduct.colors[newIdx];
      document.querySelectorAll('.modal__color-opt').forEach((el, i) => {
        el.classList.toggle('active', i === newIdx);
      });
      updateModalImage();
    });
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