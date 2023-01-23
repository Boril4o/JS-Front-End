function encodeAndDecodeMessages() {
    let main = document.getElementById('main');
    let receiverTextArea = document.getElementsByTagName('textarea')[1];

    main.addEventListener('click', function (event) {
        if (event.target.nodeName !== 'BUTTON') {
            return;
        }

        let messageRef = event.target.parentElement.querySelector('textarea');
        let message = String(messageRef.value);
        if (event.target.textContent === 'Encode and send it') {
            let encodeMessage = '';

            for (let i = 0; i < message.length; i++) {
                encodeMessage += String.fromCharCode(message.charCodeAt(i) + 1);
            }

            messageRef.value = '';
            receiverTextArea.value = encodeMessage;
        }
        else {
            let decodedMessage = '';
            for (let i = 0; i < message.length; i++) {
                decodedMessage += String.fromCharCode(message.charCodeAt(i) - 1);
            }

            messageRef.value = decodedMessage;
        }
    });
}