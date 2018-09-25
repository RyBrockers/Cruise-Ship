/* globals describe it expect */
const Port = require('../src/Port.js');

describe('Port', () => {
  it('Can be made an instance of', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('Has a name property', () => {
    const port = new Port('Hull');
    expect(port.name).toBe('Hull');
  });
  it('Can add a ship to the port', () => {
    const port = new Port('Hull');
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
  it('Can remove a ship from the port', () => {
    const port = new Port('Dover');
    const goldenhind = {};
    const silverhind = {};

    port.addShip(goldenhind);
    port.addShip(silverhind);
    port.removeShip(silverhind);

    expect(port.ships).toEqual([goldenhind]);
  });
});
