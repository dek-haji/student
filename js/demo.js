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
const h1 =(...props) => {
    return `<h1 class="${props[1]}">${props[0]}</h1>`
  }
  const section =(...props) => {
    return `<section class="bordered dashed ${props[1]}">${props[0]}</h1>`
  }
  const aside =(...props) => {
    return `<aside class="${props[1]}">${props[0]}</h1>`
  }
  
  //Refactored the above code so that we have a function that can be called as many times as needed. 
  const passingStudent = (...props) => {
    return `
        <div class="student">
            ${h1(props[0], "xx-large passing")}
            ${section(props[1], "section--padded")}
            ${aside(props[2], "pushRight")}      
        </div>
    `
  }
  const failingStudent = (...props) => {
    return `
        <div class="student">
            ${h1(props[0], "xx-large failing")}
            ${section(props[1], "section--padded")}
            ${aside(props[2], "pushRight")}      
        </div>
    `
  }
    //Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.
  
  for (const currentStudent of students) {
      let studentComponent = ""
      if (currentStudent.score >= 60) {
          studentComponent = passingStudent(currentStudent.name, currentStudent.subject, currentStudent.info)
          document.querySelector('#container').innerHTML +=studentComponent
      } else {
          studentComponent = failingStudent(currentStudent.name, currentStudent.subject, currentStudent.info)
          document.querySelector('#container').innerHTML +=studentComponent
      }
  }
  console.table(students)
  