function Weather(){

  Weather.prototype.isStormy = function(){
    var value = Math.floor(Math.random()*6);
    if(value === 0) {
      return true;
    } else if(value > 0) {
      return false;
    }
  };

}

var weather = new Weather();

console.log(weather.isStormy());
