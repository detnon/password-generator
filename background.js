var PHRASES =  []

// gets stings from the file and uses them to generate a password
var getStrings = function(){
  $.get('strings.txt', function(data){
    PHRASES = data.split(' ');
    $('#pw').text(generate(8))
  })
}

//Takes an input of length and generates a password 
var generate = function(length){
  var result = ''
  while(result.length < length){
    // random selection over the array
    var phra = PHRASES[Math.floor(Math.random()*PHRASES.length)];// Math that handles the random password generation
    result += phra
  }
  result = result.substring(0,length) //trundicate string to ensure password length is the same as the user input
  return result 
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

  $('#form-id').submit(function(e){ 
  e.preventDefault(); 
  var length = $("#pass-length").val();
  $('#pw').text(generate(length));
 });

    $('#form-id2').submit(function(e){ 
  e.preventDefault(); 
  var length = (8);
  $('#pw').text(generate(length));
 });

})



