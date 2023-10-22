document.addEventListener("DOMContentLoaded", function(){
    
    //Default movie
    let card;
    //Movies card
    let cardDiv;

    // Show default movie on page load
    function getDefaultMovie(){
        const moiveDetails= document.querySelector("#movieDetails")
        fetch("http://localhost:3000/films")
        .then(res=> res.json())
        .then(data => {
           card = document.createElement("div")
           moiveDetails.appendChild(card)
           card.innerHTML = `
           <div class="card" style="width: 30rem; padding-left: 20px; padding-top: 20px">
           <img class="card-img-top" style="width: 20rem; padding-left: 20px" src="${data[0].poster}" alt="Card image cap">
            <div id="defaultCard" class="card-body">
                <h4 class="card-title">Movie Title: ${data[0].title}</h4>
                <p class="card-text">${data[0].description}</p>
                <p class="card-text">Runtime: ${data[0].runtime}</p>
                <p class="card-text">Showtime: ${data[0].showtime}</p>
                <p class="card-text">Available Tickets: ${data[0].capacity - data[0].tickets_sold}</p>
            </div>
            </div>
            `
            const btnDefault = document.createElement("button")
            btnDefault.className= 'btn btn-primary'
            
            let ticketAvailable = data[0].capacity - data[0].tickets_sold;
            const cardBody= document.querySelector("#defaultCard")
            //Update button for the first id
            if(ticketAvailable >0)
            {
                btnDefault.textContent = "Buy Ticket"
                btnDefault.addEventListener("click", (e)=> {
                    e.preventDefault()
                fetch (`http://localhost:3000/films/${data[0].id}`, {
                    method: 'PATCH',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({tickets_sold: data[0].tickets_sold+1})
                })
                .then(res=> res.json())
                .then((updatedData) => {
                    // Update the displayed available tickets count
                    const ticketsAvailableElement = document.getElementById("ticketsAvailable");
                    ticketsAvailableElement.textContent = `Available Tickets: ${data[0].capacity - updatedData.tickets_sold}`;
                    })
                .catch(error=>error)
                })
            }
        else{
            list.textContent= "Tickets Sold Out"
            const btnDefault1= document.createElement("button")

            btnDefault1.textContent = "Tickets Sold Out"
            btnDefault.addEventListener("click", ()=> alert("These tickets are sold out"))
        }
                cardBody.appendChild(btnDefault)
        })
        .catch(error=>error)
     }
     getDefaultMovie()

    // Fetch data and put it on a list on the side nav
    function getMovieList(){
        const ul= document.querySelector("#movieMenu")
        const movieDetails= document.querySelector("#movieDetails")
        fetch("http://localhost:3000/films")
        .then(res=> res.json())
        .then(data => {
            data.forEach(data => {
               
                const listDiv = document.createElement("div")
                listDiv.className = "film_items"
                ul.appendChild(listDiv)
                const list= document.createElement("li")
                list.className = 'listAtt'
                list.textContent = data.title
                list.addEventListener("click", (e)=>{
                    e.preventDefault()
                    card.style.display = 'none'; 
                    const existingCard = movieDetails.querySelector(".card-div");
                    if (existingCard) {
                        movieDetails.removeChild(existingCard);//remove existing card before adding elements
                    }
                    //create card to hold movies onclick
                        cardDiv = document.createElement("div")
                        cardDiv.className = "card-div"
                        cardDiv.innerHTML= `
                        <div id = "moviesCard" class="card" style="width: 30rem; padding-left: 20px; padding-top: 20px">
                        <img class="card-img-top" style="width: 20rem; padding-left: 20px" src="${data.poster}" alt="Card image cap">
                        <div id = "movieCard" class="card-body">
                            <h4 class="card-title">Movie Title: ${data.title}</h4>
                            <p class="card-text">${data.description}</p>
                            <p class="card-text">Runtime: ${data.runtime}</p>
                            <p class="card-text">Showtime: ${data.showtime}</p>
                            <p id = "ticketsAvailable" class="card-text">Available Tickets: ${data.capacity - data.tickets_sold}</p>
                        </div>
                        </div>
                        `
                        movieDetails.appendChild(cardDiv)

                        //Create buying button and change to sold out if all tickets are not available
                        const btnBuy = document.createElement("button")
                        btnBuy.className= 'btn btn-primary'
                        btnBuy.textContent = "Buy Ticket"
                        let ticketAvailable = data.capacity - data.tickets_sold;
                        const cardBody= document.querySelector("#movieCard")
                        if(ticketAvailable >0)
                        {
                            btnBuy.addEventListener("click", (e)=> {
                                e.preventDefault()
                                fetch (`http://localhost:3000/films/${data.id}`, {
                                    method: 'PATCH',
                                    headers:{
                                        'Content-Type':'application/json'
                                    },
                                    body:JSON.stringify({tickets_sold: data.tickets_sold+1})
                                })
                                .then(res=> res.json())
                                .then((updatedData) => {
                                    // Update the displayed available tickets count
                                    const ticketsAvailableElement = document.getElementById("ticketsAvailable");
                                    ticketsAvailableElement.textContent = `Available Tickets: ${data.capacity - updatedData.tickets_sold}`;
                                  })
                                .catch(error=>error)
                                })
                        }
                        else{
                            list.textContent= "Tickets Sold Out"
                            btnBuy.textContent = "Tickets Sold Out"
                            btnBuy.addEventListener("click", ()=> alert("These tickets are sold out"))
                        }
                        
                        cardBody.appendChild(btnBuy)                   
                })
                listDiv.appendChild(list)
            });
        })
        .catch(error=>error)
    }

    getMovieList()

})