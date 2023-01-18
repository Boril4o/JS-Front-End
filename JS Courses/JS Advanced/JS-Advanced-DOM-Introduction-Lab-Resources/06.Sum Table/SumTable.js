function sumTable() {
    let tableItems = document.querySelectorAll('tr td');
    let sum = 0;
    for (let i = 1; i < tableItems.length - 1; i += 2) {
        sum += Number(tableItems[i].textContent);
    }

    tableItems[tableItems.length - 1].textContent = sum;
}