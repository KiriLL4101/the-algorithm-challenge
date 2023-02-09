export function binarySearch (arr: number[], num: number): number | null {
  if (num < 0) return null
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const guess = arr[mid]
    if (guess === num) {
      return mid
    }

    if (guess > num) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return null
}
