// API link1: https://type.fit/api/quotes
// API link2: https://jacintodesign.github.io/quotes-api/data/quotes.json
// API link3: https://zenquotes.io/


// GLOBAL BINDINGS

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

newQuote = () => {
    // picks a random quote from the quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // check if author field is blank then replace with unknown

    if (!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author;
    }
    
    // check quote length for styling

    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    
}

// Get quotes from API

async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // handle error
    }
}

// tweet quote
tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listeners

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);




// On Load

getQuotes();