'use strict';
function Airport() {
  this._hanger = [];
}
  Airport.prototype.planes = function(){
    return this._hanger;
  };
  Airport.prototype.clearForLanding = function(plane) {
    if (this.isStormy()){
      throw new Error('it is too stomy to land')
    }
    this._hanger.push(plane);
  };

  Airport.prototype.clearForTakeoff = function(plane) {
    if (this.isStormy()){
      throw new Error('it is too stomy to take off');
    }
    this._hanger.pop(plane);
  }

  Airport.prototype.isStormy = function(){
    return false;
  }
