describe('Weather', function() {

  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  describe('status', function(){
    it("can be clear", function(){
      spyOn(Math, "random").and.returnValue(5);
      expect(weather.isStormy()).toEqual(false);
    });
  });

  describe('status', function(){
    it("can be stormy", function(){
      spyOn(Math, "random").and.returnValue(0);
      expect(weather.isStormy()).toEqual(true);
    });
  });

});
