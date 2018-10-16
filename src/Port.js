(function exportPort() {
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
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}());
