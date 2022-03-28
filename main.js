const aCode = 97;
const zCode = 122;

const Quotes = [
    ["Which do I prefer? Chess or sex? It depends on the position.", "Boris Spassky"],
    ["Are you kidding ??? What the **** are you talking about man ? You are a biggest looser i ever seen in my life ! You was doing PIPI in your pampers when i was beating players much more stronger then you! You are not proffesional, because proffesionals knew how to lose and congratulate opponents, you are like a girl crying after i beat you! Be brave, be honest to yourself and stop this trush talkings!!! Everybody know that i am very good blitz player, i can win anyone in the world in single game! And Wesley So is nobody for me, just a player who are crying every single time when loosing, ( remember what you say about Firouzja ) !!! Stop playing with my name, i deserve to have a good name during whole my chess carrier, I am Officially inviting you to OTB blitz match with the Prize fund! Both of us will invest 5000$ and winner takes it all! I suggest all other people who's intrested in this situation, just take a look at my results in 2016 and 2017 Blitz World championships, and that should be enough... No need to listen for every crying babe, Tigran Petrosyan is always play Fair ! And if someone will continue Officially talk about me like that, we will meet in Court! God bless with true! True will never die ! Liers will kicked off...", "Tigran L. Petrosian"],
    ["The ability to checkmate with two bishops is the sign of a gentleman. The ability to checkmate with a bishop and a knight is the sign of a fucking nerd lmao.", "Paul Morphy"],
    ["I get more upset at losing at other things than chess. I always get upset when I lose at Monopoly.", "Magnus Carlsen"],
    ["I literally don't care.", "Hikaru Nakamura"],
    ["You guys, this speed run is different because the elo gets refunded, the elo gets refunded so it's different from just smurfing. With the elo being refunded you guys it's not smurfing, it's different because the elo is being refunded you guys.", "Hikaru Nakamura"],
    ["I would bring a hammer.", "Jan Hein Donner, when asked how he would prepare for a match against a computer"],
    ["Look, I saw rook a4, I just didn't like it.", "Young Elo"],
    ["If I don't kill myself tonight I gonna live thousand years.", "Ivan Sokolov"],
    ["Here's my calculation: He takes, we take, he makes a stupid move and we checkmate", "Kugelbuch"],
    ["The women aren't really very good players, I mean I guess I could give every one of them a knight and still win easily. [...] They're terrible chess players, I mean some of them are better than others, you know, but they may not play in men's tournaments, I don't know why, I guess they're just not so smart.", "Bobby Fischer"],
    ["I don't think they [women] should mess in intellectual affairs, you know what I mean? They should keep strictly to the home.", "Bobby Fisher"],
    ["[The United States are] a farce controlled by dirty, hook-nosed, circumcised Jew bastards.", "Bobby Fisher"],
    ["I was going to do a book about the first prearranged Karpov-Kasparov match, '84-'85. But the God-damn Jews have stolen my entire file on that.", "Bobby Fisher"],
    ["I object to being called a chess genius because I consider myself to be an all around genius who just happens to play chess, which is rather different. A piece of garbage like Kasparov might be called a chess genius, but he's like an idiot savant. Outside of chess he knows nothing. ", "Bobby Fisher"],
    ["I'm very concerned because I think the Jews want to drive the elephants to extinction because the trunk of an elephant reminds them of an uncircumcised penis. I'm absolutely serious about that... Jews are sick, they're mental cases. ", "Bobby Fischer"],
    ["I studied that first Karpov-Kasparov match for a year and a half before I cracked it, what they were doing, and discovered that it was all prearranged move-by-move. There's no doubt of it in my mind. ", "Bobby Fischer"]];

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
