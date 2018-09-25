/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');


describe('Ship', () => {
  it('Can be made an instance of', () => {
    const port = new Port('Hull');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port);
  });
  it('can\'t sail further than its itinerary', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
  it('Gets added to a port on instantiation', () => {
    const hull = new Port('Hull');
    const itinerary = new Itinerary([hull]);
    const ship = new Ship(itinerary);
    expect(hull.ships).toContain(ship);
  });
});

describe('setSail', () => {
  it('can set sail', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');

    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
  });
});

describe('dock', () => {
  it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
});
