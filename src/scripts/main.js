(function () {
  // Mobile menu
  var menu = document.getElementById('mobile-menu');
  var burger = document.getElementById('burger');
  var close = document.getElementById('mm-close');
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) burger.addEventListener('click', function () { setMenu(true); });
  if (close) close.addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setMenu(false); setMega(false); } });

  // Services mega menu (desktop)
  var header = document.getElementById('site-header');
  var mega = document.getElementById('mega');
  function setMega(open) { if (mega) mega.classList.toggle('is-open', open); }
  document.querySelectorAll('.nav-link').forEach(function (a) {
    a.addEventListener('mouseenter', function () { setMega(a.hasAttribute('data-mega')); });
    a.addEventListener('focus', function () { setMega(a.hasAttribute('data-mega')); });
  });
  if (header) header.addEventListener('mouseleave', function () { setMega(false); });

  // Hero video: hold on the poster frame for visitors who prefer reduced motion
  var heroVideo = document.querySelector('[data-hero-video]');
  if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroVideo.removeAttribute('autoplay');
    heroVideo.pause();
  }

  // File upload label
  document.querySelectorAll('.upload input[type=file]').forEach(function (inp) {
    inp.addEventListener('change', function () {
      var out = inp.parentNode.querySelector('[data-upload-name]');
      if (out) out.textContent = Array.prototype.map.call(inp.files, function (f) { return f.name; }).join(', ');
    });
  });

  // Enquiry form
  // The form posts to data-endpoint, set from formEndpoint in src/data/site.ts.
  // While it's empty, the form validates and shows the thank-you message without sending.
  var form = document.getElementById('enquiry');
  if (form) {
    var thanks = document.getElementById('thanks');
    var err = document.getElementById('form-error');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = ['name', 'email', 'phone'].every(function (n) { return form.elements[n] && form.elements[n].value.trim(); });
      if (!ok) { err.hidden = false; return; }
      err.hidden = true;
      var btn = form.querySelector('button[type=submit]');
      var done = function () { form.hidden = true; thanks.hidden = false; };
      var endpoint = form.getAttribute('data-endpoint');
      if (!endpoint) { done(); return; }
      btn.disabled = true;
      fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('Send failed'); done(); })
        .catch(function () { err.textContent = 'Sorry, something went wrong. Please try again or call us.'; err.hidden = false; btn.disabled = false; });
    });
  }
})();
