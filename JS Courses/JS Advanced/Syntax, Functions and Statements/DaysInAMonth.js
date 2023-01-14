function getDays(month, year){
    let date = new Date(year, month, 0);
    return date.getDate();
}

console.log(getDays(2, 2021));