
function Plane(){

  this.landedStatus = true;

  Plane.prototype.landed = function(status){
    this.landedStatus = status;
  };

}
