function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right[0])
            result.push(left.shift());
        else
            result.push(right.shift());
    }

    return [...result, ...left, ...right];
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    return merge(
        mergeSort(arr.slice(0, mid)),
        mergeSort(arr.slice(mid))
    );
}

console.log(mergeSort([8,3,5,2,9]));