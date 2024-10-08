export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsGrd = students.filter((arr) => arr.location === city);
  studentsGrd.map((array) => {
    const grade = newGrades.filter((arr) => arr.studentId === array.id);
    if (grade.length === 0) {
      const newgrade = array;
      newgrade.grade = 'N/A';
      return newgrade;
    } const newgrade = array; newgrade.grade = grade[0].grade; return newgrade;
  });
  return studentsGrd;
}
