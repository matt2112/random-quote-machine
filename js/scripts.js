var quotes = [];

function Quote(quote, author) {
    this.words = quote;
    this.author = author;
}

var addTwitterBtn = function (text) {
    var tweetBtn = $('<a></a>')
        .addClass('nya')
        .addClass('twitter-share-button')
        .attr('href', 'https://twitter.com/intent/tweet')
        .attr('data-url', ' ')
        .attr('data-size', 'large')
        .attr('data-text', text)
    $('#tweetContainer').append(tweetBtn);
    twttr.widgets.load();
}

$.getJSON("https://api.myjson.com/bins/5ckr3", function (data) {
    $.each(data, function (key, val) {
        quotes.push(new Quote(val.quote, val.author));
    });
    var firstQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $("#words").hide();
    $("#author").hide();
    $("#words").html(firstQuote.words);
    $("#author").html("- " + firstQuote.author);
    $("#words").fadeIn();
    $("#author").fadeIn();
    addTwitterBtn(firstQuote.words + " - " + firstQuote.author);
});

$("#newQuote").on("click", function () {
    $("#words").hide();
    $("#author").hide();
    var anotherQuote = quotes[Math.floor(Math.random() * quotes.length)];

    $("#words").html(anotherQuote.words);
    $("#author").html("- " + anotherQuote.author);
    $("#words").fadeIn();
    $("#author").fadeIn();

    $('#tweetContainer iframe').remove();
    addTwitterBtn(anotherQuote.words + " - " + anotherQuote.author);
});