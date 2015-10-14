var MakeTurtleDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('turtleDancer');
  this.$node.css('background-image', "url(https://media.giphy.com/media/Ql00VGAfnJrig/giphy.gif)");
  this.$node.mouseover(function(){  
    $(this).animate({"left":"+=70px"}, "slow");
    $(this).animate({"left":"-=70px"}, "fast");
  });
};

MakeTurtleDancer.prototype = Object.create(MakeDancer.prototype);
MakeTurtleDancer.prototype.constructor = MakeTurtleDancer;
MakeTurtleDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
};