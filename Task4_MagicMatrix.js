function isMagic(arr){
    let bool = true;
    let sumRow = new Int32Array(arr.length);
    let sumCol = new Int32Array(arr[0].length);
    for (let i = 0; i < arr.length; i++){
        let a = arr[i];
        for (let k = 0; k < a.length; k++) {
            sumRow[i] += a[k]; //массив сумм каждой строки
            sumCol[k] += a[k]; //массив сумм каждого столбца
        }
    }
    let temp;
    for (let i = 0; i < sumRow.length - 1; i++) {
        temp = sumRow[i];
        if (temp != sumRow[i + 1]) {
            bool = false;
            break;
        }
    }
    for (let i = 0; i < sumCol.length - 1; i++) {
        temp = sumCol[i];
        if (temp != sumRow[i + 1]) {
            bool = false;
            break;
        }
    }
    console.log(bool);
}
isMagic(
    [[1,0,0],
    [0,1,0],
    [0,0,1]]
    );