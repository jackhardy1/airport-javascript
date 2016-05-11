// 'use strict';
describe('Plane', function(){

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeoff']);
  });
    it('has landing function', function(){
      plane.land(airport);
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
    it('has a take off function', function(){
      plane.land(airport);
      plane.takeoff();
      expect(airport.clearForTakeoff).toHaveBeenCalledWith();
    });
});
