const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]
function distributeGifts(packOfGifts, reindeers) {
    let sumPack = 0, sumRein = 0, cajas = 0;

    for (let i = 0; i < packOfGifts.length ; i++) {
        sumPack = sumPack + packOfGifts[i].length
    }
    for (let i = 0; i < reindeers.length; i++) {
        sumRein = (2 * reindeers[i].length) + sumRein
    }
    for (let i = sumPack; i <= sumRein ; i+=sumPack) {
        cajas++
    }
    return cajas
}

const result = distributeGifts(packOfGifts, reindeers);

console.log(result)