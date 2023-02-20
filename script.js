

//form submit
const form = document.getElementById("personalIdeas") 
form.addEventListener("submit", (event) => {
    event.preventDefault()
    // var addIdea = document.getElementById("newIdea").value]
    let addIdea = {
        date: event.target[0].value
    }
    //trying out based on post video
    // renderNewIdea(dateObj)
    // console.log("event", addIdea)
   event.target.reset()
}) 

const dateObj = document.getElementById("add");
dateObj.addEventListener("click", (e) => {
    let node = document.createElement("li")
    let text = document.getElementById("newIdea").value;
    // var textnode = document.createTextNode(text);
    // node.appendChild(textnode);
    // document.getElementById("ultimateList").appendChild(node);
    console.log(JSON.stringify(text))
})

//LAST ATTEMPT <<<<<<<<<<<<<<<<<<<<<<<
// const dateNight = document.getElementById("dnBtn");
// dateNight.addEventListener('"click"', (event) => {
//     // console.log("event", event)
//     // const selectedDate = document.querySelector('date');
//     // console.log(selectedDate.value)
//     fetch('http://localhost:3000/basic-ideas')
//     .then(res => res.json())
//     // .then(res => console.log("response", res))
//     // .then(dateData => dateData.forEach(date => renderOneDate(date)))
//     .then(dateData => console.log(dateData))
//         // const date = document.getElementById('randomDate'))

//         // date.innerText = dateData.date

// })

//DOM Render Function ---->add way to randomly select 1 date
function renderAllDates(dates){
    //Build date
    let theDates = document.createElement('p')
    theDates.className = 'theDat'
    theDates.innerHTML = `
    <p>
    ${dates.dateName}
    </p>
    `
    let theDescription = document.createElement('p')
    // theDescription.className = 'theDes'
    // theDescription.innerHTML = `
    // <p2>
    // ${dates.description}
    // </p2>
    // `
    //add dates to DOM
    document.querySelector('#randomDate').appendChild(theDates)
    // console.log(theDescription)
    // document.querySelector('#randomDate').appendChild(theDescription)
    theDates.addEventListener('mouseover', function(){
        theDescription.innerText= `${dates.description}`;
        document.querySelector('p').appendChild(theDescription)
        console.log(theDates)
    })
   

    // des.addEventListener("mouseover", (e) => {
    //     let node = document.createElement('p')
    //     let text = document.getElementsByClassName('theDes')
    //     let textnode = document.createTextNode(text)
    //     console.log(textnode)
    // })
}
//Did not work 

// const des = document.getElementsByClassName('theDes');
// des.addEventListener("mouseover", function(){
//     theDescription = document.createElement('p')
//     theDescription.className = 'theDes'
//     theDescription.innerHTML = `
//     <p>
//     ${dates.description}
//     </p>
//     `
// })

    // const dat = document.getElementsByClassName('theDat');
    // const des = document.getElementsByClassName('theDes');
    // dat.addEventListener("mouseover", function() {
    //     des.innerHTML = "theDescription";
    // })

//fetch request
function getDates(){
    fetch('http://localhost:3000/basic-ideas')
    .then(res => res.json())
    .then(dateData => dateData.forEach(dates => renderAllDates(dates)))
}

//Post to DOM
// function addToJson(newIdea){
//         fetch('http://localhost:3000/basic-ideas',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(newIdea)
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

//initial render
function initialize() {
    getDates()
}
initialize()