const Ship = function () {
    this.startingPort = 'Hull';
}


Ship.prototype.setSail = function setSail() {
    this.startingPort = null;
}




module.exports = Ship;