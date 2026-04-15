/**
 * loader.js — Shared page transition loader for Hot Beans
 *
 * Behaviour:
 *  - Shows the loader ONLY when navigating away (clicking an internal link).
 *  - Does NOT show on page arrival — the loader is invisible by default and
 *    never auto-displayed, so the user only ever sees it once per navigation.
 */

(function () {

  // ---- Inject hidden loader HTML into the DOM on startup ----
  function createLoader() {
    if (document.getElementById('page-loader')) return;
    const div = document.createElement('div');
    div.id = 'page-loader';
    // Start hidden — only shown when user clicks a link
    div.classList.add('loader-hidden');
    div.innerHTML = `
      <div class="loader-inner">
        <div class="loader-orbit">
          <span class="orbit-emoji" style="--i:0">&#x1F35C;</span>
          <span class="orbit-emoji" style="--i:1">&#x1F357;</span>
          <span class="orbit-emoji" style="--i:2">&#x1F363;</span>
          <span class="orbit-emoji" style="--i:3">&#x1F32E;</span>
          <span class="orbit-emoji" style="--i:4">&#x1F959;</span>
          <span class="orbit-emoji" style="--i:5">&#x1F9C6;</span>
        </div>
        <div class="loader-ring"></div>
        <div class="loader-brand">
          <span>&#x1F525;</span>
          <p>Chopin</p>
        </div>
      </div>
      <p class="loader-tagline">Preparing your feast&hellip;</p>
      <div class="loader-bar"><div class="loader-bar-fill"></div></div>`;
    document.body.insertAdjacentElement('afterbegin', div);
  }

  // ---- Reveal the loader (remove hidden class) ----
  function showLoader() {
    const loader = document.getElementById('page-loader');
    if (!loader) return;
    loader.classList.remove('loader-hidden');
  }

  // ---- Create the (hidden) loader on page ready ----
  document.addEventListener('DOMContentLoaded', createLoader);

  // ---- Intercept internal link clicks: show loader then navigate ----
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');

    // Skip: hash-only anchors, external URLs, mailto/tel, blank targets
    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('http') ||
      href.startsWith('//') ||
      href.startsWith('mailto') ||
      href.startsWith('tel') ||
      link.target === '_blank'
    ) return;

    e.preventDefault();
    showLoader();
    // Short delay so the loader is visible before browser navigates
    setTimeout(() => { window.location.href = href; }, 520);
  });

})();
