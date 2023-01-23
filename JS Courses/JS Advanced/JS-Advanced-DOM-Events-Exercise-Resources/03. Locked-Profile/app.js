function lockedProfile() {
    let main = document.getElementById('main');
    main.addEventListener('click', function (event) {
        if (event.target.type === 'radio')
        {
            //TODO
        }
        
        if (event.target.nodeName !== 'BUTTON'){
            return;
        }

        let div = event.target.parentElement;

        let isLocked = div.querySelector("input").checked;
        if (isLocked) {
            return;
        }

        let info = div.querySelector('div');
        if (info.style.display === '') {
            info.style.display = 'block';
            event.target.innerText = 'Hide it';
        }
        else {
            info.style.display = '';
            event.target.innerText = 'Show more';
        }
    });
}