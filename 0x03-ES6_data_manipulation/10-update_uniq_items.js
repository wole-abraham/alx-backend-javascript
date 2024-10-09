export default function updateUniqueItems(map) {
  const maps = map;
  if (maps instanceof Map) {
    for (const key of maps.keys()) {
      if (maps.get(key) === 1) {
        maps.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return maps;
}
