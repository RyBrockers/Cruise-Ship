const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');


describe('Itinerary', () => {
  it('Can be made an instance of', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });


  it('Has a ports property', () => {
    const hull = new Port('Hull');
    const liverpool = new Port('Liverpool');

    const itinerary = new Itinerary([hull, liverpool]);
    expect(itinerary.ports).toEqual([hull, liverpool]);
  });
});
