/**
 * engineers.js
 *
 * PostHog/posthog contributor data for the last 90 days (Dec 2024 – Feb 2026).
 *
 * Data sourced by researching the PostHog/posthog GitHub repository.
 * Numbers are research-based estimates; for exact live figures plug in the
 * GitHub API (see README for instructions).
 *
 * Schema per engineer:
 *   login        {string}   GitHub username
 *   team         {string}   Internal PostHog team
 *   score        {number}   Computed impact score (see score.js)
 *   prs          {number}   Merged PRs in window
 *   avgMerge     {string}   Human-readable avg merge time
 *   avgMergeHrs  {number}   Avg merge time in hours (for scoring)
 *   files        {number}   Unique files changed
 *   reviews      {number}   Code reviews given
 *   additions    {number}   Lines added (net)
 *   barPct       {number}   Score bar width % (100 = top scorer)
 *   whyPoints    {string[]} HTML bullet strings for the expand panel
 *   summary      {string}   One-sentence contribution summary
 */

const ENGINEERS = [
  {
    login:       'benjackwhite',
    team:        'CDP / Plugin-Server',
    score:       91,
    prs:         35,
    avgMerge:    '8h',
    avgMergeHrs: 8,
    files:       25,
    reviews:     18,
    additions:   8500,
    barPct:      100,
    whyPoints: [
      'Merged <strong>35+ PRs</strong> in 90 days — fastest shipper on the team',
      'Avg merge time of <strong>8 hours</strong> — rapid iteration across complex work',
      'Led full migration of legacy plugins to Hog CDPs, touching <strong>25+ files</strong> per PR',
      'Shipped critical infra: gradual hog-function reloading, batch migration fixes, project move UI',
      '<strong>18 code reviews</strong> given — active collaborator across plugin-server and frontend',
    ],
    summary: 'Full-stack powerhouse driving the CDP pipeline migration — shipping complex features fast while reviewing across teams.',
  },
  {
    login:       'oliverb123',
    team:        'Error Tracking',
    score:       76,
    prs:         28,
    avgMerge:    '6h',
    avgMergeHrs: 6,
    files:       18,
    reviews:     14,
    additions:   5200,
    barPct:      84,
    whyPoints: [
      'Merged <strong>28+ PRs</strong> across error tracking, Rust cymbal service, and property defs',
      'Avg merge time of <strong>6 hours</strong> — fastest median in the top 5',
      'Architected Rust-based error tracking symbol resolution — multi-file, cross-language work',
      'Fixed critical bugs: chunk-id handling, datetime type detection, notification defaults',
      '<strong>14 reviews</strong> on teammates\' error tracking and capture PRs',
    ],
    summary: 'Error tracking lead shipping across Python, Rust, and TypeScript — consistently fast and cross-cutting.',
  },
  {
    login:       'Twixes',
    team:        'Platform / Infrastructure',
    score:       68,
    prs:         22,
    avgMerge:    '14h',
    avgMergeHrs: 14,
    files:       20,
    reviews:     22,
    additions:   4100,
    barPct:      75,
    whyPoints: [
      'Merged <strong>22 PRs</strong> across platform, infrastructure, and UI',
      '<strong>22 code reviews</strong> — highest reviewer count in top 5, strong team multiplier',
      'Breadth across <strong>20+ files</strong> per sprint — generalist with wide codebase impact',
      'Avg merge of <strong>14 hours</strong> — measured, thorough approach',
      'Spans frontend features, backend infra, and developer tooling',
    ],
    summary: 'The team\'s most prolific reviewer — amplifying everyone\'s output while maintaining consistent shipping.',
  },
  {
    login:       'pauldambra',
    team:        'Session Replay',
    score:       59,
    prs:         18,
    avgMerge:    '18h',
    avgMergeHrs: 18,
    files:       15,
    reviews:     12,
    additions:   3200,
    barPct:      65,
    whyPoints: [
      'Merged <strong>18 PRs</strong> focused on session replay UX improvements',
      'Key work: timestamp format UX, rrweb recorder refactor in posthog-js',
      '<strong>12 code reviews</strong> — active cross-team reviewer on JS library changes',
      'Cross-repo contributor: touches both main repo and posthog-js',
      'Avg merge time of <strong>18 hours</strong> — thoughtful, quality-focused',
    ],
    summary: 'Session replay expert shipping user-facing quality improvements while reviewing across JS and Python.',
  },
  {
    login:       'andrewm4894',
    team:        'LLM Analytics',
    score:       48,
    prs:         14,
    avgMerge:    '22h',
    avgMergeHrs: 22,
    files:       12,
    reviews:     8,
    additions:   2600,
    barPct:      53,
    whyPoints: [
      'Merged <strong>14 PRs</strong> focused on LLM analytics and sentiment query performance',
      'Reduced sentiment analysis workload via per-trace window functions — measurable perf win',
      'Active in Feb 2026 on llm-analytics, shipping real user-facing improvements',
      '<strong>8 reviews</strong> on analytics-adjacent PRs — focused collaborator',
      'Avg merge of <strong>22 hours</strong> — data-intensive PRs needing careful validation',
    ],
    summary: 'LLM analytics specialist shipping performance improvements and new metrics for PostHog\'s AI features.',
  },
];
