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


// o(n)

function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

//0(1)

function findNth(arr, n){
    console.log(arr[n]);
}

//0(n)

function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}

// 0(n^2)

function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}