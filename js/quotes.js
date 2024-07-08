const quotes = [
    {
        quote: "Gratitude is not only the greatest of virtues, but the parent of all others.",
        author: "Cicero",
    },
    {
        quote: "Advice is seldom welcome.",
        author: "Lord Chesterfield",
    },
    {
        quote: "Wheresoever you go, go with all your heart.",
        author: "Confucius",
    }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;