function factory(library, orders) {
   let result = [];

   for (const {template, parts} of orders) {
        let order = Object.assign({}, template);

        for (const part of parts) {
            order[part] = library[part];
        }

        result.push(order);
   }

   return result;
}
