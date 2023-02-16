let holidays = ['01/06', '04/01', '12/25']
const year = 2023

function countHours(year, holidays) {
    let extras = 0;
    for(let i = 0; i <= holidays.length-1; i++) {
        const date = new Date(holidays[i].concat(`/${year}`));       
        if(date.getDay()!== 0 && date.getDay()!== 6){
            extras++
        }else {
            null
        }
    }
    return extras * 2
}

let result = countHours(year, holidays);
console.log(result);

