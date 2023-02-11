export function bubbleSort (array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const element = array[j]
        array[j] = array[j + 1]
        array[j + 1] = element
      }
    }
  }

  return array
}
