// event listerners, bottons
//https://www.youtube.com/watch?v=5fb2aPlgoys&t=1204s

// element you wish you applied the event to for this example will be btn 2 and 3

// const buttonTwo = document.querySelector('.btn-2');

// function alertBtn () {
//     alert('I also love JavaScript');
//     console.log('click and in console');
//     //Above - I'm close, so the message gets added to the console, I need a way to add it to a textfield

// };
// //this way, the buttonTwo will react when click
// buttonTwo.addEventListener('click', alertBtn);

// //mouseover

// const newBgColor = document.querySelector('.btn-3');

// function changeColor () {
//     newBgColor.style.backgroundColor = 'blue';
// };

// newBgColor.addEventListener("mouseover", changeColor);


//Event Delegation - uses eventDelegation.html file
//It allows users to append a SINGLE event listener to a parent element
//that adds it to all of its present AND future descendants that match a selector

//grabbing the id and from there addEventListener for a click
//and then a function which has an event object which is e
document.querySelector('#sports').addEventListener('click', function(e){
    //so you are logging the attribute of the id
    //and because each sport has their own id thats how it gets
    //logged.
    console.log(e.target.getAttribute('id') + ' is clicked');

    //creating a variable of those target variables
    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerHTML = 'rugby';
newSport.setAttribute('id', 'rugby');
//rugby adding to the list
sports.appendChild(newSport)