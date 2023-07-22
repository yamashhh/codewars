interface Candidate {
  number: number;
  i: number;
  j: number;
}

export function smallest(n: number): number[] {
  // your code
  const nAsStringArray = [...n.toString()];
  const candidates: Candidate[] = [];
  for (let i = 0; i < nAsStringArray.length; i++) {
    const removed = structuredClone(nAsStringArray);
    const digitToRemove = removed.splice(i, 1)[0];
    for (let j = 0; j <= removed.length; j++) {
      const inserted = structuredClone(removed);
      inserted.splice(j, 0, digitToRemove);
      candidates.push({
        number: Number(inserted.join("")),
        i,
        j,
      });
    }
  }
  candidates.sort((a, b) => a.number - b.number);
  const smallest = candidates[0];
  return [smallest.number, smallest.i, smallest.j];
}
