function solve(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    if (!validFaces.includes(face) && validSuits.includes(suit)) {
        throw new Error('Error')
    }

    return {
        toString() {
            let suitResult = '';
            switch (suit) {
                case 'S':
                suitResult = '\u2660';
            break;
            case 'H':
                suitResult = '\u2665';
            break;
            case 'D':
                suitResult = '\u2666';
            break;
            case 'C':
                suitResult = '\u2663';
            break;
            }

            return face + suitResult;
        }
    };
}

console.log(solve('1', 'C').toString())