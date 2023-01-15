const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function(){
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      
      while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      }
   },
   rememberMyFilms: function(){
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
   },
   detectPersonalLevel: function() {
      if (personalMovieDB.count < 10){
         console.log("Просмотрено довольно мало фильмов");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
         console.log("Вы классический зритель");
      } else if (personalMovieDB.count >= 30) {
         console.log("Вы киноман");
      } else {
         console.log("Произошла ошибка");
      }
   },
   writeYourGenres: function(){
      for (let i = 1; i <= 3; i++){
         let genre = prompt(`Ваш любимый жанр под номером ${i}`,"");
        
         if(genre === "" || genre === null){
            console.log(`you input incorrect data or no data at all`);
            i--;
         } else {
            personalMovieDB.genres[i - 1] = genre;         
         }                 
      } 

      personalMovieDB.genres.forEach(function(item,index){
         console.log(`Ваш любимый жанр #${index + 1} is ${item}`);
      }); 
   },
   showMyDB: function(hidden){
      if(!hidden){ 
        console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function(){
      if(personalMovieDB.privat){
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },   
};
console.log(personalMovieDB);
