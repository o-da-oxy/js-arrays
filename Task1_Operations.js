function changeArr(arr){
    let sourseSum = 0;
    let changedSum = 0;
    for(let i = 0; i < arr.length; i++){
        sourseSum += arr[i];
        if(arr[i] % 2 == 0){
            arr[i] += i;
            changedSum += arr[i];
        }
        else{
            arr[i] -= i;
            changedSum += arr[i];
        }
    }
    let arrayStr;
    arrayStr = arr.join(",");
    console.log(`[${arrayStr}]`);
    console.log(sourseSum);
    console.log(changedSum);
}
changeArr([-5,11,3,0,2])