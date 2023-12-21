// Api link1: https://type.fit/api/quotes
// Api link2: https://jacintodesign.github.io/quotes-api/data/quotes.json

// GLOBAL BINDINGS
let apiQuotes = [];

newQuote = () => {
    // picks a random quote from the quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
    
}

// Get quotes from API

async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes[12]);
        newQuote();
    } catch (error) {
        // handle error
    }
}

// On Load

getQuotes();