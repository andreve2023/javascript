import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

const getData = async (urlApi) => {
    const response = await fetch(urlApi);
    return await response.json()
}

const anotherFn = async (urlApi) => {
    try {
        // const products = await getData(`${urlApi}/products`);
        // const product = await getData(`${urlApi}/products/${products[0].id}`);
        // const category = await getData(`${urlApi}/categories/${product.category.id}`);
        //
        // console.log(products);
        // console.log(product.title);
        // console.log(category.name);
        return await getData(`${urlApi}/products`);
    }catch (error){
        console.error(error)
    }
}
