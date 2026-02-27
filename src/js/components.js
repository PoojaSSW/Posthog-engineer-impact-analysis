/**
 * components.js
 *
 * Pure functions that build and return DOM nodes.
 * No framework — vanilla JS component pattern.
 */

/**
 * Build a single engineer leaderboard row element.
 *
 * @param {Object}  eng     - Engineer data object from engineers.js
 * @param {number}  rank    - 1-based rank position
 * @returns {HTMLElement}
 */
function buildEngineerRow(eng, rank) {
  const color       = RANK_COLORS[rank - 1] || '#888';
  const speedColor  = eng.avgMergeHrs < 48 ? 'var(--c3)' : 'var(--muted)';
  const reviewColor = eng.reviews > 15      ? 'var(--c2)' : 'var(--muted)';

  const row = document.createElement('article');
  row.className   = 'eng-row';
  row.setAttribute('aria-label', `${eng.login}, rank ${rank}, impact score ${eng.score}`);
  row.setAttribute('role', 'button');
  row.setAttribute('tabindex', '0');

  row.innerHTML = `
    <div class="eng-top">
      <div class="rank-num" style="background:${color}" aria-hidden="true">${rank}</div>

      <img
        class="avatar"
        src="https://github.com/${eng.login}.png?size=80"
        width="36" height="36"
        alt="${eng.login} GitHub avatar"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
      />
      <div
        class="avatar-fallback"
        style="width:36px;height:36px;font-size:12px;background:${color};display:none"
        aria-hidden="true"
      >${eng.login.slice(0, 2).toUpperCase()}</div>

      <div class="eng-info">
        <div class="eng-name">${eng.login}</div>
        <div class="eng-handle">@${eng.login} &nbsp;·&nbsp; ${eng.team}</div>
      </div>

      <div class="eng-score-box">
        <div class="eng-score-label">Impact Score</div>
        <div class="eng-score-num" style="color:${color}">${eng.score}</div>
      </div>
    </div>

    <div class="score-bar-wrap" aria-hidden="true">
      <div class="score-bar" style="background:${color}" data-pct="${eng.barPct}"></div>
    </div>

    <div class="eng-stats">
      <div class="stat">
        <span class="stat-label">⚡ PRs Merged</span>
        <span class="stat-value">${eng.prs}</span>
      </div>
      <div class="stat">
        <span class="stat-label">⏱ Merge Time</span>
        <span class="stat-value" style="color:${speedColor}">${eng.avgMerge}</span>
      </div>
      <div class="stat">
        <span class="stat-label">📁 Files Changed</span>
        <span class="stat-value">${eng.files}</span>
      </div>
      <div class="stat">
        <span class="stat-label">💬 Reviews</span>
        <span class="stat-value" style="color:${reviewColor}">${eng.reviews}</span>
      </div>
      <div class="stat">
        <span class="stat-label">📈 Changes</span>
        <span class="stat-value">+${eng.additions.toLocaleString()}</span>
      </div>
    </div>

    <div class="expand-body" style="border-left-color:${color}" aria-expanded="false">
      <strong>Why this score?</strong>
      <ul>
        ${eng.whyPoints.map(p => `<li>${p}</li>`).join('')}
      </ul>
      <div class="note">${eng.summary}</div>
    </div>
  `;

  // ── Toggle expand on click or keyboard ──
  function toggle() {
    const body = row.querySelector('.expand-body');
    const isOpen = body.classList.toggle('visible');
    row.classList.toggle('open', isOpen);
    body.setAttribute('aria-expanded', String(isOpen));
    row.style.borderColor = isOpen ? `${color}50` : 'var(--border)';
    row.style.boxShadow   = isOpen ? '0 4px 18px rgba(0,0,0,.07)' : '';
  }

  row.addEventListener('click', toggle);
  row.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });

  return row;
}
