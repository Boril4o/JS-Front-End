function getPreviousDay(year, month, day){
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
}

getPreviousDay(2016, 12, 1)