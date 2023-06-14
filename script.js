$(document).ready(() => {
    $.getJSON('https://raw.githubusercontent.com/eliasgit32/JQuery-Random-Quote-Machine/main/quotes.json',
    (data) => {
        const quotes = data;
        displayRandomQuote(quotes); 
        $('#new-quote').click(() => {
            displayRandomQuote(quotes)
        } );  
    })

    //Add event on click to tweet the quote
    $('#tweet-quote').on('click', (event) => {
        event.preventDefault();
        let tweetText = $('#text').text() + '\n' + $('#author').text();
        $(this).attr('href', "https://twitter.com/intent/tweet?text="+encodeURIComponent(tweetText));
        window.open($(this).attr('href'), '_blank');
    });
})


function getRandomQuote (quotes) {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    var result = {
        quote: randomQuote.quote,
        author: randomQuote.author
    }

    return result;
}

function displayRandomQuote(quotes) {
    let randomQuote = getRandomQuote(quotes);
    $('#text').text(' ' + randomQuote.quote + '  ');
    $('#author').text('- '+randomQuote.author);
}