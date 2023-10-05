fetch("https://japceibal.github.io/japflix_api/movies-data.json")
    .then(response => {
        console.log(response.ok);
        return response.json();
        
    
    })
    .then(data => {
       console.log(data);
       localStorage.setItem("Movies Array",JSON.stringify(data));
        
    }) 
    .catch(error => {
    console.log(error.message);
      });

const searchForm = document.getElementById("inputBuscar");
const moviesContainer = document.getElementById("list-group container");
const searchBtn = document.getElementById("btnBuscar");

searchBtn.addEventListener("click", function(event){
    const movies = searchForm.value;
    const moviesArray = JSON.parse(localStorage.getItem("Movies Array"));
    displayResults(moviesArray, movies);
 })
      
function displayResults(moviesResults, moviesTitle) {
    let pelisArray = [];
    moviesResults.forEach(pelicula=>{
     if (pelicula.title.toLowerCase().includes(moviesTitle.toLowerCase()) || 
     pelicula.tagline.toLowerCase().includes(moviesTitle.toLowerCase()) || 
     pelicula.overview.toLowerCase().includes(moviesTitle.toLowerCase())) {
        pelisArray.push(pelicula);
     }  
else {
    pelicula.genres.forEach(genre => {
        if ( genre.name.toLowerCase().includes === moviesTitle.toLowerCase()) {
           
        }
     })
}
   
     
    })

    console.log(pelisArray);

}

 






