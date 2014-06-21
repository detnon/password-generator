<!--
// Password generator
// By Sam 'phantomofthesoup' Detnon
-->
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
</head>
<script>
var PHRASES =  [ 'z', 'aw', 'oo', 'ow', 'oi', 'nk', 'ng', 'wh', 'th', 'sh', 'ch', 'str', 'a', 'e', 'i', 'o', 'u']


var generate = function(length){
  var result = ''

  while(result.length < length){
    // random selection over the array
    var phra = PHRASES[Math.floor(Math.random()*PHRASES.length)]; //(internet copypasta)
    result += phra
  }
    
  return '<p>' + result + '</p>' ;
}


var ask = function(){
  var size = prompt("How many Characters?")  

  console.log(generate(size))
}


$(document).ready(function(){
  ask(); 
});

</script>


</html>


