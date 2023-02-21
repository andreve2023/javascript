class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hasMethod(key){
        let hash = 0;
        for (let i = 0; i < key.length ; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }
    set(key, value) {
        const address = this.hasMethod(key)
        if (!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key, value]);

        return this.data
    }
    get(key) {
        const address = this.hasMethod(key);
        const currentBocket = this.data[address];
        if (currentBocket){
            for (let i = 0; i < currentBocket.length ; i++) {
                if (currentBocket[i][0] === key){
                    return currentBocket[i][1]
                }
            }
        }
        return undefined
    }
}

const myHashTable = new HashTable(50);

myHashTable.set("andres", 2200)

myHashTable.set("juan", 5500)

console.log(myHashTable.get("andres"))