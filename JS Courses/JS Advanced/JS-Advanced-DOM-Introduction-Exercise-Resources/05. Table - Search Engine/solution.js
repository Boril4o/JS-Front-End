function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let items = Array.from(document.querySelectorAll('tbody > tr'));
      let input = document.getElementById('searchField');

      let regex = new RegExp(input.value);
         items.map(e => {
            e.classList.remove('select');
            if (e.innerHTML.match(regex) !== null) {
                e.className = 'select';
            }
        });
        searchField.value = '';
   }
}