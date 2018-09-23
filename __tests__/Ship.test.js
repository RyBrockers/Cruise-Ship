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

describe('setSail', () => {
    it('Can sail from a port', () => {
        const ship = new Ship('Hull');
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    })
})