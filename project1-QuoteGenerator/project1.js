//https://www.youtube.com/watch?v=5fb2aPlgoys&t=4271s
//1:12
// Key Concepts for Project
//document.querySelector
//addEventListener
//Math Object
//innerText

//variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

//array
//this could start as an empty array as well
const quotes = [
    {
        quote: 'First quote, G Jesus',
        person: 'Arsenal'
    },
    {
        quote: 'Second quote, Haaland',
        person: 'Man City'
    },
    {
        quote: 'Third quote, H Kane',
        person: 'Spurs'
    },
    {
        quote: 'Fourth quote, Salah',
        person: 'Liverpool'
    },
    {
        quote: 'Fifth quote, M Mount',
        person: 'Chelsea'
    },
    {
        quote: 'Six quote, Ronaldo',
        person: 'Man United'
    },
];

//empty array to host the message
secondArray = []
//apply eventL
btn.addEventListener('click', function(){
    //math
    let random = Math.floor(Math.random() * quotes.length);

    //grab quote document
    //is assignig the innerText to the quotes[1].person
    //so in a way I can change the inner text by accessing the array
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

    //so ideally I would have a separate array appending that item
    //Now is logging teams in
    //[team, team, team, team.....]
    secondArray.push(person.innerText);
    console.log(secondArray);
    console.log(secondArray[1]);

})