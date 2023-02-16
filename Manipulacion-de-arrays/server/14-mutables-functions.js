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
const myProducts = []

// const indexProduct = products.findIndex(item => item.id === update.id)
// if (indexProduct !== 1) {
//     myProducts.push(products[indexProduct]);
//     products.splice(indexProduct, 1)
// }
// console.log(products)
// console.log(myProducts)

//update
const products2 = [
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

const update = {
    id: "1",
    change: {
        price: 200,
        description: 'delicioso'
    }
}
const indexProduct2 = products2.findIndex(item => item.id === update.id);


products2[indexProduct2] = {
    ...products2[indexProduct2],
    ...update.change
}
console.log(products2)