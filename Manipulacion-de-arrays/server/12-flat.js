const matriz = [
    [1,2,3],
    [4,5,6,[1,2]],
    [7,8,9]
]

//el metodo flat nos sirve para manipuar array de array como una matriz
let newArray = []
for (let i = 0; i <matriz.length ; i++) {
    if (Array.isArray(matriz[i])) {
        newArray.push(...matriz[i])
    }
}
// console.log(newArray)

const arrayNew = matriz.flat(3)
console.log(arrayNew)