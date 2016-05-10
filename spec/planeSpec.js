describe('Plane',function() {

  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  describe('status by default', function(){
    it('landed is set to true by default', function(){
      expect(plane.landedStatus).toBe(true);
    });
  });

  describe('status can be changed', function(){
    it('is set to false when flying', function(){
      plane.landed(false);
      expect(plane.landedStatus).toBe(false);
    });
  });
  
});
