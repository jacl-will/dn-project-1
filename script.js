
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
    fetch('http://localhost:3000/dates', {
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
        let html =  `   
        <div class="dateCard" id="${date.id}">
                <h3 class="dateN">
                    ${date.dateName}
                </h3>
                <p class="dateDes hidden"> 
                    ${date.description}
                </p>
        </div>`
        dates.insertAdjacentHTML("afterend", html)
        addDateListeners()
        document.forms[0].reset();
    })
}

//fetch request
function getDates(){
    fetch('http://localhost:3000/dates')
    .then(res => res.json())
    .then(data => {
        const dates = document.querySelector(".dateList")
        dates.innerHTML = renderAllDates(data)
        addDateListeners()
    })
}

function renderAllDates(dates) {
    return dates.map(dn => renderSingleDate(dn)).join("")
}

function renderSingleDate(date) {
    return `   
    <div class="dateCard" id="${date.id}">
            <h3 class="dateN">
                ${date.dateName}
            </h3>
            <p class="dateDes hidden"> 
                ${date.description}
            </p>
    </div>`
}

//event listeners
function addDateListeners() {
    const dateCards = document.querySelectorAll('.dateCard')
    const rDateBtn = document.getElementById('dnBtn')
    const result = document.getElementById('randomDate')
    //convert nodelist to arry 
    const arrList = Array.from(dateCards)
    Array.from(dateCards).forEach(dateCard => {
        dateCard.addEventListener('mouseover', (e) => {
            const description = dateCard.querySelector('.dateDes')
            description.classList.remove('hidden')
        })
        dateCard.addEventListener('mouseout', (e) => {
            const description = dateCard.querySelector('.dateDes')
            description.classList.add('hidden')
        })
    })
    rDateBtn.addEventListener('click', (e) => {
        arrList[Math.floor(Math.random()*arrList.length)];
        // return result.append()
       
    })

}

// dnButton to select random date ----->currently does nothing 
//can make an arrow function 
//     const rDateBtn = document.getElementById('dnBtn');
//     rDateBtn.addEventListener('click', dnButton);

//     function dnButton() {
//         const dateCards = document.querySelectorAll('.dateCard')
//         Array.from(dateCards).forEach(dateCard => {
//             dateCard[Math.floor(Math.random()*dateCard.length)];
//     console.log(dateCard)
//     })
// }
// const rDateBtn = document.getElementById('dnBtn');
// const dateCards = document.querySelectorAll('.dateCard')
// let date = {
//     dateName: `${date.dateName}`,
//     description: `${date.description}`
// }
// let html =  `   
//         <div class="dateCard" id="${date.id}">
//                 <h3 class="dateN">
//                     ${date.dateName}
//                 </h3>
//                 <p class="dateDes"> 
//                     ${date.description}
//                 </p>
//         </div>`
// const rDateBtn = document.getElementById('dnBtn');
// rDateBtn.addEventListener('click', (e) => { 
//     const dateArr = document.getElementsByClassName('dateCard')
//     dateArr[Math.floor(Math.random()*dateArr.length)];
//     console.log(dateArr)
// }
//     // Array.from(dateCards).forEach(dateCard => {
//     //     dateCard[Math.floor(Math.random()*dateCard.length)];
    
//     // console.log(rDateBtn)
// )