const fs = require('fs');

console.log('hi');
const data = fs.readFileSync('database.csv', {
  encodingg: 'utf-8',
  flag: 'r',
});


console.log(data.toString().split('\n'));