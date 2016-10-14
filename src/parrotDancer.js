var MakeParrotDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('parrotDancer');
  this.$node.css('background-image', "url(http://i.imgur.com/tXvfPv3.gif)");

  var $el = $(this.$node);
  setInterval(function() {
	  $el.animate({"left":"+=5px"}, "fast");
	  $el.animate({"left":"-=6px"}, "fast");
	  $el.animate({"top":"-=10px"}, "fast");
		$el.animate({"top":"+=10px"}, "fast");
  }, 50);
};

MakeParrotDancer.prototype = Object.create(MakeDancer.prototype);
MakeParrotDancer.prototype.constructor = MakeParrotDancer;
MakeParrotDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
};