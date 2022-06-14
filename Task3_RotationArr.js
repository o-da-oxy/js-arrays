function rotation(arr, num){
    let newIndex;
    let newArr = new Array(arr.length);
    let rotationRemainderOfDiv = num % arr.length;
    for(let i = 0; i < arr.length; i++){
        if(i < rotationRemainderOfDiv){
            newIndex = i + arr.length - rotationRemainderOfDiv;
        }
        else{
            newIndex = i - rotationRemainderOfDiv;
        }
        newArr[newIndex] = arr[i];
    }
    console.log(newArr.join(" "))
}
rotation([2,4,15,31],5);