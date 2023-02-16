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

const ordenes = orders.map(data => data.total)
// console.log(orders)
// console.log(ordenes)

// const ordenes1 = orders.map(data => {
//     data.tax = .19
//     return data
// })


const ordenes2 = orders.map(data => {
    return {
        ...data,
        tax: .19
    }
})
console.log(orders)
console.log(ordenes2)