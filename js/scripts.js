var quotes = [];

function Quote(quote, author) {
    this.words = quote;
    this.author = author;
}

$.getJSON("https://api.myjson.com/bins/5ckr3", function (data) {
    $.each(data, function (key, val) {
        quotes.push(new Quote(val.quote, val.author));
    });
    console.log(quotes);
    var firstQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $("#words").html(firstQuote.words);
    $("#author").html(firstQuote.author);
});

$("#newQuote").on("click", function () {
    $("#words").hide();
    $("#author").hide();
    var anotherQuote = quotes[Math.floor(Math.random() * quotes.length)];

    $("#words").html(anotherQuote.words);
    $("#author").html("- " + anotherQuote.author);
    $("#words").fadeIn();
    $("#author").fadeIn();
});

$('#tweetBtn a').remove();
var tweet = $("#words").html();
var tweetBtn = $('<a></a>')
    .addClass('twitter-share-button')
    .attr('href', 'http://twitter.com/share')
    .attr('data-url', 'http://codepen.io/matt2112')
    .attr('data-text', tweet);
$('#tweetBtn').append(tweetBtn);

$('#newQuote').on('click', function (ev) {
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