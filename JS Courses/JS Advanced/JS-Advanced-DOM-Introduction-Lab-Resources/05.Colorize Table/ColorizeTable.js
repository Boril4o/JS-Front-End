function colorize() {
    let tableItems = document.getElementsByTagName('tr');
    for (let i = 1; i < tableItems.length; i++) {
        if (i % 2 === 1) {
            tableItems[i].style.backgroundColor = 'Teal';
        }
    }
}