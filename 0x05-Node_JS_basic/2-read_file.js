const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
      // eslint-disable-next-line no-unreachable
      return;
    }
    const rows = data.split('\n');
    console.log(`Number of students: ${rows.length - 1}`);
    const row = rows.map((x) => x.split(','));
    const cs = row.filter((x) => x.includes('CS')).map((x) => x[0]);
    const swe = row.filter((x) => x.includes('SWE')).map((x) => x[0]);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  });
}

module.exports = countStudents;
