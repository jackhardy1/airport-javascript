describe('Airport', function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
  });

  describe('landPlane', function(){
    it('a plane can land and be stored in the airport', function(){
      spyOn(plane, 'landedStatus').and.returnValue(true);
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });

    it('a plane cannot land if stormy', function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function(){airport.land(plane);}).toThrowError("Too stormy to land");
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
