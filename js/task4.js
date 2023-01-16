// Задача:

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. 
// Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; 
// стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. 
// Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', 
// если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

const shoppingMallData = {
   shops: [
       {
           width: 10,
           length: 5
       },
       {
           width: 15,
           length: 7
       },
       {
           width: 20,
           length: 5
       },
       {
           width: 8,
           length: 10
       }
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000
};

function isBudgetEnough(data) {
   let square = 0;
   let volume = 0;

   data.shops.forEach(shop => {
       square += shop.width * shop.length;
   });

   volume = data.height * square;

   if (data.budget - (volume * data.moneyPer1m3) >= 0) {
       return 'Бюджета достаточно';
   } else {
       return 'Бюджета недостаточно';
   }
}

isBudgetEnough(shoppingMallData);


//Remove String Spaces
function noSpace(x){
   return x.split(' ').join('');
}
 console.log(noSpace("  dfs  d "));


//even or odd
function evenOrOdd(number) {
   return (number % 2) ? "Odd" : "Even";
 }
 console.log(evenOrOdd(10));

 //The highest profit wins!
 function minMax(arr){
   let a = arr.sort((a,b)=> a - b).slice();  
   return [a[0],a[a.length-1]];
 }
console.log(minMax([15,4,20,35,2]));

function minMax(arr){
   return [Math.min(...arr), Math.max(...arr)];
 }

 //Are You Playing Banjo?

 function areYouPlayingBanjo(name) {
   return name[0].toLowerCase() === "r" ? `${name} plays banjo` : `${name} does not play banjo`
 }
 console.log(areYouPlayingBanjo("romeo"));



 //
 // Setup
const recordCollection = {
   2548: {
     albumTitle: 'Slippery When Wet',
     artist: 'Bon Jovi',
     tracks: ['Let It Rock', 'You Give Love a Bad Name']
   },
   2468: {
     albumTitle: '1999',
     artist: 'Prince',
     tracks: ['1999', 'Little Red Corvette']
   },
   1245: {
     artist: 'Robert Palmer',
     tracks: []
   },
   5439: {
     albumTitle: 'ABBA Gold'
   }
 };
 
 // Only change code below this line
 function updateRecords(records, id, prop, value) {
   if (prop !== 'tracks' && value !== "") {
     records[id][prop] = value;
   } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
     records[id][prop] = [value];
   } else if (prop === "tracks" && value !== "") {
     records[id][prop].push(value);
   } else if (value === "") {
     delete records[id][prop];
   }
   return records;
 }
 //
 // Setup
const myArray = [];

// Only change code below this line
let i = 5;
while(i>=0) {
  myArray.push(i);
  i--;
}
//
function isLess(a, b) {
   // Only change code below this line
 return a < b;
 
  
   // Only change code above this line
 }
 
 isLess(10, 15);
 //
 // Setup
function abTest(a, b) {
   // Only change code below this line
 if(a < 0 || b < 0) return undefined;
 
 
   // Only change code above this line
 
   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
 }
 
 abTest(2,2);
 //
function nextInLine(arr, item) {
   arr.push(item);
    const removed = arr.shift();
    return removed;
    // Only change code above this line
  }
  //css fcc
  transform: skewY(-10deg);
  transform: skewX(24deg);
//

    box-shadow: 25px 10px 0 0 blue;
//
#rect {
   animation-name: rainbow;
   animation-duration: 4s;
 }

@keyframes rainbow {
 0% {
   background-color: blue;
 }
 50% {
   background-color: green;
 }
 100% {
   background-color: yellow;
 }
}
//
function DNAtoRNA(dna) {
   return dna.replaceAll("T","U");
 }
 console.log(DNAtoRNA("UTTT"));

