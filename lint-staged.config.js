module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --no-cache --fix'],
  '*.{ts,tsx,js,jsx}': [
    () => 'tsc --skipLibCheck --noEmit',
    'eslint --cache --fix'
  ],
  '*.{js,jsx,ts,tsx,html,css}': ['npx prettier --check']
}
