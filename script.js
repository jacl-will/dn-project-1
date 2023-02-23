
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
}

// dnButton to select random date ----->currently does nothing 
    const rDateBtn = document.getElementById('dnBtn');
    rDateBtn.addEventListener('click', dnButton);

    function dnButton() {
        // return theDates[Math.floor(Math.random()*theDates.length)];
    console.log(dnButton)
    }