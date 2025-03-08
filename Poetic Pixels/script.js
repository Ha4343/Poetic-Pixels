const quotes = [
    "“Breathe in the quiet moments.”",
    "“Soft hearts create the strongest echoes.”",
    "“Golden hour is a state of mind.”",
    "“The moon is beautiful, isn't it?”",
    "“Lost in a dream of lavender skies.”",
    "“Stars shine brighter when you're looking up.”"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
