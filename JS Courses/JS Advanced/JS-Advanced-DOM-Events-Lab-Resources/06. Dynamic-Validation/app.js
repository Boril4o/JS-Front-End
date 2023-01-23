function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', validateEmail);

    function validateEmail(event) {
        let email = input.value;
        let regex = new RegExp(/([a-z]+@[a-z]+[.][a-z]+)/);
        let result = regex.exec(email);

        if (result == null) {
            input.classList.add('error');
        }
        else {
            input.classList.remove('error');
        }
    }
}