function deleteByEmail() {
    let emails = document.querySelectorAll('#customers td:nth-child(2)');
    let email = document.getElementsByName('email')[0].value;
    let result = document.getElementById('result');

    for (const item of emails) {
        if(item.textContent === email) {
            item.parentElement.remove();
            result.textContent = 'Deleted.';
            return;
        }
    }

    result.textContent = 'Not found.';
}