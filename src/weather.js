function Weather(){

  this.stormStatus = false;

  Weather.prototype.weatherGenerator = function(){
    var value = Math.floor(Math.random()*6);
    console.log(value);
    if(value === 0) {
      this.stormStatus = true;
    } else if(value > 0) {
      this.stormStatus = false;
    }
  };

}

weather = new Weather();

weather.weatherGenerator();
console.log(weather.stormStatus);
