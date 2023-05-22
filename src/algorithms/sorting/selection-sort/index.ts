export function selectionSort(array: number[], startAt = 0): number[] {
  if (startAt === array.length) {
    return array
  }

  let smallest: number | null = null
  let smallestIndex = 0

  for (let i = startAt; i < array.length; i++) {
    if (smallest === null || smallest > array[i]) {
      smallest = array[i]
      smallestIndex = i
    }
  }

  ;[array[startAt], array[smallestIndex]] = [array[smallestIndex], array[startAt]]

  return selectionSort(array, startAt + 1)
}
