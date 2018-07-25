
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

function section1a(info){
    section1Content.innerHTML +=
        `<div>
            <h3>What I agree with:</h3>
            <ul class="agree-list"></ul>
        </div>`;
    let ul = document.querySelector(".agree-list");
    for(let i = 0; i < info.length; i++){
        ul.innerHTML +=
            `<li>${info[i].sentence}</li>`
    }
}

section1a(agree);

function section1b(info){
    section1Content.innerHTML +=
        `<div>
            <h3>What I disagree with:</h3>
            <ul class="disagree-list"></ul>
        </div>`;
    let ul = document.querySelector(".disagree-list");
    for(let i = 0; i < info.length; i++){
        ul.innerHTML +=
            `<li>${info[i].sentence}</li>`
    }
}

section1b(disagree);

function section1c(info){
    section1Content.innerHTML +=
        `<div>
            <h3>Why I disagree:</h3>
            <ul class="why-list"></ul>
        </div>`;
    let ul = document.querySelector(".why-list");
    for(let i = 0; i < info.length; i++){
        ul.innerHTML +=
            `<li>${info[i].sentence}</li>`
    }
}

section1c(why);

function section2(info){
    section2Content.innerHTML +=
        `<div>
            <h3>People with my Personality:</h3>
            <ul class="people-list"></ul>
        </div>`;
    let ul = document.querySelector(".people-list");
    for(let i = 0; i < info.length; i++){
        ul.innerHTML +=
            `<li>${info[i].sentence}</li>`
    }
}

section2(people);

function section3a(info){
    section3Content.innerHTML +=
        `<div>
            <h3>Interact with Little Sibling:</h3>
            <ul class="little-list"></ul>
        </div>`;
    let ul = document.querySelector(".little-list");
    for(let i = 0; i < info.length; i++){
        ul.innerHTML +=
            `<li>${info[i].sentence}</li>`
    }
}

section3a(little);

function section3b(info){
    section3Content.innerHTML +=
        `<div>
            <h3>Interact with Teammates:</h3>
            <ul class="teammate-list"></ul>
        </div>`;
    let ul = document.querySelector(".teammate-list");
    for(let i = 0; i < info.length; i++){
        ul.innerHTML +=
            `<li>${info[i].sentence}</li>`
    }
}

section3b(teammate);

function section3c(info){
    section3Content.innerHTML +=
        `<div>
            <h3>Interact with Instructors:</h3>
            <ul class="instructor-list"></ul>
        </div>`;
    let ul = document.querySelector(".instructor-list");
    for(let i = 0; i < info.length; i++){
        ul.innerHTML +=
            `<li>${info[i].sentence}</li>`
    }
}

section3c(instructor);

// let sec = document.createElement("DIV");
// let t = document.createTextNode("This is a Div");
// sec.appendChild(t);
// document.body.appendChild(sec);


