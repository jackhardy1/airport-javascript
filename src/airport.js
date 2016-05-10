function Airport(weather) {

  CAPACITY = 1;

  this.planes = [];
  this.weather = weather;

  Airport.prototype.land = function(plane) {
    if(this.isFull()) {
      throw new Error("Capacity full");
    }
    if(this.weather.isStormy() === true) {
      throw new Error("Too stormy to land");
    }
    this.planes.push(plane);
    plane.landed(true);
  };

  Airport.prototype.takeoff = function(plane) {
    var i = this.planes.indexOf(plane);
    this.planes.splice(i, 1);
    plane.landed(false);
  };

  Airport.prototype.isFull = function(){
    return this.planes.length >= CAPACITY;
  };
}
