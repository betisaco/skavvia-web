import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath.endsWith('/')) {
    reqPath += 'index.html';
  } else if (!path.extname(reqPath)) {
    reqPath += '/index.html';
  }

  let filePath = path.join(distDir, reqPath);

  if (!fs.existsSync(filePath)) {
    filePath = path.join(distDir, '404.html');
  }

  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(4173, async () => {
  console.log('Testing server running on port 4173...');

  const routesToTest = [
    { path: '/', expectedHtmlToken: '<div id="root">' },
    { path: '/about', expectedHtmlToken: '<div id="root">' },
    { path: '/support', expectedHtmlToken: '<div id="root">' },
    { path: '/privacy', expectedHtmlToken: '<div id="root">' },
    { path: '/terms', expectedHtmlToken: '<div id="root">' },
    { path: '/delete-account', expectedHtmlToken: '<div id="root">' },
    { path: '/download', expectedHtmlToken: '<div id="root">' },
    { path: '/robots.txt', expectedHtmlToken: 'User-agent: *' },
    { path: '/sitemap.xml', expectedHtmlToken: 'https://skavvia.com/' },
    { path: '/.well-known/assetlinks.json', expectedHtmlToken: 'com.skavvia.mobile' },
    { path: '/CNAME', expectedHtmlToken: 'skavvia.com' },
  ];

  let hasError = false;

  for (const item of routesToTest) {
    try {
      const res = await fetch(`http://localhost:4173${item.path}`);
      const text = await res.text();
      const status = res.status;

      if (status !== 200) {
        console.error(`❌ Route ${item.path} returned status ${status}`);
        hasError = true;
      } else if (!text.includes(item.expectedHtmlToken)) {
        console.error(`❌ Route ${item.path} missing expected token "${item.expectedHtmlToken}"`);
        hasError = true;
      } else {
        console.log(`✅ Route ${item.path} - 200 OK`);
      }
    } catch (err) {
      console.error(`❌ Error fetching ${item.path}:`, err);
      hasError = true;
    }
  }

  // Verify that components exist in compiled bundle
  const assetsDir = path.join(distDir, 'assets');
  const jsFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));
  let allJsContent = '';
  for (const file of jsFiles) {
    allJsContent += fs.readFileSync(path.join(assetsDir, file), 'utf8');
  }

  const bundleChecks = [
    { label: 'Slogan', string: 'Keşfet. Paylaş. İz Bırak.' },
    { label: 'Domain', string: 'skavvia.com' },
    { label: 'Support Email', string: 'support@skavvia.com' },
    { label: 'Support Mailto CTA', string: 'SKAVVIA%20Destek%20Talebi' },
    { label: 'Bug Report Mailto CTA', string: 'SKAVVIA%20Sorun%20Bildirimi' },
    { label: 'Delete Account Mailto CTA', string: 'SKAVVIA%20Hesap%20Silme%20Talebi' },
    { label: 'Package Name', string: 'com.skavvia.mobile' },
    { label: 'Version', string: '1.0.5.1' },
    { label: 'Architecture', string: 'arm64-v8a' },
    { label: 'Approximate Size', string: '66 MB' },
    { label: 'Privacy Policy UGC', string: 'Row Level Security' },
  ];

  for (const check of bundleChecks) {
    if (allJsContent.includes(check.string)) {
      console.log(`✅ Bundle contains ${check.label} ("${check.string}")`);
    } else {
      console.error(`❌ Bundle MISSING ${check.label} ("${check.string}")`);
      hasError = true;
    }
  }

  // Test 404 behavior for unknown route
  try {
    const res = await fetch('http://localhost:4173/unknown-path-xyz');
    const text = await res.text();
    if (text.includes('Yönlendiriliyor') || text.includes('404')) {
      console.log('✅ Route /unknown-path-xyz properly handled by 404 fallback');
    } else {
      console.error('❌ Unknown route 404 fallback failed');
      hasError = true;
    }
  } catch (err) {
    console.error('❌ Error testing 404 fallback:', err);
    hasError = true;
  }

  server.close(() => {
    if (hasError) {
      console.error('\nVerification FAILED with errors.');
      process.exit(1);
    } else {
      console.log('\nAll routes, bundle contents, and static assets verified successfully!');
      process.exit(0);
    }
  });
});
