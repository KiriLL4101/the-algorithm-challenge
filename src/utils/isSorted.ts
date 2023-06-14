export function isSorted(array: number[]): boolean {
    for (let idx = 1; idx < array.length; idx++) {
        if(array[idx] < array[idx - 1]){
            return false
        }
    }

    return true
}