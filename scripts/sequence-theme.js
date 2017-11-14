/**
 * This theme is powered by Sequence.js
 *
 * Author: Ian Lunn
 * Author URL: http://ianlunn.co.uk/
 *
 * Theme License: http://sequencejs.com/licenses/#free-theme
 * Sequence.js Licenses: http://sequencejs.com/licenses/
 *
 * Copyright © 2015 Ian Lunn Design Limited unless otherwise stated.
 */


var sequenceElement = document.getElementById("sequence");
var options = {
    startingStepAnimatesIn: true,
    autoPlay: true,
    autoPlayInterval: 4000,
    /* Make this the same as the animateCanvasDuration */
    phaseThreshold: 350,
    preloader: true,
    reverseWhenNavigatingBackwards: false,
    fadeStepWhenSkipped: false,
    autoPlayPauseOnHover: false
}
var mySequence = sequence(sequenceElement, options);


var sequenceElement2 = document.getElementById("sequence2");
var options2 = {
  animateCanvas: false,
  phaseThreshold: false,
  preloader: true,
  reverseWhenNavigatingBackwards: true
}
var mySequence = sequence(sequenceElement2, options2);