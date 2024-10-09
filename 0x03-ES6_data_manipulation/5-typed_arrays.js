/**
 * Creates an ArrayBuffer with an Int8 value at a specific position using DataView.
 *
 * @param {number} length - The length of the ArrayBuffer.
 * @param {number} position - The position at which to set the value.
 * @param {number} value - The Int8 value to set.
 * @returns {DataView} - The DataView of the ArrayBuffer with the value set.
 * @throws {Error} - Throws an error if the position is outside the range of the array.
 */
export default function createInt8TypedArray(length, position, value) {
  // Check if the position is valid
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer
  const buffer = new ArrayBuffer(length);
  // Create a DataView for the ArrayBuffer
  const dataView = new DataView(buffer);

  // Set the value at the specified position using DataView
  dataView.setInt8(position, value);

  // Return the DataView
  return dataView;
}
