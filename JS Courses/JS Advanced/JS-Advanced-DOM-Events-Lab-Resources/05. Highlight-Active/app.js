function focused() {
    let inputs = document.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', focus);
        inputs[i].addEventListener('blur', blur);
    }

    function focus(event) {
        event.srcElement.parentElement.classList.add('focused');
    }

    function blur(event) {
        event.srcElement.parentElement.classList.remove('focused');
    }
}