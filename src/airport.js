function Airport() {

  CAPACITY = 1;

  this.planes = [];

  Airport.prototype.land = function(plane) {
    if(this.isFull()) {
      throw new Error("Capacity full");
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


airport = new Airport();
console.log(airport.isFull());
plane = new Plane();
airport.land(plane);
console.log(airport.isFull());
