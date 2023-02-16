
//este metodo flatmap lo que hace es una fusionde metodos entre map y flat

const users = [
    {
        userId: 1,
        userName: "tom",
        attributes: ['nice', 'cute']
    },
    {
        userId: 2,
        userName: "mike",
        attributes: ['lovely']
    },
    {
        userId: 3,
        userName: "niko",
        attributes: ['nice', 'cool']
    }
]

const rta = users.map(data => data.attributes).flat()
const rta1 = users.flatMap(data => data.attributes)
console.log(rta1)