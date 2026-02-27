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
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
