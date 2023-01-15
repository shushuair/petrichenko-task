let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

let a = prompt("Один из последних просмотренных фильмов?", "");
let b = prompt("На сколько оцените его?", "");
let c = prompt("Один из последних просмотренных фильмов?", "");
let d = prompt("На сколько оцените его?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

//
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};
for(let i = 0; i < 2; i++) {
   let a = prompt("Один из последних просмотренных фильмов?", "");
   let b = prompt("На сколько оцените его?", "");
   if(a !== "" && b !== "" && a !== null && b !== null && a.length <= 50) {
      personalMovieDB.movies[a] = b;
      console.log("done!");
   } else {
      console.log("error");
      i--;
      
   }  
}
if (personalMovieDB.count < 10){
   console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
   console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
   console.log("Вы киноман");
} else {
   console.log("Произошла ошибка");
}
function writeYourGenres(){
   if(personalMovieDB.privat === false) {
     return console.log(personalMovieDB);
   }  
  }
  
  function writeYourGenres(){
     for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`,"");
        console.log(personalMovieDB.genres);
     }
  }  
  console.log(personalMovieDB);
