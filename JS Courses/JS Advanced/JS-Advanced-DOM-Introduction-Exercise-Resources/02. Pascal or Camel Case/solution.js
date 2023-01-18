function solve() {
    let text = document.getElementById('text');
    let namingConvension = document.getElementById('naming-convention');

    let wordsInText = text.value.split(' ');
    let result = 'Error!';
    if (namingConvension.value === 'Camel Case') {
        result = 'Result: ';
        for (let i = 0; i < wordsInText.length; i++) {
            if(i > 0) {
              result += wordsInText[i][0].toUpperCase() + wordsInText[i].substring(1);
            }
            else {
              result += wordsInText[i].toLowerCase();
            }
        }
    }
    else if (namingConvension.value === 'Pascal Case') {
        result = 'Result: ';
        for (const word of wordsInText) {
            result += word[0].toUpperCase() + word.substring(1).toLowerCase();
        }
    }

    let resultContainer = document.getElementsByClassName('result-container');
    resultContainer[0].innerText = result;
}