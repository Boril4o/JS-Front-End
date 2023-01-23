function attachEventsListeners() {
    let main = document.getElementsByTagName('main')[0];
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    main.addEventListener('click', convert);
    function convert(event) {
        if(event.target.nodeName !== 'INPUT') {
            return;
        }
        if(event.target.attributes['type'].value !== 'button') { 
            return;
        }

        let div = event.target.parentElement;
        let input = div.querySelector('input');
        let inputValue = Number(input.value);
        let inputId = input.id;
        
        switch (inputId) {
            case 'days':
                hoursInput.value = inputValue * 24;
                minutesInput.value = inputValue * 1444;
                secondsInput.value = inputValue * 86400;
                break;
            case 'hours':
                daysInput.value = inputValue / 24;
                minutesInput.value = inputValue * 60;
                secondsInput.value = inputValue * 3600;
                break;
            case 'minutes':
                daysInput.value = inputValue / 1440;
                hoursInput.value = inputValue / 60;
                secondsInput.value = inputValue * 60;
                break;
            case 'seconds':
                    daysInput.value = inputValue / 86400;
                    hoursInput.value = inputValue / 3600;
                    minutesInput.value = inputValue / 60;
                break;
        }
    }
}