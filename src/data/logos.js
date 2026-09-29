// Brand marks from Simple Icons (CC0), vendored into /public/assets/logos.
// Keys are lowercased tech labels as they appear in profile.js / projects.js.
const map = {
  python: 'python',
  'jupyter notebook': 'jupyter',
  pandas: 'pandas',
  numpy: 'numpy',
  scipy: 'scipy',
  sklearn: 'scikitlearn',
  tensorflow: 'tensorflow',
  keras: 'keras',
  pytorch: 'pytorch',
  transformers: 'huggingface',
  'youtube api': 'youtube',
  'google play scraper': 'googleplay',
  pyspark: 'apachespark',
  react: 'react',
  fastapi: 'fastapi',
  laravel: 'laravel',
  php: 'php',
  javascript: 'javascript',
  'c++': 'cplusplus',
  c: 'c',
  java: 'openjdk',
  sql: 'mysql',
  plotly: 'plotly',
}

export function logoFor(label) {
  const slug = map[label.trim().toLowerCase()]
  return slug ? `/assets/logos/${slug}.svg` : null
}

// Ticker strip under the hero. Order is deliberate, not alphabetical.
export const marqueeLogos = [
  'python', 'pytorch', 'tensorflow', 'keras', 'scikitlearn', 'huggingface',
  'pandas', 'numpy', 'scipy', 'plotly', 'jupyter', 'apachespark',
  'react', 'fastapi', 'laravel', 'mysql',
]
