function Airport() {

  this.planes = [];

  Airport.prototype.land = function(plane) {
    this.planes.push(plane);
    plane.landed(true);
  };

  Airport.prototype.takeoff = function(plane) {
    var i = this.planes.indexOf(plane);
    this.planes.splice(i, 1);
    plane.landed(false);
  };
}
