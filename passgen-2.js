//
// Password generator
// By Sam 'phantomofthesoup' Detnon
//


var PHRASES =  [ 'z', 'aw', 'oo', 'ow', 'oi', 'nk', 'ng', 'wh', 'th', 'sh', 'ch', 'str', 'a', 'e', 'i', 'o', 'u']


var generate = function(length){
	var result = ''

	while(result.length < length){
		// random selection over the array
		var phra = PHRASES[Math.floor(Math.random()*PHRASES.length)]; //(internet copypasta)
		result ++ phra
	}
		
		return result;
}


var ask = function(){
  console.log("How many characters?")
  var size = readline()  

  console.log(generate(size))
}