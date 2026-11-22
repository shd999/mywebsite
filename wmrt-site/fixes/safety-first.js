/* Woodhead MRT: safety first on phones (step 1 of the critique fixes)
   Add with a code-snippet plugin (footer, front end only). Exclude it from
   LiteSpeed "Load JS Delayed" so it runs before the first touch. */
(function () {
  var b = document.body;
  var isHome = b.classList.contains('home');
  var isSafety = b.classList.contains('page-id-399') || b.classList.contains('parent-pageid-399');

  // Keep "dial 999" together on narrow screens.
  var s = document.querySelector('.wh-emergency strong');
  if (s) s.innerHTML = s.innerHTML.replace('dial 999', 'dial 999');

  if (!isHome && !isSafety) return;

  // On the homepage and the emergency page the finder is on the page, so the
  // bar's second button starts it there. Other Safety pages link to it.
  var box = document.querySelector(isHome ? '#grf-locate' : '#find-my-grid-reference');
  var phone = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>';
  var grid = box
    ? '<button type="button" class="sb-grid">Find my grid reference</button>'
    : '<a class="sb-grid" href="/safety/in-an-emergency/#find-my-grid-reference">Find my grid reference</a>';

  var bar = document.createElement('nav');
  bar.className = 'wmrt-safebar';
  bar.setAttribute('aria-label', 'Emergency');
  bar.innerHTML = '<a class="sb-999" href="tel:999">' + phone + 'Call 999</a>' + grid;
  b.appendChild(bar);
  b.classList.add('has-safebar');

  // A button, not a "#" link: the theme takes over in-page links for its own
  // smooth scrolling, which would stop the finder from starting.
  if (box) bar.querySelector('.sb-grid').addEventListener('click', function () {
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    var go = box.querySelector('.loc-btn');
    if (go) go.click();
  });

  // Hide both bars while the finder is on screen, so nothing covers the result.
  if (box && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (en) {
      var r = en[0];
      b.classList.toggle('wmrt-finder-open', r.intersectionRatio > 0.5);
      // Homepage only: once the visitor has scrolled past the finder, swap to Donate.
      if (isHome) b.classList.toggle('wmrt-past-finder', !r.isIntersecting && r.boundingClientRect.bottom < 0);
    }, { threshold: [0, 0.5, 1] }).observe(box);
  }
})();
