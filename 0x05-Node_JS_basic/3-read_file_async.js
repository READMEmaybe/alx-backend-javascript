const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n');
        const fields = {};
        const students = [];
        let count = 0;
        for (let i = 1; i < lines.length; i += 1) {
          const line = lines[i];
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
        resolve({ count, students, fields });
      })
      .catch(() => reject(new Error('Cannot load the database')));
  });
}

module.exports = countStudents;
