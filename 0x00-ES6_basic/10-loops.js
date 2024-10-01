export default function appendToEachArray(array, appendString) {
  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }
  return newArray;
}
