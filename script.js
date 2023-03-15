document.addEventListener('DOMContentLoaded', () => {
    getDates()
    document.getElementById("personalIdeas").addEventListener("submit", addUserDate)

})

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

function addDateListeners() {
    const dateCards = document.querySelectorAll('.dateCard')
    const rDateBtn = document.getElementById('dnBtn')
    const result = document.getElementById('randomDate')

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
        const randomDateCard = dateCards[Math.floor(Math.random()*dateCards.length)];
        result.innerHTML = ""
        result.append(randomDateCard)
        })
    }