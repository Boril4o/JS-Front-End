function solve(numberAsText, cmd1, cmd2, cmd3, cmd4, cmd5){
    let number = Number(numberAsText);

    let array = [cmd1, cmd2, cmd3, cmd4, cmd5];
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 'chop':
                number /= 2;
                console.log(number)
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number -= number * 0.20;
                console.log(number);
                break;
        }
    }
};

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');