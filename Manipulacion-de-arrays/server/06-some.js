const numbers = [1,2,3,4,5];
let bool = false
for (let i = 0; i < numbers.length ; i++) {
    if (numbers[i]%2===0) {
        bool = true
        break;
    }
}

// console.log(bool)
// some return true o false si por lo menos uno de ellos se cumple
const rta = numbers.some(item => item % 2 === 0)
// console.log(rta)
const orders = [
    {
        customerName: 'andres',
        total: 60,
        delivered: true
    },
    {
        customerName: 'juan',
        total: 160,
        delivered: false
    },
    {
        customerName: 'carlos',
        total: 120,
        delivered: true
    },
    {
        customerName: 'maria',
        total: 90,
        delivered: false
    }
]

const rta1 = orders.some(item => item.delivered)
// console.log(rta1)

const dates = [
    {
        starDate: new Date(2021,1,1,10),
        endDate: new Date(2021,1,1,10),
        title: "cita de trabajo"
    },
    {
        starDate: new Date(2021,1,1,15),
        endDate: new Date(2021,1,1,30),
        title: "cita con mi jefe"
    },
    {
        starDate: new Date(2021,1,1,20),
        endDate: new Date(2021,1,1,21),
        title: "cena"
    }
]

const newAppointment = {
    starDate: new Date(2021,1,1,19),
    endDate: new Date(2021,1,1,20,30),
}

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(item => {
        return areIntervalsOverlapping(
            {start: item.starDate, end: item.endDate},
            {start: item.starDate, end: newDate.endDate}

        )
    })
}
console.log(isOverlap(newAppointment))