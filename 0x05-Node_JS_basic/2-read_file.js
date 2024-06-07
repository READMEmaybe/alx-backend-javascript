const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n');
    const fields = {};
    const students = [];
    let count = 0;
    for (let i = 1; i < data.length; i += 1) {
      const line = data[i];
      if (line) {
        count += 1;
        const student = line.split(',');
        students.push(student[0]);
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }
    }
    console.log(`Number of students: ${count}`);
    for (const field in fields) {
      if (field) {
        const list = fields[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
