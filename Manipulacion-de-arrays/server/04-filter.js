const arrayOriginal = ['spray','limit','elite','exuberant']

const newArray = []
for (let i = 0; i <arrayOriginal.length ; i++) {
    const element = arrayOriginal[i]
    if (element.length >= 6) {
        newArray.push(element)
    }
}
// console.log(arrayOriginal)
// console.log(newArray)
const arrayNew = arrayOriginal.filter(data => data.length >= 6)
// console.log(arrayOriginal)
// console.log(arrayNew)

const orders = [
    {
        customerName: 'andres',
        total: 60,
        delivered: true
    },
    {
        customerName: 'juan',
        total: 160,
        delivered: false
    },
    {
        customerName: 'carlos',
        total: 120,
        delivered: true
    },
    {
        customerName: 'maria',
        total: 90,
        delivered: false
    }
]

const rta1 = orders.filter(data => data.delivered && data.total > 100)
const rta2 = (query) => {
    return orders.filter(data => {
        return data.customerName.includes(query)
    })
}
console.log(rta2('u'))