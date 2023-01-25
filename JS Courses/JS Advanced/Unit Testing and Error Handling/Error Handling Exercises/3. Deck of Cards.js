function printDeckOfCards(cards) {

    function createCard (face, suit){
    
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];
    
        if (!validFaces.includes(face) && validSuits.includes(suit)) {
            throw new Error('Error')
        }

        switch (suit) {
        case 'S':
            suit = '\u2660';
        break;
        case 'H':
            suit = '\u2665';
        break;
        case 'D':
            suit = '\u2666';
        break;
        case 'C':
            suit = '\u2663';
        break;
        }
    
        return {
            face: face,
            suit: suit,
            toString() {
                return face + this.suit;
            }
        };
    }

    let result = [];
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let suit = card[card.length - 1];
        let face = card.slice(0, card.length - 1);

        let createdCard;
        try {
            createdCard = createCard(face, suit);
        } catch (error) {
            console.log(`Invalid card: ${face + suit}`);
            return;
        }
        result.push(createdCard.face + createdCard.suit);
    }

    console.log(result.join(' '));
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);