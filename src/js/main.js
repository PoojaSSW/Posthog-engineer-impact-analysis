/**
 * main.js
 *
 * App entry point.
 * Renders the leaderboard and triggers score-bar animations.
 */

(function () {
  'use strict';

  /**
   * Render all engineer rows into #leaderboard.
   */
  function renderLeaderboard() {
    const container = document.getElementById('leaderboard');
    if (!container) return;

    ENGINEERS.forEach((eng, index) => {
      const row = buildEngineerRow(eng, index + 1);
      container.appendChild(row);
    });
  }

  /**
   * Animate score bars from 0 → target width after a short delay.
   * Using rAF + setTimeout ensures the transition fires after paint.
   */
  function animateBars() {
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.querySelectorAll('.score-bar').forEach(bar => {
          bar.style.width = `${bar.dataset.pct}%`;
        });
      }, 120);
    });
  }

  /**
   * Boot sequence.
   */
  function init() {
    renderLeaderboard();
    animateBars();
    initMethodToggle();
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

  /**
   * Collapsible methodology section.
   * Open by default on load; toggles on button click.
   */
  function initMethodToggle() {
    const btn  = document.getElementById('methodToggle');
    const body = document.getElementById('methodBody');
    const chevron = document.getElementById('methodChevron');
    if (!btn || !body) return;

    // Collapsed by default
    body.classList.add("collapsed");
    chevron.classList.add("collapsed");
    btn.setAttribute("aria-expanded", "false");

    btn.addEventListener('click', function () {
      const isOpen = !body.classList.contains('collapsed');
      body.classList.toggle('collapsed', isOpen);
      chevron.classList.toggle('collapsed', isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  }
