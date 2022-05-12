// Special thanks to Coding Artist's youtube channel for helping me to find an API and connect it to my log.
// Video can be found here (https://www.youtube.com/watch?v=bD8mmPxQ1F8&t=95s)
    
const URL = "https://api.quotable.io/random";

const $quote = $('.quote');
const $author = $('.author');
const $randomQuote = $('.randomQuote');

$randomQuote.click('submit', getQuote);

function getQuote(event) {
    
    event.preventDefault()

    $.ajax(URL).then(function(data) {
        $quote.text('"' + data.content + '"')
        $author.text('-' + data.author)
})
}

randomQuote();