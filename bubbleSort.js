function bubbleSort(arr) {
    if(arr.length === 1 || arr.length === 0) {
        return arr;
    }
    var i = arr.length;
    while(i > 0) {
        for(var j = 0; j < i; j++) {
            if(arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
            console.log(arr);
        }
        i--;
    }
    return arr;
}

console.log(bubbleSort([6,4,2,4,1,9,5]));