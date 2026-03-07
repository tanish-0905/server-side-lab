function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

let arr = [12, 34, 56, 78];
console.log(linearSearch(arr, 56));