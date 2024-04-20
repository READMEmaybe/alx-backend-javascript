export default function updateGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.filter((grade) => grade.studentId === student.id);
      let grade = 'N/A';
      if (grades.length > 0) {
        grade = grades[0].grade;
      }
      return { ...student, grade };
    });
}
