// Special thanks to Coding Artist's youtube channel for helping me to find an API and connect it to my log.
// Video can be found here (https://www.youtube.com/watch?v=bD8mmPxQ1F8&t=95s)

// identify API
const URL = "https://api.quotable.io/random";

// identifying variables
const $quote = $('.quote');
const $author = $('.author');
const $randomQuote = $('.randomQuote');

// event listener to define button click
$randomQuote.click('submit', getQuote);

// definition of function is to go to the JSON endpoint, then retrieve the quote
// content and then the author data and assign them to their respective places
// in the css box.
function getQuote(event) {

    $.ajax(URL).then(function(data) {
        $quote.text('"' + data.content + '"')
        $author.text('-' + data.author)
})
}