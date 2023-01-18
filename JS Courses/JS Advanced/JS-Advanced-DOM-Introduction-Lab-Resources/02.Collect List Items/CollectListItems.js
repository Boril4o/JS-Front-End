function extractText() {
    let items = document.getElementsByTagName('li');    
    let textArea = document.getElementById('result');

    let result = '';
    for (const item of items) {
        result += item.textContent + '\n';
    }

    textArea.textContent = result;
}