// Scroll reveals, staggered groups, the "How it works" line and the sticky header.
// See src/styles/motion.css. Reveals are skipped entirely for reduced motion.
(function () {
  var root = document.documentElement;
  var header = document.getElementById('site-header');

  // Sticky header (runs for everyone; it's navigation, not decoration)
  if (header) {
    var stuck = false;
    var onScroll = function () {
      var y = window.scrollY;
      if (!stuck && y > 160) { stuck = true; header.classList.add('is-stuck'); }
      else if (stuck && y < 10) { stuck = false; header.classList.remove('is-stuck'); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (!root.classList.contains('motion') || !('IntersectionObserver' in window)) {
    root.classList.remove('motion');
    return;
  }
  root.classList.add('motion-ready');

  // Single blocks that fade up on their own
  var singles = [
    'main .sec-head', 'main .sec-body', 'main .sec-top', 'main .sec > .wrap > .eyebrow', 'main .sec > .wrap > h2',
    'main .sec-grid > div:not(.sec-head):not(.sec-body)', 'main .sec-grid > .dlist',
    '.why-copy > .eyebrow', '.why-copy > h2', '.cta-copy', '.cta-btns', '.contact-block > *',
    '.feat-media', '.feat-body', '.testi', 'main .note',
  ];
  // Groups whose children arrive one after another
  var groups = ['.strip-grid', '.svc4', '.img-cards', '.cards', '.how5', '.why-list', '.faq', '.next'];

  var targets = [];
  document.querySelectorAll(singles.join(',')).forEach(function (el) {
    if (!el.closest('[data-reveal]')) { el.setAttribute('data-reveal', ''); targets.push(el); }
  });
  document.querySelectorAll(groups.join(',')).forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (el, i) {
      el.setAttribute('data-reveal', '');
      el.style.setProperty('--d', Math.min(i, 6) * 90 + 'ms');
      targets.push(el);
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.classList.add('is-in');
      io.unobserve(el);
      // Once revealed, drop the reveal styles so hover effects run without delay
      el.addEventListener('transitionend', function done(ev) {
        if (ev.target !== el || ev.propertyName !== 'opacity') return;
        el.removeEventListener('transitionend', done);
        el.removeAttribute('data-reveal');
        el.style.removeProperty('--d');
      });
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  targets.forEach(function (el) { io.observe(el); });

  // Draw the "How it works" line when the steps come into view
  var how = document.querySelector('.how5');
  if (how) {
    new IntersectionObserver(function (entries, obs) {
      if (entries[0].isIntersecting) { how.classList.add('is-drawn'); obs.disconnect(); }
    }, { threshold: 0.3 }).observe(how);
  }
})();
