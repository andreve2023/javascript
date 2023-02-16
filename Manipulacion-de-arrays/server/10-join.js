const elemnts = ['fire','air','water']

//el metodo join lo que hace es cocatenar en un strin lo que ahi en un array

let rtaFinal = ''
const separator = '--'
for (let i = 0; i < elemnts.length ; i++) {
    rtaFinal = rtaFinal + elemnts[i] + separator
}
// console.log(rtaFinal)
const rta1 = elemnts.join('--')
// console.log(rta1)

const title = "Curso de Manipulacion de Arrays"

let arrayTitle = title.split(' ')
let string = arrayTitle.join('/')
console.log(string)

