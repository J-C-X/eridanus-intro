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
//let skill = document.createElement("ul");
//skill.textContent = skills;
//skill.innerHTML = skills;

//skills.appendChild(skill);
    skills.appendChild(newList);
}


