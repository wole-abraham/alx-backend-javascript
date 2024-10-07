export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students) || typeof city !== 'string') {
    throw new TypeError('students should be array and city be string');
  }

  const array = students.filter((student) => student.location === city);
  return array;
}
