const numbers = [1,30,49,29,10,13];

//el metodo EVERY dice que todos los elementos deben
//cumplir la condicion y tambien devuelve un booleano si ellos cumplen con esa condicion

let rta = true
for (let i = 0; i < numbers.length ; i++) {
    if (numbers[i] >= 40) {
        rta = false
    }
}
// console.log(rta)

const rta1 = numbers.every(item => item <= 40)
console.log(rta1)