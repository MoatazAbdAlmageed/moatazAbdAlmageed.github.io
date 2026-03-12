const fs = require('fs');
const css = fs.readFileSync('index.css', 'utf8');
const minified = css
  .replace(/\/\*[\s\S]*?\*\//g, '') 
  .replace(/\s+/g, ' ')           
  .replace(/\s*([\{\};:,])\s*/g, '$1') 
  .trim();
fs.writeFileSync('index.min.css', minified);
console.log('Final Minification Complete');
