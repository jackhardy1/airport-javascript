describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe('landPlane', function(){
    it('a plane can land and be stored in the airport', function(){
      spyOn(plane, 'landedStatus').and.returnValue(true);
      airport.land(plane);
      expect(airport.planes).toContain(plane);

    });
  });

  describe('takeoff', function(){
    it('a plane can take off', function(){
      spyOn(plane, 'landedStatus').and.returnValue(true);
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planes).not.toContain(plane);
    });
  });

  describe('capacity', function(){
    it("plane cannot land if capacity is full", function(){
      airport.land(plane);
      expect(function(){airport.land(plane);}).toThrowError("Capacity full");
    });
  });
});
