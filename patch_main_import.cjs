const fs = require('fs');
const file = 'src/main.tsx';
let code = fs.readFileSync(file, 'utf-8');

code = code.replace(/import \{ CartProvider \} from '\.\/context\/CartContext';/, '');
code = code.replace(/import App from '\.\/App';/, `import App from './App';\nimport { CartProvider } from './context/CartContext';`);

fs.writeFileSync(file, code, 'utf-8');

const tsconfig = 'tsconfig.json';
let tsconfigCode = fs.readFileSync(tsconfig, 'utf-8');
// Disable verbatimModuleSyntax if we can't figure out all type imports
if (tsconfigCode.includes('"verbatimModuleSyntax": true')) {
  tsconfigCode = tsconfigCode.replace(/"verbatimModuleSyntax": true/, '"verbatimModuleSyntax": false');
  fs.writeFileSync(tsconfig, tsconfigCode, 'utf-8');
}

const tsconfigApp = 'tsconfig.app.json';
let tsconfigAppCode = fs.readFileSync(tsconfigApp, 'utf-8');
if (tsconfigAppCode.includes('"verbatimModuleSyntax": true')) {
  tsconfigAppCode = tsconfigAppCode.replace(/"verbatimModuleSyntax": true/, '"verbatimModuleSyntax": false');
  fs.writeFileSync(tsconfigApp, tsconfigAppCode, 'utf-8');
}
