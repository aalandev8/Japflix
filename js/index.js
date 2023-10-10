fetch("https://japceibal.github.io/japflix_api/movies-data.json")
    .then(response => {
        console.log(response.ok);
        return response.json();


    })
    .then(data => {
        console.log(data);
        localStorage.setItem("Movies Array", JSON.stringify(data));

    })
    .catch(error => {
        console.log(error.message);
    });

const searchForm = document.getElementById("inputBuscar");
const moviesContainer = document.getElementById("list-group container");
const searchBtn = document.getElementById("btnBuscar");

searchBtn.addEventListener("click", function (event) {
    const movies = searchForm.value;
    const moviesArray = JSON.parse(localStorage.getItem("Movies Array"));
    displayResults(moviesArray, movies);
})

function displayResults(moviesResults, moviesTitle) {
    let pelisArray = [];

    moviesResults.forEach(pelicula => {
        const even = (element) => element.name.toLowerCase().includes(moviesTitle.toLowerCase());
        if (pelicula.title.toLowerCase().includes(moviesTitle.toLowerCase()) ||
            pelicula.tagline.toLowerCase().includes(moviesTitle.toLowerCase()) ||
            pelicula.overview.toLowerCase().includes(moviesTitle.toLowerCase()) ||
            pelicula.genres.some(even)) {
            pelisArray.push(pelicula);
        }
    })

    let mostrarPeliculas = ``;

    pelisArray.forEach(element => {
        mostrarPeliculas += `
        <li class="li" data-score="${element.vote_average}">
            <div id="peli" style="display: flex;
                    justify-content: space-between;
                    width: 60vw;
                    border: 0px solid white;">
                <div style="margin: 5px;">
                    <p  style="color: white;
                        margin: 5px; 
                        font-size: 18px">
                        <strong>${element.title}</strong>
                    </p>
                    <p style="  color: gray; 
                                margin: 5px;">
                        ${element.tagline}
                    </p>
                </div>
                <div style="margin-top: 10px;">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </div>
      </li>
        `;
    })
    document.getElementsByClassName("list-group container")[0].innerHTML = mostrarPeliculas;

    Array.from(document.getElementsByClassName("li")).forEach(element => {
        //console.log(element);
        console.log(element.getElementsByClassName("fa fa-star"));
        //Array.from.namedocument.getElementsByTagName("span")
        let ss = element.getElementsByClassName("fa fa-star");

        for (let i = 0; i < parseInt(element.dataset.score / 2); i++) {
            console.log(ss[i]);
            ss[i].classList.add("checked");
        }

    })




    console.log(pelisArray);
}
document.getElementsByClassName("li").addEventListener("click", () => {
    const htmlContent = `< button class="btn btn-primary" type = "button" data - bs - toggle="offcanvas" data - bs - target="#offcanvasTop" aria - controls="offcanvasTop" > Toggle top offcanvas</button >

    <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasTopLabel">${pelicula.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body"> ${pelicula.overview}
            <li><hr class="dropdown-divider"></li>
            ${pelicula.genres.name}
        </div>
    </div>
      <div class="dropdown mt-3">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          More
        </button>
        <ul class="dropdown-menu">
          <li><p class="dropdown-item">Year: ${pelicula.release_date.getFullYear()}</p></li>
          <li><p class="dropdown-item">Runtime: ${pelicula.runtime}</p></li>
          <li><p class="dropdown-item">Budget: $ ${pelicula.budget}</p></li>
          <li><p class="dropdown-item">Revenue: $ ${pelicula.revenue}</p></li>
        </ul>
      </div>
    </div>
  </div>`
    document.getElementsByClassName("li").innerHTML = htmlContent;
})






