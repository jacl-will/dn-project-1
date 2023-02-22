// //loading DOM and submit form event listener
// document.addEventListener('DOMContentLoaded', () => {
//     getDates();
//     document.getElementById("personalIdeas").addEventListener("submit", (event) => {
//         event.preventDefault()
//         let addIdea = {
//             date: document.getElementById("newIdea").value,
//             description: document.getElementById("description").value
//         }
//         console.log("event", addIdea)
//         // add userIdea to date list
//         let node = document.createElement("li")
//             let text = document.getElementById("newIdea").value;
//             var textnode = document.createTextNode(text);
//             node.appendChild(textnode);
//         document.getElementById('randomDate').appendChild(node)
//        document.forms[0].reset();
//     }) 
// })

// //fetch request
// function getDates(){
//     fetch('http://localhost:3000/basicIdeas')
//     .then(res => res.json())
//     .then(dateData => dateData.forEach(dates => renderAllDates(dates)))
// }

// //DOM Render Function ---->add way to randomly select 1 date
// function renderAllDates(dates){
//     //Build date
//     let theDates = document.createElement('p')
//     theDates.className = 'theDat'
//     theDates.innerHTML = `
//     <p>
//     ${dates.dateName}
//     </p>
//     `
//     //build description
//     let theDescription = document.createElement('p')
//     document.querySelector('.dateList').appendChild(theDates)

//     //mouseover event
//     theDates.addEventListener('mouseover', (ev) => {
//         theDescription.innerHTML= `${dates.description}`;
//         document.querySelector('.theDat').appendChild(theDescription) 
//         // console.log(theDates)
//     })

//     //mouseout event
//     theDates.addEventListener('mouseout', (ev) => theDescription.innerHTML = '') 

//     //dnButton to select random date ----->currently does nothing 
//     const rDateBtn = document.getElementById('dnBtn');
//     rDateBtn.addEventListener('click', dnButton);

//     function dnButton() {
//         // return theDates[Math.floor(Math.random()*theDates.length)];
//     console.log(dnButton)
// } 
// }





//loading DOM and submit form event listener
document.addEventListener('DOMContentLoaded', () => {
    getDates()
    document.getElementById("personalIdeas").addEventListener("submit", addUserDate)

})

//form submit and post 
function addUserDate(event) {
    event.preventDefault()
    const date = {
        dateName: document.getElementById("newIdea").value,
        description: document.getElementById("description").value
    }
    fetch('http://localhost:3000/basicIdeas', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(date)
    })
    .then(res => res.json())
    .then(data => {
        const dates = document.querySelector(".dateList")
        dates.innerHTML += renderSingleDate(data)      
        document.forms[0].reset();
    })
}

//fetch request
function getDates(){
    fetch('http://localhost:3000/basicIdeas')
    .then(res => res.json())
    .then(data => {
        const dates = document.querySelector(".dateList")
        dates.innerHTML = renderAllDates(data)
        addDateListeners()
    })
}

function addDateListeners() {
    const dates = document.querySelector(".dateList")
    dates.addEventListener('mouseover', mouseOver)
    // dates.addEventListener('mouseout', mouseOut)
}

function mouseOver(event) {
    // console.log(event.target.id)
    fetch(`http://localhost:3000/basicIdeas/${event.target.id}`)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
        const description = document.querySelector(".dateCard")
        description.innerHTML += renderDescription(data)
    })
}

// function mouseOver(event) {
//     const dates = document.querySelector(".dateList")
// }

function renderDescription(description) {
   console.log(description)
}

function renderAllDates(dates) {
    let theDescription = document.createElement('p')
    document.querySelector('.dateList').append(dates)
    
    return dates.map(dn => renderSingleDate(dn)).join("")
}

function renderSingleDate(date) {
    return `   
    <div class="dateCard" id="${date.id}">
            <h3 class="dateN">
                ${date.dateName}
            </h3>
    </div>`
}

