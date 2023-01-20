function solve() {
    let textArea = document.getElementById('input');
    let output = document.getElementById('output');

    let sentences = Array.from(textArea.value.split('.').filter(x => x.length > 0));
    for (let i = 0; i < sentences.length; i += 3) {
        let result = [];
        for (let j = 0; j < 3; j++) {
          if(sentences[i + j]) {
            result.push(sentences[i + j]);
          }
        }
        let paragraph = result.join('. ') + '.';
        output.innerHTML += `<p>${paragraph}</p>`;
    }
}