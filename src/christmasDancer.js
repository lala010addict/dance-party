var MakeChristmasDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('christmasDancer');
  this.$node.css('background-image', "url(http://i.giphy.com/CeVecpOiU4fDO.gif)");
};

MakeChristmasDancer.prototype = Object.create(MakeDancer.prototype);
MakeChristmasDancer.prototype.constructor = MakeChristmasDancer;
MakeChristmasDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
};