var PHRASES =  []


var generate = function(length){
  var result = ''
  while(result.length < length){
    // random selection over the array
    var phra = PHRASES[Math.floor(Math.random()*PHRASES.length)]; //(internet copypasta)
    result += phra
  }

  result = result.substring(0,length) //trundicate string to ensure password length is the same as the user input
  return result 
}


var getStrings = function(){
  $.get('sounds.txt', function(data){
    console.log(data);
    PHRASES = data.split(' ');
    $('#pw').text(generate(8) )

  })
}
// JQUERY BEGINS HERE \\


//Generate text on page load


$(document).ready(function(){
  getStrings();
  
  $('.options').click(function(){
    $('.panel').slideToggle('fast');
  });

  $('.more').click(function(){
    $('.pick').slideToggle('fast');
  });

})



