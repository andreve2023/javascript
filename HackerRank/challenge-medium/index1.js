let arr = [7, 69, 2, 221, 8974]

function miniMaxSum(arr) {
    // Write your code here
    let num1 = 0;
    let num2 = 0;
    arr.sort()
    let l = arr.length;
    for(let i = 0, j = l - 1; i < l - 1; i++, j--){
        num1 += arr[i];
        num2 += arr[j];
    }
    console.log (num1, num2);
    
}
miniMaxSum(arr);