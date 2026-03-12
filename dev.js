const fs = require('fs');
const { exec, spawn } = require('child_process');
const path = require('path');

// Function to run the minifier
function runMinify() {
  console.log('[\x1b[38;2;255;134;100mSystem\x1b[0m] index.css changed, running minifier...');
  exec('node minify.js', (err, stdout) => {
    if (err) {
      console.error('[\x1b[31mError\x1b[0m] Minification failed:', err);
      return;
    }
    console.log('[\x1b[32mSuccess\x1b[0m] index.min.css updated.');
  });
}

// 1. Initial Minification
runMinify();

// 2. Watch for CSS changes
console.log('[\x1b[34mWatcher\x1b[0m] Monitoring index.css for changes...');
let debounceTimer;
fs.watch(path.join(__dirname, 'index.css'), (event, filename) => {
  if (filename && event === 'change') {
    // Debounce to prevent multiple hits during save
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(runMinify, 100);
  }
});

// 3. Start BrowserSync for live reload
// We watch index.html and index.min.css (triggered by the CSS watch above)
console.log('[\x1b[35mServer\x1b[0m] Starting Live Reload Server...');

const browserSync = spawn('npx', [
  'browser-sync', 'start',
  '--server',
  '--files', 'index.html, index.min.css',
  '--no-notify',
  '--port', '3000'
], { shell: true });

browserSync.stdout.on('data', (data) => {
  const msg = data.toString();
  if (msg.includes('Local:')) {
    console.log('\n\x1b[32m✔ Development server is running!\x1b[0m');
    console.log('\x1b[36m➜\x1b[0m  ' + msg.split('Local:')[1].trim());
  }
});

browserSync.stderr.on('data', (data) => {
  // Ignore harmless npx/browser-sync warnings
  if (!data.toString().includes('warn')) {
    console.error(`[\x1b[31mServer Error\x1b[0m] ${data}`);
  }
});

process.on('SIGINT', () => {
  browserSync.kill();
  process.exit();
});
