const fs = require('fs');
let code = fs.readFileSync('src/context/CartContext.tsx', 'utf-8');

code = code.replace(/\} catch \(e\) \{/, '} catch (e) { // eslint-disable-next-line @typescript-eslint/no-unused-vars\n');

fs.writeFileSync('src/context/CartContext.tsx', code, 'utf-8');
