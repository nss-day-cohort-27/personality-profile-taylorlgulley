
const sectionDatabase = {
    agree : [],
    disagree : [],
    why : [],
    people : [],
    little : [],
    teammate : [],
    instructor: [],
};

const statement1 = {
    sentence: "I agree that though Defenders are reserved they do have good people skills.",
}
const statement2 = {
    sentence: "I agree with the statement that Defenders have good analytical skills.",
}
const statement3 = {
    sentence: "I agree that the Defender meets kindness with kindness in excess.",
}


sectionDatabase.agree.push(statement1,statement2,statement3);

const statement4 = {
    sentence: "I disagree that Defenders are true altruists because i am not",
}
const statement5 = {
    sentence: "I disagree with the statement that Defenders have robust social relationships because of my personal experience.",
}
const statement6 = {
    sentence: "I disagree that Defenders are naturally social even though they are introverts because I am not naturally social.",
}

sectionDatabase.disagree.push(statement4,statement5,statement6);

const why1 = {
    sentence: "Because I am someone that sees balance in most things neither good nor bad.",
}
const why2 = {
    sentence: "I am a pretty private person that has some relationships that i am very close to.",
}
const why3 = {
    sentence: "I am an introvert that is not very social but i force myself to push my boundaries.",
}

sectionDatabase.why.push(why1,why2,why3);

const person1 = {
    sentence: "Halle Berry",
}
const person2 = {
    sentence: "Vin Diesel",
}
const person3 = {
    sentence: "Queen Elizabeth II",
}
const person4 = {
    sentence: "Beyonce",
}

sectionDatabase.people.push(person1,person2,person3,person4);

const kind1 = {
    sentence: "I would speak kindly but directly with my little sib."
}
const teach = {
    sentence: "I like for my instructors to talk to me with detailed explanation of the process."
}
const teammates = {
    sentence: "I like for my teammate to speak to me as an equal whom they can help but not control."
}

sectionDatabase.little.push(kind1);
sectionDatabase.teammate.push(teach);
sectionDatabase.instructor.push(teammates);

const saveSectionDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveSectionDatabase(sectionDatabase, "SectionDatabase");

const loadSectionDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

console.log(loadSectionDatabase("SectionDatabase"));

let data = loadSectionDatabase("SectionDatabase");

let agree = data.agree;
let disagree = data.disagree;
let why = data.why;
let people = data.people;
let little = data.little;
let teammate = data.teammate;
let instructor = data.instructor;

let section1Content = document.querySelector("#section1");
let section2Content = document.querySelector("#section2");
let section3Content = document.querySelector("#section3");

let createSection = function (info,section,statement,list) {
    section.innerHTML +=
        `<div>
            <h3>${statement}:</h3>
            <ul class=${list}></ul>
        </div>`;
    let ul = document.getElementsByClassName(list)[0];
    for (let i = 0; i < info.length; i++){
        ul.innerHTML +=
            `<li>${info[i].sentence}</li>`
    }
}

createSection(agree, section1Content, "Things I agree with", "agree");
createSection(disagree, section1Content, "Things I disagree with", "disagree");
createSection(why, section1Content, "Why I disagree", "why");
createSection(people, section2Content, "People that also have my personality", "people");
createSection(little, section3Content, "Interact with Little Sibling", "little");
createSection(teammate, section3Content, "Interact with Teammates", "teammate");
createSection(instructor, section3Content, "Interact with Instructor", "instructor");



// let sec = document.createElement("DIV");
// let t = document.createTextNode("This is a Div");
// sec.appendChild(t);
// document.body.appendChild(sec);
