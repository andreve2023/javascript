// import fetch from "node-fetch";
//
// const API = `https://api.escuelajs.co/api/v1/products`
//
// const getData = async () => {
//     try {
//         const response = await fetch(API);
//         return await response.json()
//     }catch (e) {
//         console.error(e)
//     }
// }
//
// const products = async () => {
//     const products = await getData();
//     console.log(products)
// }
// products()
//
/**********************************************************/

import axios from 'axios';
const API = `https://api.escuelajs.co/api/v1/products`;

const data = async () => {
    const info = (await axios.get(API)).data
    console.log(info)
}

data()
