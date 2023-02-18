

//form submit
const form = document.getElementById("personal-ideas") 
form.addEventListener("submit", (event) => {
    event.preventDefault()
    // var addIdea = document.getElementById("newIdea").value]
    let addIdea = {
        date: event.target[0].value
    }
    //trying out based on post video
    // renderNewIdea(dateObj)
    console.log("event", addIdea)
   event.target.reset()
}) 

//input text gets added to The Ultimate List
// const addUltimateList = document.getElementById("add");
// addUltimateList.addEventListener("click", (e) => {
//     var node = document.createElement("li")
//     var text = document.getElementById("newIdea").value;
//     var textnode = document.createTextNode(text);
//     node.appendChild(textnode);
//     document.getElementById("ultimateList").appendChild(node);
// })


//Post to DOM

// function addToDom(dateObj) {
//     fetch('http://localhost:3000/basic-ideas', {
//         console.log(JSON.stringify(dateObj))
//         // method: 'POST',
//         // headers: {

//         // }
//     })

// }

//date night button - needs to return a random item from unordered list
// const element1 = document.getElementById("dnBtn");
// element1.addEventListener("click", dnButton);

// function dnButton() {
//     document.getElementById("dnBtn")
//     // return idea[Math.floor(Math.random()*idea.length)];
//     console.log(dnButton) 
// }

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

//fetch request
// document.addEventListener('DOMContentLoaded', () => {
//     fetch('https://www.boredapi.com/api/activity')
//     .then(res => res.json())
//     .then(data => console.log(data))


    // .then(data => { 
    //     data.activity.forEach(hobby => {
    //         const div = document.createElement('div')
    //         const h3 = document.createElement('h3')
    //         h3.textContent = hobby.activity
    //         div.append("h3")
    //         document.querySelector("#hobby").append(div)
    //     })    
    // })
// })

//fetch request

//DOM Render Function ---->added based on get video
function renderOneDate(date){
    //Build date
    let theDate = document.createElement('p')
    theDate.className = 'theDate'
    theDate.innerHTML = `
    <p>
    ${date.dateName}
    </p>
    `
    console.log(date.dateName)
    //add dates to DOM
    document.querySelector('#randomDate').appendChild(theDate)
}



function getDate(){
    fetch('http://localhost:3000/basic-ideas')
    .then(res => res.json())
    // .then(dData => console.log(dData))
    .then(dateData => dateData.forEach(date => renderOneDate(date)))
}


//initial render
function initialize() {
    getDate()
}
initialize()