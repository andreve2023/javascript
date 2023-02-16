import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/ap/v1';

function fetchData(urlApi) {
    return fetch(urlApi).then(response => {
        return response.json();
    }).then(data =>{
        console.log(data)
    }).catch(err => console.error(err))
}

//console.log(fetchData(`${API}/products`))
// fetchData(`${API}/products`)
// fetchData(`${API}/products`)
//     .then(result => result.json())
//     .then(response => {
//     console.log(response)
// }).catch(error => console.log(error))

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         return fetchData(`${API}/products/${products[0].id}`)
// }).then(response => response.json())
//     .then(product => {
//         console.log(product.title)
//     return fetchData(`${API}/categories/${product.category.id}`)
// }).then(response => response.json())
//     .then(categorie => {
//     console.log(categorie.name)
// }).catch(err => console.log(err))