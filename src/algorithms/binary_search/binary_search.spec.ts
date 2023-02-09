import { binarySearch } from './'

function getRandomArrayNumber (length: number, max: number): number[] {
  return [...new Set(new Array(length).fill(Math.floor(Math.random() * max)))]
}

describe('binarySearch function', () => {
  test('length array 20', () => {
    const mockArray = getRandomArrayNumber(20, 20)
    expect(binarySearch(mockArray, 5)).toBe(mockArray.indexOf(5))
  })

  test('length array 100', () => {
    const mockArray = getRandomArrayNumber(100, 100)
    expect(binarySearch(mockArray, 25)).toBe(mockArray.indexOf(25))
  })

  test('on null', () => {
    const mockArray = getRandomArrayNumber(100, 100)
    expect(binarySearch(mockArray, 250)).toBeNull()
  })
})
