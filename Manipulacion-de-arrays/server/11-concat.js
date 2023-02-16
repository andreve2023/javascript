const array = [1,1,2,2];
const array2 = [3,3,4,4]
//el metodo concat fusiona 2 arrays retornando un array buevo sin modificar los originales
let newArray = [...array] //el express operacion( ...array) hace que se copie el array sin la referencia en memoria
for (let i = 0; i < array2.length ; i++) {
    newArray.push(array2[i])
}
// console.log('for',newArray)

let arrarConcat = array.concat(array2)
// console.log('concat',arrarConcat)
// console.log(array)

//otra forma de concatenar dos array es con express operacion
const rta3 = [...array, ...array2]
console.log(rta3)