export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !(set instanceof Set)) {
    throw new Error('not a string');
  }
  if (startString.length > 0) {
    const res = [];
    set.forEach((value) => {
      if (value.startsWith(startString)) {
        res.push(value.slice(startString.length));
      }
    });
    return res.join('-');
  }

  return '';
}
