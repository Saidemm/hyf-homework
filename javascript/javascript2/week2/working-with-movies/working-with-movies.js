// #1 

const shortTitleMovies = movies.filter(movie => movie.title.length < 3);
console.log("Exercise #1:");
console.log(shortTitleMovies);

// #2
const longTitleMovies = movies.filter(movie => movie.title.length > 50);
console.log("Exercise #2:");
console.log(longTitleMovies);

// #3 
function yearInRange(value) {
    return value >= this.lower && value <= this.upper;
}

const countMoviesBetweenYears = movies
        .map(movie => movie.year)
        .filter(year => year >= 1980 && year <= 1989).length;
        // Alternatively instead of reduce I was thinking of other solutions as follows:
        //.reduce( (result, year) => (year >= 1980 && year <= 1989) ? (result+1):result,0);
console.log("Exercise #3:");
console.log(countMoviesBetweenYears);

//#4
const moviesWithTag = movies.map(movie => {
    let movieWithTag = {};
    movieWithTag.title = movie.title;
    movieWithTag.year = movie.year;
    movieWithTag.rating = movie.rating;
    movieWithTag.votes = movie.votes;
    movieWithTag.running_times = movie.running_times;
    movieWithTag.tag = movie.tag;
    if (movie.rating >= 7) {
        movieWithTag.tag = "Good";
    } else if (movie.rating >= 4 && movie.rating < 7) {
        movieWithTag.tag = "Average";
    } else if (movie.rating < 4) {
        movieWithTag.tag = "Bad";
    }
    return movieWithTag;
});
console.log("Exercise #4:");
console.log(moviesWithTag);

// #5
const highRatedMovie = movies
        .filter(movie => movie.rating > 6)
        .map(movie => movie.rating);

console.log("Exercise #5:");
console.log(highRatedMovie);

// #6 
const keywords = ["surfor", "Alien", "Benjamin"];
let counterOfMovieTitle = movies.filter(movie => 
    keywords.some(keyword => movie.title.toUpperCase().includes(keyword.toUpperCase()))
);
console.log("Exercise #6:");
console.log(counterOfMovieTitle);

// #7
const wordDelimiter = /[\s:-;,]+/g; 
function isWithDuplicateWords(title){
    let arrayOfTitleWords = title.split(wordDelimiter);
    let setOfUniqueNames = new Set(arrayOfTitleWords);
    return arrayOfTitleWords.length != setOfUniqueNames.size;
}

let moviesWithDuplicatedWords = movies.filter(movie => isWithDuplicateWords(movie.title)); 

console.log("Exercise #7:");
console.log(moviesWithDuplicatedWords);

// #8
let averageRatingMovies = movies.reduce((ratingAvarage, movie) =>
    ratingAvarage + (movie.rating / movies.length)
,0);

console.log("Exercise #8:");
console.log(averageRatingMovies);

// #9

let totalRatingOfMovies = moviesWithTag.reduce((result, movie) => {
    if (movie.tag == "Good") {
        result.goodMovies++;
    } else if (movie.tag == "Average") {
        result.averageMovies++;
    } else {
        result.badMovies++;
    }
    return result;
}, { goodMovies: 0, averageMovies: 0, badMovies: 0 });

console.log("Exercise #9:");
console.log(totalRatingOfMovies);







