let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement('p');
copyright.innerHTML = "Jose Castillo " + thisYear;

document.body.appendChild(copyright);

//const skillsSection = document.getElementById("skills");
//let skills = ["Coding in Python", "Coding in JavaScript", "Digital Marketing", "Proficient in Excel"];
//let skillsList = skillsSection.querySelector("ul");

const skills = document.getElementById("skills");
const skillsList = ["Coding in Python", "Coding in JavaScript", "Digital Marketing", "Proficient in Excel"];
//Loop for Array 
for( let skill of skillsList ) {
    let newList = document.createElement("li");
    newList.textContent = skill;
    skills.appendChild(newList);
}

// Chat GPT Code 
const messageForm = document.getElementById('leave_message');
const messageSection = document.getElementById('messages');
const messageList = document.getElementById('messageList');

// Event Listener for form submit
messageForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Retrieve form field values
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // Log form field values
  console.log('Name:', usersName);
  console.log('Email:', usersEmail);
  console.log('Message:', usersMessage);

  // Display messages in list
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
  `;
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.type = 'button';
  removeButton.addEventListener('click', function() {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  // Clear form fields
  messageForm.reset();
});

// Handle Message Form Submit
/*let messageForm = document.getElementById("leave_message");
let button = document.getElementById("sb")

messageForm.addEventListener("submit", function(event) {
    event.preventDefault()

    //console.log(event.target.usersName.value);
    let uName = event.target.usersName.value;
    console.log(uName);
    //console.log(event.target.usersEmail.value);
    let uEmail = event.target.usersEmail.value;
    console.log(uEmail);
    //console.log(event.target.usersMessage.value);
    let uMessage = event.target.usersMessage.value;
    console.log(uMessage);

    // Display Messages in List
    let messageSection = document.getElementById("messages"); // Select by id
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li"); 
    newMessage.innerHTML = `<a ${uName} href="mailto:email">${uEmail}</a>
    <span>${uMessage}</span>`;
    newMessage.appendChild(messageList);

    let removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.innerText = "remove";
    removeButton.addEventListener("click", function(event) {
        entry = removeButton.parentNode;
        entry.remove();
        newMessage.body.appendChild(removeButton);
    });
    //newMessage.innerHTML = document.getElementById("name");
    //newMessage.innerHTML = "<a>uMessage<\a>";
    
    messageForm.reset(); // Reset Input ; Final line in EventListener

}); */
