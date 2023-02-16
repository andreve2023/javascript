const totals  = [1,2,3,4,5]

let cont = 0
for (let i = 0; i < totals.length; i++) {
    cont += totals[i]
}
console.log(cont)

//el REDUCE recibe 2 parametros el primero es
//una arrow functions y el segundo parametro es el estado inicial
const rta = totals.reduce((cont, item) => cont + item, 0)
console.log(rta)



