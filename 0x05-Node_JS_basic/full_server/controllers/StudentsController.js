const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv[2];
    readDatabase(path)
      .then((data) => {
        response.write('This is the list of our students\n');
        for (let field in data) {
          response.write(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`);
        }
        response.end();
        
      })
      .catch((err) => {
        response.status(500).send(`${err.message}`);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const path = process.argv[2];
    readDatabase(path)
      .then((data) => {
        const major = request.params.major;
        if (data[major]) {
          response.write(`List: ${data[major].join(', ')}\n`);
          response.end();
        } else {
          response.status(500).send('Major parameter must be CS, SWE');
        }
      })
      .catch((err) => {
        response.status(500).send(`${err.message}`);
      });
  }
}

export default StudentsController;
