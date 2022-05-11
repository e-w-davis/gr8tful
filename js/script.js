// Special thanks to Coding Artist's youtube channel for helping me to find an API and connect it to my log.
// Video can be found here (https://www.youtube.com/watch?v=bD8mmPxQ1F8&t=95s)

// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

// const url = "https://api.quotable.io/random";

// let author = document.getElementById("author");
// let quote = document.getElementById("quote");



// let randomQuote = () => {
//     fetch(url)
//         .then((data) => data.json())
//         .then((item) => {
//             console.log(item);

//         $quote.text(data.quote)
//         });
//     };

    
const URL = "https://api.quotable.io/random";

const $quote = $('.quote');
const $author = $('.author');
const $randomQuote = $('.randomQuote');

$randomQuote.click('submit', getQuote);

function getQuote(event) {
    
    event.preventDefault()

    $.ajax(URL).then(function(data) {
        console.log("Quote data is ready")
        console.log(data)

        $quote.text('"' + data.content + '"')
        $author.text('-' + data.author)
}, function(error) {
    console.log('something is wrong')
    console.log(error)
})
}
randomQuote();