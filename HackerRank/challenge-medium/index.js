function plusMinus(arr) {
    let a = 0;
    let b = 0;
    let c = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0) a++
        else if(arr[i] < 0) b++
        else c++
    }
    console.log ((a /arr.length).toFixed(6))
    console.log ((b /arr.length).toFixed(6))
    console.log ((c /arr.length).toFixed(6))
}
let arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr)