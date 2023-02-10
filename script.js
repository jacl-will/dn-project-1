//date night button - needs to return a random item from unordered list
const element1 = document.getElementById("dnBtn");
element1.addEventListener("click", dnButton);

function dnButton() {
    document.getElementById("dnBtn")
    console.log(dnButton)
}

//netflix button - needs to connect to API Netflix Roulett to somehow return a show or movie 
const element2 = document.getElementById("netflixBtn");
element2.addEventListener("click", netflixButton)

function netflixButton() {
    document.getElementById("netflixBtn")
    console.log(netflixButton)
}

//drag li items to list area?

//fullscreenchange possible event for when soemthing is returned from clicking dnBtn

//open for API?

//need to reset form once something is input

//form submit

const form = document.getElementById("personal-ideas") 
form.addEventListener("submit", (addIdea) => {
    addIdea.preventDefault()
    console.log("submit", addIdea)

}) 

//input text gets added to The Ultimate List
document.getElementById("add").onclick = function() {
    var node = document.createElement("li")
    var text = document.getElementById("newIdea").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("ultimateList").appendChild(node);
}