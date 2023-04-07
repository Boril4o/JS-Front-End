function solve(...params) {
    const input = params[0];

    const numOfPeaces = Number(input[0]);
    let pieces = [];

    for (let index = 1; index <= numOfPeaces; index++) {
        const piece = String(input[index]).split('|');
        pieces.push({
            piece: piece[0],
            composer: piece[1],
            key: piece[2]
        });
    }

   for (let index = numOfPeaces + 1; index < input.length; index++) {
        const command = String(input[index]);

        if (command === 'Stop') {
           for (const item of pieces) {
                console.log(`${item.piece} -> Composer: ${item.composer}, Key: ${item.key}`);
           }
           break;
        }

        const commandSplitted = command.split('|');

        if (commandSplitted[0] === 'Add') {
            const piece = {
                piece: commandSplitted[1],
                composer: commandSplitted[2],
                key: commandSplitted[3]
            };

            if (pieces.some(p => p.piece === piece.piece)) {
                console.log(`${piece.piece} is already in the collection!`);
                continue;
            }

            pieces.push(piece);
            console.log(`${piece.piece} by ${piece.composer} in ${piece.key} added to the collection!`);
        }
        else if (commandSplitted[0] === 'Remove') {
            const piece = commandSplitted[1];

            if (!pieces.some(p => p.piece === piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                continue;
            }

            const filterPieces = pieces.filter(p => p.piece !== piece);
            pieces = filterPieces;
            console.log(`Successfully removed ${piece}!`)
        }
        else if (commandSplitted[0] === 'ChangeKey') {
            const piece = commandSplitted[1];
            const newKey =  commandSplitted[2];

            if (!pieces.some(p => p.piece === piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                continue;
            }

            const indexOfPiece = pieces.findIndex(p => p.piece === piece);
            pieces[indexOfPiece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`)
        }
   }
}

solve([ '3', 'Fur Elise|Beethoven|A Minor', 'Moonlight Sonata|Beethoven|C# Minor', 'Clair de Lune|Debussy|C# Minor', 'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven|C# Minor', 'Remove|Clair de Lune', 'ChangeKey|Moonlight Sonata|C# Major', 'Stop' ]);