

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
    var node = document.createElement("li")
    var text = document.getElementById("newIdea").value;
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
function renderOneDate(date){
    //Build date
    let theDate = document.createElement('p')
    theDate.className = 'theDate'
    theDate.innerHTML = `
    <p>
    ${date.dateName}
    </p>
    `
    let description = document.createElement
    //add dates to DOM
    document.querySelector('#randomDate').appendChild(theDate)
}

//fetch request
function getDate(){
    fetch('http://localhost:3000/basic-ideas')
    .then(res => res.json())
    .then(dateData => dateData.forEach(date => renderOneDate(date)))
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
    getDate()
}
initialize()