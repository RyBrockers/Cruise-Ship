/* globals describe it expect */
const Port = require('../src/Port.js');


let port;
describe('Port', () => {
  beforeEach(() => {
    port = new Port('Hull');
  });
  it('Can be made an instance of', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('Has a name property', () => {
    expect(port.name).toBe('Hull');
  });
  it('Can add a ship to the port', () => {
    const ship = jest.fn();
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
  it('Can remove a ship from the port', () => {
    const goldenhind = jest.fn();
    const silverhind = jest.fn();

    port.addShip(goldenhind);
    port.addShip(silverhind);
    port.removeShip(silverhind);

    expect(port.ships).toEqual([goldenhind]);
  });
});
