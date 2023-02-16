const promise = new Promise((resolve, reject) => {
    resolve('hey')
})

const cows = 9;

const countCow = new Promise((resolve, reject) => {
    if (cows > 10){
        resolve(`We have ${cows} cows on the farm`)
    }else {
        reject("there is not cows on the farm")
    }
})

countCow.then((result) => {
    console.log(result)
}).catch((error) => {
    console.error(error)
}).finally(() => {
    console.log("finally")
})
/*********************************************************************************/