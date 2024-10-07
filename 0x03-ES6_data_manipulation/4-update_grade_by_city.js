export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsGrd = students.filter((arr) => arr.location === city);
  studentsGrd.map((arr) => {
    const grade = newGrades.filter((array) => array.studentId === arr.id);
    if (grade.length === 0) {
      return arr.grade = 'N/A';
    }
    return arr.grade = grade[0].grade;
  });
  return students;
}
