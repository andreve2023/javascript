const numeros = [1,3,2,3,4];

const rta = numeros.reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 1
    }else {
        obj[item] = obj[item] +1
    }
    return obj
}, {});

console.log(rta)

//output
// {
//     1: 1,
//     3: 2,
//     2: 1,
//     4: 1
// }

const data = [
    {
        name: 'andres',
        level: 'hight'
    },
    {
        name: 'lucia',
        level: 'medium'
    },
    {
        name: 'juan',
        level: 'slow'
    },
    {
        name: 'carlos',
        level: 'hight'
    },
    {
        name: 'david',
        level: 'medium'
    },
]

const rta1 = data
    .map( item => item.level)
    .reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 1
    }else {
        obj[item] = obj[item] +1
    }
    return obj
}, {});

console.log(rta1)