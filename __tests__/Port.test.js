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
});
