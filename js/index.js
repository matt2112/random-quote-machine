function Quote(words, author) {
  this.words = words;
  this.author = author;
}

var quote1 = new Quote("In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.", "Douglas Adams");
var quote2 = new Quote("Anyone who is capable of getting themselves made President should on no account be allowed to do the job.", "Douglas Adams");
var quote3 = new Quote("Rock journalism is people who can't write interviewing people who can't talk for people who can't read.", "Frank Zappa");
var quote4 = new Quote("A mind is like a parachute. It doesn't work if it is not open.", "Frank Zappa");
var quote5 = new Quote("Education is what remains after one has forgotten what one has learned in school.", "Albert Einstein");
var quote6 = new Quote("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein");
var quote7 = new Quote("If you can't explain it simply, you don't understand it well enough.", "Albert Einstein");
var quote8 = new Quote("Live as if you were to die tomorrow; learn as if you were to live forever.", "Mahatma Gandhi");
var quote9 = new Quote("First they ignore you, then they laugh at you, then they fight you, then you win.", "Mahatma Gandhi");
var quote10 = new Quote("Why can't I just eat my waffle?", "Barack Obama");
var quote11 = new Quote("When we hear a very sad song, it makes us realise that we do share this kind of common human experience, and we're all kind of bonded in sadness and melancholia and depression.", "Steven Wilson");
var quote12 = new Quote("If we don't believe in freedom of expression for people we despise, we don't believe in it at all.", "Noam Chomsky");
var quote13 = new Quote("The more you can increase fear of drugs and crime, welfare mothers, immigrants and aliens, the more you control all the people.", "Noam Chomsky");
var quote14 = new Quote("Too many pieces of music finish too long after the end.", "Igor Stravinksy");
var quote15 = new Quote("Music is the silence between the notes.", "Claude Debussy");
var quote16 = new Quote("At the age of six I wanted to be a cook. At seven I wanted to be Napoleon. And my ambition has been growing steadily ever since.", "Salvador Dali");
var quote17 = new Quote("Every child is an artist. The problem is how to remain an artist once he grows up.", "Pablo Picasso");
var quote18 = new Quote("First thing we do, let's kill all the lawyers.", "William Shakespeare");
var quote19 = new Quote("'I'm bored' is a useless thing to say. You live in a great, big, vast world that you've seen none percent of.", "Louis C.K.");
var quote20 = new Quote("A lie gets halfway around the world before the truth has a chance to get its pants on.", "Winston Churchill");

var quotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10, quote11, quote12, quote13, quote4, quote15, quote16, quote17, quote18, quote19, quote20];

var anotherQuote = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("words").innerHTML = anotherQuote.words;
document.getElementById("author").innerHTML = "- " + anotherQuote.author;

document.getElementById("newQuote").onclick = function() {
  $("#words").hide();
  $("#author").hide();
  var anotherQuote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("words").innerHTML = anotherQuote.words;
  document.getElementById("author").innerHTML = "- " + anotherQuote.author;
  $("#words").fadeIn();
  $("#author").fadeIn();

}

$('#tweetBtn a').remove();
tweet = document.getElementById("words").innerHTML;
var tweetBtn = $('<a></a>')
  .addClass('twitter-share-button')
  .attr('href', 'http://twitter.com/share')
  .attr('data-url', 'http://codepen.io/matt2112')
  .attr('data-text', tweet);
$('#tweetBtn').append(tweetBtn);

$('#newQuote').on('click', function(ev) {
  tweet = document.getElementById("words").innerHTML;
  ev.preventDefault();
  // Remove existing iframe
  $('#tweetBtn iframe').remove();
  // Generate new markup
  var tweetBtn = $('<a></a>')
    .addClass('twitter-share-button')
    .attr('href', 'http://twitter.com/share')
    .attr('data-url', 'http://codepen.io/matt2112')
    .attr('data-text', tweet);
  $('#tweetBtn').append(tweetBtn);
  twttr.widgets.load();
});