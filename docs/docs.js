(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('nav-toggle');
    var sidebar = document.getElementById('sidebar');

    function closeNav() {
      if (sidebar) sidebar.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }

    if (toggle && sidebar) {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = sidebar.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      document.addEventListener('click', function (e) {
        if (sidebar.classList.contains('open') &&
            !sidebar.contains(e.target) && e.target !== toggle) {
          closeNav();
        }
      });
      sidebar.addEventListener('click', function (e) {
        if (e.target.closest('a')) closeNav();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeNav();
      });
    }

    var backTop = document.getElementById('back-to-top');
    if (backTop) {
      var onScroll = function () {
        if (window.scrollY > 400) {
          backTop.classList.add('show');
        } else {
          backTop.classList.remove('show');
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      backTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });
})();