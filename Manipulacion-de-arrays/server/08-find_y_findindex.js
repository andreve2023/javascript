const numbers = [1,30,49,29,10,13];

//el metodo find nos devuelbe solo un elemnto en caso de haberlo encontrado ya sea el elemnto o un objeto
//el metodo finIndex nos devuelve la posicion en el que se ecunetra ele elemnto y si no lo encuentra devuelve -1
// en caso de no encontrar nada nos devuelve un undefind

let rta = undefined
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 30) {
        rta = numbers[i]
        break
    }
}
// console.log(rta)

const rta1 = numbers.find(item => item === 30)
// console.log(rta1)

const products = [
    {
        name: "pizza",
        price: "12",
        id: "1"
    },
    {
        name: "burguer",
        price: "20",
        id: "2"
    },
    {
        name: "hot dog",
        price: "10",
        id: "3"
    },
    {
        name: "papas",
        price: "6",
        id: "4"
    }
]
const rta2 = products.find(item => item.id === '1')
console.log(rta2)
const rta3 = products.findIndex(item => item.id === '1')
console.log(rta3)