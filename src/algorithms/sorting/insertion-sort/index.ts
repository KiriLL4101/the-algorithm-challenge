export function insertionSort(array: number[]): number[] {
    for (let idx = 0; idx < array.length; idx++) {
        let j = idx + 1

        while (j > 0 && array[j] < array[j - 1]) {
            ;[array[j], array[j - 1]] = [array[j - 1], array[j]]
            j--
        }
    }

    return array
}
