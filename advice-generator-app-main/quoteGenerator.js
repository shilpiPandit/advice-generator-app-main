var quotes=[
    '"The purpose of our lives is to be happy."',
    '"Life is what happens when you are busy making other plans."',
    '"Get busy living or get busy dying."',
    '"You only live once, but if you do it right, once is enough."',
    '"Be kind, for everyone you meet is fighting a harder battle."',
    '"Be kind whenever possible. It is always possible."',
    '"Kindness is choosing to acknowledge and celebrate the beauty in others,regardless of whether or not they can find it in themselves."',
    '"Kindness makes a fellow feel good whether it’s being done to him or by him."',
    '"No act of kindness, no matter how small, is ever wasted."',
    '"Tenderness and kindness are not signs of weakness and despair, but manifestations of strength and resolution."',
    '"Kind people are the best kind of people."',
    '"My religion is very simple. My religion is kindness.',
    '"Forget injuries; never forget kindness.""',
    '"Be mindful. Be grateful. Be positive. Be true. Be kind."',
    '"Life is short but there is always time for courtesy."',
    '"Give yourself some kindness today until you’re filled and pass it on."',
    '"Let us practice random kindness and acts of senseless beauty to all we meet."',
    '"True beauty is born through our actions and aspirations and in the kindness we offer to others."',
    '"Kindness gives birth to kindness."',
    '"A little madness a little kindness makes for happiness."',
    '"No one has ever become poor by giving."',
    '"Kindness is not a business. True kindness expects nothing in return and should never act with conditions."',
    '"You cannot do a kindness too soon, for you never know how soon it will be too late."',
    '"When you show people kindness and respect, despite petty differences, you are bringing positive vibes into your life and into the lives of others."',
    '"Today you can embrace kindness, practice compassion, stand up for justice, talk to strangers, ask for help, offer hope and listen with your whole heart."',
    '"Three things in human life are important: the first is to be kind; the second is to be kind; and the third is to be kind."',
    '"What wisdom can you find that is greater than kindness"',
    '"Kindness quotes to remind of the importance of this virtue"',
    '"Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom."',
    '"Kindness extended, received, or observed beneficially impacts the physical health and feelings of everyone involved."',
    '"The love, kindnesses, and value we have given authentically to others will be our remaining treasures at the end of life."',
    '"But remember, boy, that a kind act can sometimes be as powerful as a sword."',
    '"A kind gesture can reach a wound that only compassion can heal."',
    '"The simplest acts of kindness are by far more powerful then a thousand heads bowing in prayer."',
    '"Kind hearts are the gardens. Kind thoughts are the roots. Kind words are the blossoms. Kind deeds are the fruits."',
    '"Your acts of kindness are iridescent wings of divine love, which linger and continue to uplift others long after your sharing."',
    '"Remember there’s no such thing as a small act of kindness. Every act creates a ripple with no logical end."',
    '"Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love."',
]
var countEl=document.getElementById("advice_count");
var buttonEl=document.getElementById("diceButton");
var quoteEl=document.getElementById("quotations");

let currentQuote= 0;
function loadQuote(){
    const currentQuoteLoad=quotes[currentQuote];
    quoteEl.innerHTML=currentQuoteLoad;
    currentQuote++;
}

buttonEl.addEventListener("click",()=>
{
    if(currentQuote<38){
        loadQuote();
        countEl.innerHTML= currentQuote;
    }else{
        quoteEl.innerHTML="<<***Out of quotes***>>"
    }
}
)