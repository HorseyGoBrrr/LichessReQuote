const aCode = 97;
const zCode = 122;

const Quotes = [["If I don't kill myself tonight I gonna live thousand years.", "Ivan Sokolov"],
    ["Look, I saw rook a4, I just didn't like it.", "Young Elo"],
    ["I would bring a hammer.", "Jan Hein Donner, when asked how he would prepare for a match against a computer"],
    ["I literally don't care.", "Hikaru Nakamura"],
    ["You guys, this speed run is different because the elo gets refunded, the elo gets refunded so it's different from just smurfing. With the elo being refunded you guys it's not smurfing, it's different because the elo is being refunded you guys.", "Hikaru Nakamura"],
    ["The women aren't really very good players, I mean I guess I could give every one of them a knight and still win easily. [...] They're terrible chess players, I mean some of them are better than others, you know, but they may not play in men's tournaments, I don't know why, I guess they're just not so smart.", "Bobby Fischer"],
    ["Here's my calculation: He takes, we take, he makes a stupid move and we checkmate", "Kugelbuch"]];

function generateIndex(text, modulo) {
    let sum = 0;
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);

        if (charCode < aCode || charCode > zCode) {
            continue;
        }
        sum += text.charCodeAt(i) - aCode;
    }
    return sum % modulo;
}

function CheckContentLoaded() {
    let quote = document.querySelector(".pull-quote");

    if (quote === null) {
        return;
    }
    let quoteText = quote.childNodes[0];
    let authorText = quote.querySelector("footer");

    let index = generateIndex(quoteText.textContent, Quotes.length);

    quoteText.textContent = Quotes[index][0];
    authorText.textContent = Quotes[index][1];

    clearInterval(interval);
}

let interval = setInterval(CheckContentLoaded, 100);