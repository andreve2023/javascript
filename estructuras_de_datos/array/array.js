// const array = ["Andres", "Diego", "juan"];

class Myarray {
    constructor() {
        this.length = 0
        this.data = {}
    }
    get(index){
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length+=1;
        return this.data
    }
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length -1];
        this.length-=1
        return lastItem
    }
    delete(indice) {
        const item = this.data[indice]
        this.shiftIndex(indice);
        return item
    }
    shiftIndex(indice) {
        for (let i = indice; i < this.length -1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length --
    }
    unshift(item){
        for (let i = this.length-1; i >= 0; i--) {
            this.data[i+1] = this.data[i]
        }
        this.data[0] = item
        this.length++
        return this.length
    }
    shift() {
        for (let i = 1; i < this.length ; i++) {
            this.data[i-1] = this.data[i]
        }
        delete this.data[this.length-1]
        this.length--
        return this.length
    }
}

const myArray = new Myarray();
myArray.push("Camila")
myArray.push("Juan")
myArray.push("andres")
myArray.unshift("Esteban")
myArray.shift()
console.log(myArray.data)



