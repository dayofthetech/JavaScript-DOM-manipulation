//Below - what this does, as soon as I click on the input field, it logs the id name of that field, for example
//click on first name, logs first_name in console
// const messageForm = document.querySelector('#leave_message').addEventListener('click', function(e){
//     console.log(e.target.getAttribute('id', 'name'));
// })


const btn = document.getElementById('btn');
//global ul element
const messagesDisplay = document.getElementById('messages-box');

btn.addEventListener('click', function(e){
    e.preventDefault();

    //.value without the parenthesis is a method
    //with parenthesis is a function and the code wont work
    const firstName = document.getElementById('first_name').value
    //const lastName = document.getElementById('last_name').value
    const email = document.getElementById('email').value
    const userMessage = document.getElementById('user-message').value

    //console.log works, now I need to append it to the empty field as an li element
    //console.log won't work outside the function
    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);

    const message = document.createElement('li');
    //this display as <li>a,r,email@email.com</li>
    message.innerHTML = [firstName, email, userMessage];
    //messagesDisplay.appendChild(message);
    messagesDisplay.append(message);

    //error
    //console.log(leaveMessage).value;

    //below - undefined
    //console.log(message[1]);


    // let list = document.getElementById('messages-box');
    // let data = // list of info from form, probably names?

    //getting the form data
    // data.forEach((item) => {
    //   // create list element (<li>)
    // // set innerText of list element
    // // append to list
    // });


// <ul>
// <li> <a href="whatever"/> sometexthere <button type="button">clickhere</button> </li>
// </ul>

})
