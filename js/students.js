const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const studentContainer = document.querySelector("#container")


const htmlElement = (element, style, title) => {

    return `<${element} class="${style}">${title}</${element}>`
}
const student = (name, classNames, info, score) => `
    <div id="student">
        ${htmlElement("h1", "xx-large " + score, name)}
        ${htmlElement("section", "bordered dashed section--padded", classNames)}
        ${htmlElement("aside", "pushRight", info)}
    </div>`



for (s of students) {
    let studentComponent = ""
    if (s.score >= 60) {
        studentComponent = student(s.name, s.subject, s.info, "passing")
    } else {
        studentComponent = student(s.name, s.subject, s.info, "failing")
    }
    container.innerHTML += studentComponent
    console.log(studentComponent)
}


