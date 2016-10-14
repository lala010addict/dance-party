var MakeGhostDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('ghostDancer');
  this.$node.css('background-image', "url(https://media.giphy.com/media/CbwWZzW7WVL1e/giphy.gif)");
  this.$node.mouseover(function(){  
    $(this).animate({"left":"+=70px"}, "slow");
    $(this).animate({"left":"-=70px"}, "fast");
  });
};

MakeGhostDancer.prototype = Object.create(MakeDancer.prototype);
MakeGhostDancer.prototype.constructor = MakeGhostDancer;
MakeGhostDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
};