function search() {
   let items = document.querySelectorAll('#towns li');
   let input = document.getElementById('searchText');
   let result = document.getElementById('result');

   let count = 0;
   for (let i = 0; i < items.length; i++) {
      if(items[i].textContent.includes(input.value)) {
         count++;
         items[i].style.fontWeight = 'bold';
         items[i].style.textDecoration = 'underline';
      }
   }

   result.textContent = `${count} matches found`;
}
