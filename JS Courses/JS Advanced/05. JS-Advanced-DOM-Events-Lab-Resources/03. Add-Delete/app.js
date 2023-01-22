function addItem() {
    let input = document.getElementById('newItemText').value;
    let items = document.getElementById('items');

    let li = document.createElement('li');

    let span = document.createElement('span');
    span.textContent = input;

    let a = document.createElement('a');
    a.textContent = '[Delete]';
    a.setAttribute('href', '#');
    a.style.color = 'red';
    
    a.addEventListener('click', deleteElement);

    function deleteElement() {
        a.parentElement.remove();
    }

    li.appendChild(span);
    li.appendChild(a);
    items.appendChild(li);
}