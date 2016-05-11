function Weather(){

  Weather.prototype.isStormy = function(){
    var value = Math.floor(Math.random()*6);
    return value === 0;
  };

}
