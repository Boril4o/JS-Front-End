function extract(content) {
    let contentItem = document.getElementById(content);
    let text = contentItem.innerText;

    let regex = new RegExp(/\([A-z ]+\)/g);
    let matches = text.matchAll(regex);

    let result = [];
    for (const match of matches) {
        result.push(String(match));
    }
    
    return result.join('; ');
}

