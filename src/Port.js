const Port = function Port(name) {
  this.name = name;
  this.ships = [];
};

Port.prototype.addShip = function addShip(ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function removeShip(ship) {
  this.ships.indexOf(ship);
  this.ships.splice(ship, 1);
};


module.exports = Port;
