'use strict';
describe('Plane', function(){

  var plane;

  beforeEach(function(){
    plane = new Plane();
    
  });
    it('has landing function', function(){
      expect(plane.land).not.toBeUndefined()
    });
});
