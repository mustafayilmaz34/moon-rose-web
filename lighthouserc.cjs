// Lighthouse CI — `npm run lighthouse` (after `npm run build`).
// Mobile emulation (Lighthouse default), one page per template in the default language plus Arabic.
// Reports stay local (.lighthouseci/); nothing is uploaded — the site is private until launch.
module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: [
        'http://localhost/tr/',
        'http://localhost/tr/tedaviler/',
        'http://localhost/tr/tedaviler/botoks/',
        'http://localhost/tr/iletisim/',
        'http://localhost/ar/',
      ],
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        // Performance varies with the machine (CI runners are slow) — warn, don't block.
        'categories:performance': ['warn', { minScore: 0.9 }],
      },
    },
    upload: { target: 'filesystem', outputDir: '.lighthouseci' },
  },
};
