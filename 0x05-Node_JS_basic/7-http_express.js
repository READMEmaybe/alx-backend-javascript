const express = require('express');
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
        resolve({ count, students, fields });
      })
      .catch(() => reject(new Error('Cannot load the database')));
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${data.count}\n`);
      for (const field in data.fields) {
        if (field) {
          const list = data.fields[field];
          res.write(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`);
        }
      }
      res.end();
    })
    .catch(() => {
      res.write('This is the list of our students\nCannot load the database');
      res.end();
    });
});

app.listen(1245);

module.exports = app;
