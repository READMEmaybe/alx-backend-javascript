const fs = require('fs').promises;

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const fields = {};
        const students = data.split('\n');
        for (let i = 1; i < students.length; i += 1) {
          const student = students[i].split(',');
          if (!fields[student[3]]) {
            fields[student[3]] = [];
          }
          fields[student[3]].push(student[0]);
        }
        resolve(fields);
      })
      .catch(() => reject(new Error('Cannot load the database')));
  });
}

module.exports = readDatabase;
