var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  // var blinkyDancer = MakeDancer();
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.css("background-image", "url(http://gifdanceparty.giphy.com/dancers/bones.gif)");  
// var oldStep = this.step();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //var oldStep = MakeDancer.prototype.step.call(this);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
// var oldStep = this.step();
  //oldStep();

  MakeDancer.prototype.step.call(this);
  // blinkyDancer.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

