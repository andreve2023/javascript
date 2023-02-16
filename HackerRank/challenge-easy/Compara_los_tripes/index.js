/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
let a = [17, 28, 30];
let b = [99, 16, 8]
function compareTriplets(a, b) {
    let aR = 0;
    let bR = 0;
    let array = []
    for (let j = 0; j < b.length ; j++) {
        if ( a[j] < b[j] )bR++
        else if(a[j] > b[j] )aR++
    }
    array.push(aR);
    array.push(bR)
    return array
}

console.log(compareTriplets(a, b))