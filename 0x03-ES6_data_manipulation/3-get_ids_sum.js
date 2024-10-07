export default function getStudentIdsSum(array) {
  const arr = array.map((arr) => arr.id);
  const reduced = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return reduced;
}
