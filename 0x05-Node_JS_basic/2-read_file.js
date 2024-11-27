const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
    const rows = data.split('\n');
    console.log(`Number of students: ${rows.length - 1}`);
    const row = rows.map((x) => x.split(','));
    const cs = row.filter((x) => x.includes('CS')).map((x) => x[0]);
    const swe = row.filter((x) => x.includes('SWE')).map((x) => x[0]);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
