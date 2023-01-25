const { sum } = require('../4. Sum of Numbers');
const { expect } = require('chai');

describe('sum of numbers', () => {
    it('should take array of numbers as an argument', () => {
        //Arrange
        let array = [1, 24, 45, 6];

        //Act
        let result = sum(array);

        //Assert
        expect(result).is.null;
    });

    it('should sum numbers from array', () =>{
        //Arrange
        let array = [1, 4, 5, 6, 10, 20];

        //Act
        let result = sum(array);

        //Assert
        expect(result).to.be.equal(46);
    } )
})