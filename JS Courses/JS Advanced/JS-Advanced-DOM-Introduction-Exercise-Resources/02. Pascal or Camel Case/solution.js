function solve() {
    let text = document.getElementById('text');
    let namingConvension = document.getElementById('naming-convention');

    let wordsInText = text.value.split(' ');
    let result = 'Error!';
    if (namingConvension.value === 'Camel Case') {
        result = wordsInText[0].toLowerCase();

        for (let i = 1; i < wordsInText.length; i++) {
            result += wordsInText[i][0].toUpperCase() + wordsInText[i].substring(1);
        }
    }
    else if (namingConvension.value === 'Pascal Case') {
        result = '';
        for (const word of wordsInText) {
            result += word[0].toUpperCase() + word.substring(1).toLowerCase();
        }
    }

    let resultContainer = document.getElementById('result');
    resultContainer.textContent = result;
}