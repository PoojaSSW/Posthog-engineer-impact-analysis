/**
 * score.js
 *
 * Impact score formula and helper utilities.
 *
 * Formula:
 *   score = (prs × 3)
 *         + (reviews × 2)
 *         + (min(files, 60) × 0.6)
 *         + (min(additions / 400, 25))
 *         + (avgMergeHrs < 48 ? 6 : 0)
 *
 * Rationale:
 *   - PRs ×3      : value ships when code merges; highest weight
 *   - Reviews ×2  : multiplies teammates' output; often invisible
 *   - Breadth     : cross-cutting work; capped to avoid one-off spikes
 *   - Lines       : substance proxy; capped to avoid rewarding bloat
 *   - Speed bonus : fast merges = well-scoped work = team stays unblocked
 */

const SCORE_WEIGHTS = {
  prMultiplier:      3,
  reviewMultiplier:  2,
  breadthMultiplier: 0.6,
  breadthCap:        60,
  linesDivisor:      400,
  linesCap:          25,
  speedThresholdHrs: 48,
  speedBonus:        6,
};

/**
 * Calculate impact score for a single engineer.
 * @param {Object} eng - Engineer data object
 * @returns {number} Rounded impact score
 */
function calcScore(eng) {
  const prScore     = eng.prs * SCORE_WEIGHTS.prMultiplier;
  const reviewScore = eng.reviews * SCORE_WEIGHTS.reviewMultiplier;
  const breadth     = Math.min(eng.files || 0, SCORE_WEIGHTS.breadthCap) * SCORE_WEIGHTS.breadthMultiplier;
  const lines       = Math.min((eng.additions || 0) / SCORE_WEIGHTS.linesDivisor, SCORE_WEIGHTS.linesCap);
  const speedBonus  = (eng.avgMergeHrs > 0 && eng.avgMergeHrs < SCORE_WEIGHTS.speedThresholdHrs)
    ? SCORE_WEIGHTS.speedBonus : 0;

  return Math.round(prScore + reviewScore + breadth + lines + speedBonus);
}

/**
 * Format hours into a human-readable string.
 * @param {number} hours
 * @returns {string}
 */
function formatHours(hours) {
  if (!hours || isNaN(hours)) return 'N/A';
  if (hours < 1)  return `${Math.round(hours * 60)}m`;
  if (hours < 24) return `${Math.round(hours)}h`;
  return `${Math.round(hours / 24)}d`;
}

/**
 * Rank colours by position (0-indexed).
 */
const RANK_COLORS = ['#e8603c', '#5b7ff1', '#3baa72', '#9b72cf', '#d4954a'];
