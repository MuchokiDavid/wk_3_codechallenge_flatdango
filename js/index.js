document.addEventListener("DOMContentLoaded", function(){
    //Initialize an empty array
    let films =[]
    // Fetch data and put it on a list on the side nav
    function getMovieList(){
        const ul= document.querySelector("#movieMenu")
        fetch("http://localhost:3000/films")
        .then(res=> res.json())
        .then(data => {
            data.forEach(data => {
                const listDiv = document.createElement("div")
                listDiv.className = "listDiv"
                ul.appendChild(listDiv)
                const list= document.createElement("li")
                list.className = 'listAtt'
                list.textContent = data.title
                listDiv.appendChild(list)
            });
            
        })
        .catch(error=>error)
    }
    function getDefaultMovie(){
        const moiveDetails= document.querySelector("#movieDetails")
        fetch("http://localhost:3000/films")
        .then(res=> res.json())
        .then(data => {
            const card = document.createElement("div")
            moiveDetails.appendChild(card)
            card.innerHTML = `
            <div class="card-group">
            <div class="card">
                <img class="card-img-top" src="${data[0].poster}" alt="Card image cap">
                <div class="card-body">
                <h4 class="card-title">Movie Title: ${data[0].title}</h4>
                <p class="card-text">${data[0].description}</p>
                <p class="card-text">Runtime: ${data[0].runtime}</p>
                <p class="card-text">Showtime: ${data[0].showtime}</p>
                <p class="card-text">Available Tickets: ${data[0].capacity - data[0].tickets_sold}</p>
                <p class="card-text">Grab Your Ticket Now</p>
                </div>
            </div>
            </div>
            `
            
        })
        .catch(error=>error)
    }
    getMovieList()
    getDefaultMovie()
})