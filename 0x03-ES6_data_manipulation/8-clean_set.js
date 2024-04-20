export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  const newSet = [];
  for (const value of set) {
    if (value && value.startsWith(startString)) {
      newSet.push(value.slice(startString.length));
    }
  }
  return newSet.join('-');
}
