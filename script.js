const quotes = {
    inspiration: [
        "The best way to predict the future is to invent it. - Alan Kay",
        "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "You miss 100% of the shots you don’t take. - Wayne Gretzky",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt"
    ],
    science: [
        "The important thing is not to stop questioning. Curiosity has its own reason for existing. - Albert Einstein",
        "In the middle of difficulty lies opportunity. - Albert Einstein",
        "To invent, you need a good imagination and a pile of junk. - Thomas Edison",
        "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
        "The science of today is the technology of tomorrow. - Edward Teller",
        "What we know is a drop, what we don’t know is an ocean. - Isaac Newton",
        "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge. - Stephen Hawking"
    ],
    motivation: [
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Act as if what you do makes a difference. It does. - William James",
        "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
        "Everything you’ve ever wanted is on the other side of fear. - George Addair",
        "Opportunities don't happen, you create them. - Chris Grosser",
        "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
        "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett"
    ],
    philosophy: [
        "The unexamined life is not worth living. - Socrates",
        "To be, or not to be, that is the question. - William Shakespeare",
        "I think, therefore I am. - René Descartes",
        "The only thing I know is that I know nothing. - Socrates",
        "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
        "The greatest wealth is to live content with little. - Plato",
        "The mind is everything. What you think you become. - Buddha"
    ]
};

let currentCategory = 'all'; 
let currentIndex = 0;  
let fontSize = 20;  

function updateQuote() {
    const category = document.getElementById('category').value;
    currentCategory = category;
    currentIndex = 0;
    displayQuote();
}

function displayQuote() {
    const quotesArray = currentCategory === 'all'
        ? [].concat(...Object.values(quotes))
        : quotes[currentCategory];
    
    if (quotesArray.length === 0) {
        document.getElementById('quote').innerText = "No quotes available.";
        return;
    }

    document.getElementById('quote').innerText = quotesArray[currentIndex];
}

function prevQuote() {
    const quotesArray = currentCategory === 'all'
        ? [].concat(...Object.values(quotes))
        : quotes[currentCategory];
    
    if (quotesArray.length === 0) return;

    currentIndex = (currentIndex - 1 + quotesArray.length) % quotesArray.length;
    displayQuote();
}

function nextQuote() {
    const quotesArray = currentCategory === 'all'
        ? [].concat(...Object.values(quotes))
        : quotes[currentCategory];
    
    if (quotesArray.length === 0) return;

    currentIndex = (currentIndex + 1) % quotesArray.length;
    displayQuote();
}

function randomQuote() {
    const quotesArray = currentCategory === 'all'
        ? [].concat(...Object.values(quotes))
        : quotes[currentCategory];
    
    if (quotesArray.length === 0) return;

    currentIndex = Math.floor(Math.random() * quotesArray.length);
    displayQuote();
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function changeFontSize(amount) {
    fontSize += amount;
    document.getElementById('quote').style.fontSize = `${fontSize}px`;
}
