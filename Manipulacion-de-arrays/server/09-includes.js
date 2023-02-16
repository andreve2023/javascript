const pets = ['cat','dog','bat'];

// el metodo includes verifica si un elemnto se enuentra de un array y si se encuentra devuel un true o false
let bool = false;

for (let i = 0; i < pets.length ; i++) {
    if (pets[i]=== 'sasxax'){
        bool = true
        break
    }
}
// console.log(bool)
const rta1 = pets.includes('cat')
console.log(rta1)