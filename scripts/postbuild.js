import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const routes = [
  'about',
  'support',
  'privacy',
  'terms',
  'delete-account',
  'download'
];

routes.forEach((route) => {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.copyFileSync(indexHtmlPath, path.join(routeDir, 'index.html'));
  console.log(`✓ Generated static route: dist/${route}/index.html`);
});

console.log('✓ All static route directories successfully generated for GitHub Pages.');
