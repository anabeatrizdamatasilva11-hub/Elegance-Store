 /* ----------------------------------------------------------
       Mobile menu toggle
    ---------------------------------------------------------- */
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
 
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      const spans = menuBtn.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(6px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-6px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
 
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        const spans = menuBtn.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
 
    /* ----------------------------------------------------------
       Accordion — objeções
    ---------------------------------------------------------- */
    document.querySelectorAll('.objection__q').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.objection');
        const isOpen = item.classList.contains('is-open');
        document.querySelectorAll('.objection').forEach(o => o.classList.remove('is-open'));
        if (!isOpen) item.classList.add('is-open');
      });
    });
 
    /* ----------------------------------------------------------
       Scroll animations (IntersectionObserver)
    ---------------------------------------------------------- */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
 
    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
 
    /* ----------------------------------------------------------
       Sticky nav shadow on scroll
    ---------------------------------------------------------- */
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        nav.style.borderBottomColor = 'rgba(0,0,0,0.18)';
      } else {
        nav.style.borderBottomColor = '';
      }
    }, { passive: true });