
function fetchMovies(){
    fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(moviesinfo => logMovies(moviesinfo))
    .catch(error => console.log(error.message));
}

function logMovies(moviesObj){
    const moviesWithBadTag = moviesObj.filter(movie => movie.rating < 4);
    console.log(moviesWithBadTag);
    const badMoviesAFter2000 = moviesWithBadTag.filter(movie => movie.year >= 2000);
    console.log(badMoviesAFter2000);
}

fetchMovies();