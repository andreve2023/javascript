function suma(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(5, 5, suma));

setTimeout(() => {
    console.log("Hola javascript")
}, 3000);

function saludo(nombre) {
    console.log(`hola ${nombre}`)
}
setTimeout(saludo, 3000, 'andres')