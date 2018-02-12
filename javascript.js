var amyQuotes = [
    "Vulnerable people are powerful people. Opening your heart and sharing it means you\'re going to get so much love in your life.",
    "We\'re so bombarded with noise and activity and headphones and gossip and jackhammers... it\'s hard to get quiet and to quiet our minds, so you wanting that is totally natural.",
    "If you can sleep, breathe, work hard, wish for the best and do everything you can to prepare, I bet you\'ll do well - as well as you can. And that\'s all anybody can ask for.",
    "Don\'t start a scene where two people are talking about jumping out of a plane. Start the scene having already jumped. If you are scared, look into your partner\'s eyes. You will feel better.",
    "Girls have to fight against a lot of the same stuff we did growing up... peer pressure, exploitation, etc. But what worries me the most is this trend that caring about something isn\'t cool. That it\'s better to comment on something than to commit to it. That it\'s so much cooler to be unmotivated and indifferent.",
    "You have to remember that goodbyes are temporary because no one ever really leaves and nothing lasts forever. People are always with us, because they are in our hearts and in our memory. The only thing we can depend on is change... Life is just a series of moments \- a string of pearls that make up the necklace of your life and so every once in a while, to complete the circle, you need to end a chapter.",
    "We don\'t want to be afraid to make a choice because we\'re afraid to make a mistake because most decisions aren\'t final. Feelings change all the time. You can always change your mind and taking risks and making choices is what makes life so exciting because we never know what\'s going to happen. Every day something new comes our way.",
    "Great people do things before they\'re ready. They do things before they know they can do it... Doing what you\'re afraid of, getting out of your comfort zone, taking risks like that - that is what life is. You might be really good. You might find out something about yourself that\'s really special and if you\'re not good, who cares? You tried something. Now you know something about yourself."
];


function newQuote(){
var randomNumber = Math.floor(Math.random() * (amyQuotes.length));
document.getElementById('displayQuote').innerHTML = amyQuotes[randomNumber];

}

function tweetQuote(){
    var tweetText = document.getElementById('displayQuote').innerText;
    var tweetLink = 'https://twitter.com/share?text=' + encodeURIComponent(tweetText);
    window.open(tweetLink);
}
//this is a comment