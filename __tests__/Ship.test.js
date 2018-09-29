/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');


describe('Ship', () => {
  describe('with ports and itinerary', () => {
    let hull;
    let calais;
    let itinerary;
    let ship;

    beforeEach(() => {
      hull = new Port('Hull');
      calais = new Port('Calais');
      itinerary = new Itinerary([hull, calais]);
      ship = new Ship(itinerary);
    });
    it('Can be made an instance of', () => {
      expect(ship).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
      expect(ship.currentPort).toBe(hull);
    });
    it('Gets added to a port on instantiation', () => {
      expect(hull.ships).toContain(ship);
    });
    describe('setSail', () => {
      it('can set sail', () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(hull.ships).not.toContain(ship);
      });

      it('can\'t sail further than its itinerary', () => {
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
      describe('dock', () => {
        it('can dock at a different port', () => {
          ship.setSail();
          ship.dock();
          expect(ship.currentPort).toBe(calais);
          expect(calais.ships).toContain(ship);
        });
      });
    });
  });
});
