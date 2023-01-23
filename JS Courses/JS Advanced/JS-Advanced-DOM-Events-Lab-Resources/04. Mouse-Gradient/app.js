function attachGradientEvents() {
    let gradient = document.getElementById('gradient').addEventListener('mousemove', getPercentage);

    function getPercentage(event) {
        let result = document.getElementById('result');
        result.textContent = String(Math.floor(event.offsetX / event.toElement.offsetWidth * 100)) + '%';
    }
}