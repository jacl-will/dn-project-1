
//drag li items to list area? ---> check box that adds it to the ultimate list 


//form submit

const form = document.getElementById("personal-ideas") 
form.addEventListener("submit", (event) => {
    event.preventDefault()
    var addIdea = document.getElementById("newIdea").value
    console.log("event", event)
   event.target.reset()
}) 
//need to reset form once something is input

//input text gets added to The Ultimate List
const addUltimateList = document.getElementById("add");
addUltimateList.addEventListener("click", (e) => {
    var node = document.createElement("li")
    var text = document.getElementById("newIdea").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("ultimateList").appendChild(node);
})

//date night button - needs to return a random item from unordered list
const element1 = document.getElementById("dnBtn");
element1.addEventListener("click", dnButton);

function dnButton() {
    // var idea = document.getElementByElement("li")
    document.getElementById("dnBtn")
    // return idea[Math.floor(Math.random()*idea.length)];
    console.log(dnButton) 
}

//changed to random activity button - needs to connect to Bored API 
const element2 = document.getElementById("boredBtn");
element2.addEventListener("click", boredButton)  

function boredButton() {
    document.getElementById("boredBtn")
    console.log(boredButton)
}

//fetch request
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.boredapi.com/api/activity')
    .then(res => res.json())
    .then(data => console.log(data))


    // .then(data => { 
    //     data.activity.forEach(hobby => {
    //         const div = document.createElement('div')
    //         const h3 = document.createElement('h3')
    //         h3.textContent = hobby.activity
    //         div.append("h3")
    //         document.querySelector("#hobby").append(div)
    //     })    
    // })
})
