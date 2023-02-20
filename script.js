//loading DOM and submit form event listener
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("personalIdeas").addEventListener("submit", (event) => {
        event.preventDefault()
        let addIdea = {
            date: document.getElementById("newIdea").value,
            description: document.getElementById("description").value
        }
        console.log("event", addIdea)
        // add userIdea to date list
        let node = document.createElement("li")
            let text = document.getElementById("newIdea").value;
            var textnode = document.createTextNode(text);
            node.appendChild(textnode);
        document.getElementById('randomDate').appendChild(node)
       document.forms[0].reset();
    }) 
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
}

//fetch request
function getDates(){
    fetch('http://localhost:3000/basic-ideas')
    .then(res => res.json())
    .then(dateData => dateData.forEach(dates => renderAllDates(dates)))
}

//initial render
function initialize() {
    getDates()
}
initialize()

