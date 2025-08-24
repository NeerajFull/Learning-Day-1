
const arr = [10, 4, 5, 8, 6, 9, 11, 3];

function bubbleSort(arr) {
    for(let i = arr.length-2; i >= 0; i--) {
        for(let j = 0; j <= i; j++) {
            if(arr[j]  > arr[j+1]) {
                swap(j, j+1, arr);
            }
        }
    }    

    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let perfectIndex = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[perfectIndex] > arr[j]) {
                perfectIndex = j;
            }
        }
        swap(i, perfectIndex, arr);
    }

    return arr;
}

function insertionSort(arr) {
    let i = 1;
    while(i < arr.length) {
        const key = arr[i];
        for(let j = i-1; j >= 0; j--) {
            if(key < arr[j]) {
                swap(j, j+1 , arr);
            }
        }
        i++;
    }
    return arr;
}
function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(bubbleSort(arr));
console.log(selectionSort(arr));
console.log(insertionSort(arr));
