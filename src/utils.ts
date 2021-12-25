export function shuffle<T>(array: T[]) {
  return array.sort(() => Math.random() > 0.5 ? 1 : -1);
}

export function divisionArray<T>(array: T[], unit: number) {
  const unitCount = Math.max(unit, 1);
  const tempArray = [];
  for (let i = 0; i < Math.ceil(array.length / unitCount); i++) {
    tempArray[i] = array.slice(i * unitCount, (i * unitCount) + unitCount)
  }
  return tempArray;
}