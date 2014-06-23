<!--
// Password generator
// By Sam 'phantomofthesoup' Detnon
-->

var PHRASES =  [ 'z', 'aw', 'oo', 'ow', 'oi', 'nk', 'ng', 'wh', 'th', 'sh', 'ch', 'str', 'a', 'e', 'i', 'o', 'u']


var generate = function(length){
  var result = ''

  while(result.length < length){
    // random selection over the array
    var phra = PHRASES[Math.floor(Math.random()*PHRASES.length)]; //(internet copypasta)
    result += phra
  }
  
  result = result.toString();

  return result 
}


//var ask = function(){
 // var size = prompt("How many Characters?")  

  //generate(8)

//} THIS HAS BEEN COMMENTED OUT, INPUT MIGHT BE HANDLED DIFFERENTLY LATER.


// JQUERY BEGINS HERE \\

$(document).ready(function(){
  $('#pw').text(generate(8) )

});

