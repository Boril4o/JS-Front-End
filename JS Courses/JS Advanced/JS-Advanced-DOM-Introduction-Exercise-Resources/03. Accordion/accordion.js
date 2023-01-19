function toggle() {
    let extraText = document.getElementById('extra');
    let button = document.getElementsByClassName('button');

    if (button[0].textContent == 'More') {
        button[0].textContent = 'Less';
        extraText.style.display = 'block';
    }
    else {
        button[0].textContent = 'More';
        extraText.style.display = 'none';
    }
   
}