/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');



describe('Ship', () => {
    it('Can be made an instance of', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })
    it('Has a starting port', () => {
        const port = new Port("Hull")
        const ship = new Ship(port);
        expect(ship.currentPort).toBe(port);
    })
})

describe('setSail', () => {
    it('Can sail from a port', () => {
        const port = new Port('Hull')
        const ship = new Ship(port);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    })
})

describe('dock', () => {
    it('Can dock at different ports', () => {
        const liverpool = new Port('Liverpool');
        const ship = new Ship(liverpool);
        const calais = new Port('Calais');
        ship.dock(calais);
        expect(ship.currentPort).toBe(calais)
    })
})