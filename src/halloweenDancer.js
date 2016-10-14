var MakeHalloweenDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('halloweenDancer');
  this.$node.css('background-image', "url(http://i.giphy.com/O26lIShuVLDwc.gif)");
};

MakeHalloweenDancer.prototype = Object.create(MakeDancer.prototype);
MakeHalloweenDancer.prototype.constructor = MakeHalloweenDancer;
MakeHalloweenDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
};