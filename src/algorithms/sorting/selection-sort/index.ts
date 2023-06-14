export function selectionSort(array: number[]): number[] {
    for (let idx = 0; idx < array.length; idx++) {
        const left = array.slice(0, array.length - idx)

        const max = Math.max(...left)
        const index = left.indexOf(max)

        ;[array[left.length - 1], array[index]] = [max, array[left.length - 1]]
    }

    return array
}
