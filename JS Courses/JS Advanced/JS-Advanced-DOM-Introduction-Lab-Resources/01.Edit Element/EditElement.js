function editElement(ref, match, replacer) {
    let text = String(ref.textContent);

    text = text.replace(match, replacer);

    ref.textContent = text;
}