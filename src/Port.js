const Port = function Port(name) {
  this.name = name;
  this.ships = [];
};

Port.prototype.addShip = function addShip(ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function removeShip(ship) {
  const shipOrder = this.ships.indexOf(ship);
  this.ships.splice(shipOrder, 1);
};


module.exports = Port;
