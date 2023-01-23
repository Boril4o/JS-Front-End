function addItem() {
    let input = document.getElementById('newItemText').value;
    let items = document.getElementById('items');

    let newElement = document.createElement('li');
    newElement.textContent = input;

    items.appendChild(newElement);
}