export function quickSort(array: number[]): number[] {
    if(array.length < 2) {
        return array
    }

    const index = Math.floor(array.length / 2)
    const currentItem = array[index]

    const more = []
    const less = []

    for (let idx = 0; idx < array.length; idx++) {
        if(idx === index) {
            continue;
        }

        if(array[idx] > currentItem){
            more.push(array[idx])
        } else {
            less.push(array[idx])
        }
        
    }


    return [
        ...quickSort(less),
        currentItem,
        ...quickSort(more)
    ]
}
