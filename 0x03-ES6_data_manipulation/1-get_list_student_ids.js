export default function getListStudentsIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const indexes = array.map((array) => array.id);
  return indexes;
}
