document.addEventListener("DOMContentLoaded", function(){
    //Initialize an empty array
    let films =[]
    // Fetch data and put it on a list on the side nav
    function getData(){
        fetch("http://localhost:3000/films")
        .then(res=> res.json())
        .then(data => {
            data.forEach(data => {
                const navDiv= document.querySelector("#rightMenu")
                navDiv.innerHTML+= `
                <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">${data.title}</button>
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                </div>
                </div>
                `

            });
            
        })
        .catch(error=>error)
    }
    getData()
})