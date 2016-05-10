describe('Weather', function() {

  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  describe('status', function(){
    it("can be clear", function(){
      spyOn(Math, "random").and.returnValue(5);
      weather.weatherGenerator();
      expect(weather.stormStatus).toBe(false);
    });
  });

  describe('status', function(){
    it("can be stormy", function(){
      spyOn(Math, "random").and.returnValue(0);
      weather.weatherGenerator();
      expect(weather.stormStatus).toBe(true);
    });
  });

});
