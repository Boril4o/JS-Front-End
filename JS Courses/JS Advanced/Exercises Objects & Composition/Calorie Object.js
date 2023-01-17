function solve(args) {
    let obj = {};
    for (let i = 0; i < args.length; i+=2) {
        let nameOfProp = args[i];
        let value = args[i + 1];

        obj[nameOfProp] = Number(value);
    }

    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138',

'Apple', '52']);