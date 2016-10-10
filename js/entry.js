function Entry(title, entry){
  this.title = title;
  this.entry = entry;
}



Entry.prototype.numberOfWords = function (sentence){
	var regEx =/[^a-z0-9]+/ig;
  var wordArray = sentence.split(regEx);
  return wordArray.length;
};

Entry.prototype.numberOfVowels = function (sentence) {
  var splitArray = sentence.split("");
  var reg = /[aeiou]/ig;
  var counter = 0;
  for(var i = 0; i < splitArray.length; i++){
    if (splitArray[i].match(reg)){
  	counter++;
    }
  }
  return counter;
};

Entry.prototype.numberOfConsonants = function (sentence) {
  var splitArray = sentence.split("");
  var reg = /[b-df-hj-np-tv-z]/ig;
  var counter = 0;
  for(var i = 0; i < splitArray.length; i++){
    if (splitArray[i].match(reg)){
    	counter++;
    }
   }

  return counter;

};

Entry.prototype.getTeaser = function (sentence) {
  var regEx =/[^a-z0-9]+/ig;
  var finalString = "";
  var wordArray = sentence.split(".");
  var firstSent = wordArray[0];
  var firstSentArray = firstSent.split(" ");
  if(firstSentArray.length <= 8) {
  	finalString = firstSentArray.join(" ") + ".";
  } else{
  	var taglineArray = firstSentArray.slice(0,8);
    finalString = taglineArray.join(" ") + "...";
  }
  return finalString;
};

exports.entryModule = Entry;
