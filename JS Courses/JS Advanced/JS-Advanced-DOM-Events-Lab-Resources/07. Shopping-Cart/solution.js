function solve() {
   let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
   let textArea = document.getElementsByTagName('textarea')[0];
   let products = [];
   shoppingCart.addEventListener('click', function (event){
      if (event.target.nodeName !== 'BUTTON') {
         return;
      }

      if (event.target.classList[0] === 'checkout') {
         let totalPrice = products.reduce((prevValue, currValue) => prevValue + currValue.productPrice, 0);
         let list = [];
         for (const item of products) {
            let isUnique = true;
            for (const currentName of list) {
               if (item.productName === currentName) {
                  isUnique = false;
                  break;
               }
            }

            if (isUnique) {
               list.push(item.productName);
            }
         }

         textArea.innerHTML = `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}`

         let buttons = Array.from(document.getElementsByTagName('button'));
         buttons = buttons.map(x => x.disabled = true);
         return;
      }

      let product =  event.target.parentElement.parentElement;
      let productName = event.target.parentElement.parentElement.querySelectorAll('.product-title')[0].textContent;
      let productPrice = Number(event.target.parentElement.parentElement.querySelectorAll('.product-line-price')[0].textContent);

      products.push({
         productName: productName,
         productPrice: productPrice
      });

      textArea.textContent += `${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   });
}