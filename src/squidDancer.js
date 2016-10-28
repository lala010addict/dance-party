var MakeSquidDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('squidDancer');
  this.$node.css('background-image', "url(https://media.giphy.com/media/3o6ZtgnmZDZeAshxYY/source.gif)");
};

MakeSquidDancer.prototype = Object.create(MakeDancer.prototype);
MakeSquidDancer.prototype.constructor = MakeSquidDancer;
MakeSquidDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
};
