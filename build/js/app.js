(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function(){

  $("#entry").submit(function(event){
    event.preventDefault();
    var title = $("#title").val();
    var entry = $("#words").val();

    var newPost = new Entry(title, entry);
    var tagline = newPost.getTeaser(newPost.entry);
    var numWords = newPost.numberOfWords(newPost.entry);
    var vowels = newPost.numberOfVowels(newPost.entry);
    var consonants = newPost.numberOfConsonants(newPost.entry);

    $("#tagline").append("<li>" + tagline + "</li>");
    $("#numWords").append("<li>" + numWords + "</li>");
    $("#consonants").append("<li>" + consonants + "</li>");
    $("#vowels").append("<li>" + vowels + "</li>");
    $("#blogPost").append("<li>" + newPost.title + "</li>" +
                        "<p>" + newPost.entry + "</p>");
  });
});

},{"./../js/entry.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
