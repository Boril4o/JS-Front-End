function solve(commands){
    commands = [...commands];
    
    let result = [];
    for (let i = 0; i < commands.length; i++) {
        if (commands[i].toLowerCase() === 'add') {
            result.push(i + 1);
        }
        else if (commands[i].toLowerCase() === 'remove'){
            result.pop();
        }
    }

    if (result.length > 0) {
        console.log(result.join('\n'));
    }
    else {
        console.log('Empty');
    }
}

solve(['remove', 'remove', 'remove']);

