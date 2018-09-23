const Ship = require('../src/Ship.js');


describe('Ship', () => {
    it('Can be made an instance of', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })
    it('Has a starting port', () => {
        const ship = new Ship('Hull');
        expect(ship.startingPort).toBe('Hull');
    })
})