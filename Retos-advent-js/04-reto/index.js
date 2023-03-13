const boxes1 = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]
const boxes2 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
]
const boxes3 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]
const boxes4 = [
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
]

function fitsInOneBox(boxes) {
    boxes.sort(
        (a, b) => (a.l - b.l) * (a.h - b.h) * (a.w - b.w)
    );
    return boxes.every((item) => {
        return item.l === item.h && item.l === item.w && item.w === item.h
    })
}


const res = fitsInOneBox(boxes1)
console.log(res)