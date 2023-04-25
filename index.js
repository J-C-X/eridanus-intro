let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement('p');
copyright.innerHTML = "Jose Castillo " + thisYear;

footer.appendChild(copyright);

const skillsSection = document.getElementById("skills");
const skillsList = ["Coding in Python", "Coding in JavaScript", "Digital Marketing", "Proficient in Excel"];
let skills = skillsSection.querySelector("ul");

//Loop for Array 
for( let skill of skillsList ) {
    let newList = document.createElement("li");
    newList.textContent = skill;

    skills.appendChild(newList);
}

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