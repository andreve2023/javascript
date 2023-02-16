let array = [1, 2, 3, 4, 10, 11]

function simpleArraySum(ar) {
    let cont = 0;
    ar.forEach(index => {
        cont += index
    })
    return cont
}

console.log (simpleArraySum(array));