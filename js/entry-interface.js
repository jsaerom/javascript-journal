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
