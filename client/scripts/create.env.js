const fs = require('fs');
fs.writeFileSync('./.env', `MESSAGE=${process.env.MESSAGE}\n`)