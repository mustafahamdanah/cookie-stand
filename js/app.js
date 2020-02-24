'use strict';

// construction function

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
function Salmon(name ,max ,min,averageCo){
  this.name = name,
  this.max = max,
  this.min = min,
  this.averageco = averageCo;
  this.total = 0;
}

Salmon.prototype.getaverageco = function(min, max){
  this.culNum = getRandomInt(min , max);
};

Salmon.prototype.result = function (){
  this.getaverageco();
  var ulEl = document.createElement('ul');
  for (var i=0;i<hours.length;i++){
    var randomNum = getRandomInt(this.min , this.max);
    // console.log(randomNum);
    var totalCo = Math.floor(randomNum * this.averageco);
    // console.log(this.averageco);
    var score = `time ${hours[i]} : ${totalCo} cokies`;
    console.log(score);

    var liEl = document.createElement('li');
    liEl.textContent = `Time : ${hours[i]} : ${totalCo}`;
    ulEl.appendChild(liEl);
    this.total = this.total + totalCo;
    console.log(this.total);
  }

  var liElm = document.createElement('li');
  liElm.textContent = `Total : ${this.total}`;
  ulEl.appendChild(liElm);

  var insideEl = document.getElementById('syatel');
  var h2El = document.createElement('h2');
  insideEl.appendChild(h2El);
  h2El.textContent = this.name;
  insideEl.appendChild(ulEl);
};


var seattle = new Salmon('seatlle' ,65,23,6.3);
seattle.result();


var tokyo = new Salmon('tokyo' ,24,3,1.2);
tokyo.result();


var dubai = new Salmon('dubai' ,38,11,3.7);
dubai.result();

var paris = new Salmon('paris' ,38,20,2.3);
paris.result();

var lima = new Salmon('lima',16,2,4.6);
lima.result();

// helper function

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// table head

var salmonContainer = document.getElementById('tokyo');
var tableElm = document.createElement('table');

salmonContainer.appendChild(tableElm);
var tHead = document.createElement('thead');
tableElm.appendChild(tHead);
var trElm = document.createElement('tr');
tHead.appendChild(trElm);
var thEl1 = document.createElement('th');
trElm.appendChild(thEl1);
thEl1.textContent = '';
for(var j=0;j <hours.length;j++){
  var thEl2 = document.createElement('th');
  trElm.appendChild(thEl2);
  thEl2.textContent = hours[j];
}
thEl2 = document.createElement('th');
trElm.appendChild(thEl2);
thEl2.textContent = 'Total';

// body
var body = document.createElement('tbody');
tableElm.appendChild(body);
var trElm3 = document.createElement('tr');
body.appendChild(trElm3);
for(var n=0;n<location.length;n++){
  var thEl3 = document.createElement('th');
  trElm3.appendChild(thEl3);
  thEl3.textContent = location[n].name;

}

























// var tbody = document.createElement('tbody');
// tableElm.appendChild(tbody);
// var trElm1 = document.createElement('tr');
// tbody.appendChild(trElm1);
// var thEl2 = document.createElement('th');
// thEl2.textContent = 'seattle';
// trElm1.appendChild(thEl2);
// var trElm2 = document.createElement('tr');
// trElm1.appendChild(trElm2);
// var thEl3 = document.createElement('th');
// thEl3.textContent = 'tokyo';
// trElm2.appendChild(thEl3);
















// var syatelCokie = {
//   max : 65,
//   min : 23,
//   averageCo : 6.3,
//   hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

//   getaverageco : function(min, max){
//     this.culNum = getRandomInt(min , max);
//   }
// };

// var total = 0;
// function calculate(){
//   var ulEl = document.createElement('ul');
//   for (var i=0;i<syatelCokie.hours.length;i++){

//     var randomNum = getRandomInt(23 , 65);
//     var totalCo = Math.round(randomNum*syatelCokie.averageCo);
//     var score = `time ${syatelCokie.hours[i]} : ${totalCo} cokies`;
//     console.log(score);
//     var liEl = document.createElement('li');
//     liEl.textContent = `Time : ${syatelCokie.hours[i]} : ${totalCo}`;
//     ulEl.appendChild(liEl);
//     total = total + totalCo;
//     console.log(total);
//   }

//   var liElm = document.createElement('li');
//   liElm.textContent = `Total : ${total}`;
//   ulEl.appendChild(liElm);

//   var insideEl = document.getElementById('syatel');
//   var h1El = document.createElement('h1');
//   insideEl.appendChild(h1El);
//   h1El.textContent = 'Pats salmon cookies : sale data';
//   var h2El = document.createElement('h2');
//   insideEl.appendChild(h2El);
//   h2El.textContent = 'Seattle';
//   insideEl.appendChild(ulEl);

// }

// // function random




// // var totalCo = parseFloat(randomNum*syatelCokie.averageCo).toFixed(2);

// // tokyo data

// var tokyoCokie = {
//   max : 24,
//   min : 3,
//   averageCo : 1.2,
//   hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

//   getaverageco : function(min, max){
//     this.culNum = getRandomInt(min , max);
//   }
// };
// var total1 = 0;
// var ulEl1 = document.createElement('ul');
// for (var j=0;j<tokyoCokie.hours.length;j++){
//   var randomNum1 = getRandomInt(3 , 24);
//   var totalCo1 =  parseFloat(randomNum1*tokyoCokie.averageCo).toFixed(2);
//   var score1 = `time ${tokyoCokie.hours[j]} : ${totalCo1} cokies`;
//   console.log(score1);
//   var liEl1 = document.createElement('li');
//   liEl1.textContent = `Time : ${tokyoCokie.hours[j]} : ${totalCo1}`;
//   ulEl1.appendChild(liEl1);
//   total1 = total1 + totalCo1;
//   console.log(total1);
// }


// var insideEl1 = document.getElementById('tokyo');
// var h2El1 = document.createElement('h2');
// insideEl1.appendChild(h2El1);
// h2El1.textContent = 'Tokyo';
// insideEl1.appendChild(ulEl1);

// // dubai data

// var dubaiCokie = {
//   max : 38,
//   min : 11,
//   averageCo : 3.7,
//   hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

//   getaverageco : function(min, max){
//     this.culNum = getRandomInt(min , max);
//   }
// };
// var total2 = 0;
// var ulEl2 = document.createElement('ul');
// for (var k=0;k<dubaiCokie.hours.length;k++){
//   var randomNum2 = getRandomInt(11 , 38);
//   var totalCo2 =  parseFloat(randomNum2*dubaiCokie.averageCo).toFixed(2);
//   var score2 = `time ${tokyoCokie.hours[k]} : ${totalCo2} cokies`;
//   console.log(score2);
//   var liEl2 = document.createElement('li');
//   liEl2.textContent = `Time : ${tokyoCokie.hours[k]} : ${totalCo2}`;
//   ulEl2.appendChild(liEl2);
//   total2 = total2 + totalCo2;
//   console.log(total2);
// }


// var insideEl2 = document.getElementById('dubai');
// var h2El2 = document.createElement('h2');
// insideEl2.appendChild(h2El2);
// h2El2.textContent = 'Dubai';
// insideEl2.appendChild(ulEl2);

// // paris data

// var parisCokie = {
//   max : 38,
//   min : 20,
//   averageCo : 2.3,
//   hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

//   getaverageco : function(min, max){
//     this.culNum = getRandomInt(min , max);
//   }
// };
// var total3 = 0;
// var ulEl3 = document.createElement('ul');
// for (var g=0;g<parisCokie.hours.length;g++){
//   var randomNum3 = getRandomInt(20 , 38);
//   var totalCo3 =  parseFloat(randomNum3*parisCokie.averageCo).toFixed(2);
//   var score3 = `time ${parisCokie.hours[k]} : ${totalCo3} cokies`;
//   console.log(score3);
//   var liEl3 = document.createElement('li');
//   liEl3.textContent = `Time : ${parisCokie.hours[g]} : ${totalCo3}`;
//   ulEl3.appendChild(liEl3);
//   total3 = total3 + totalCo3;
//   console.log(total3);
// }


// var insideEl3 = document.getElementById('paris');
// var h2El3 = document.createElement('h2');
// insideEl3.appendChild(h2El3);
// h2El3.textContent = 'Paris';
// insideEl3.appendChild(ulEl3);

// // lima data

// var limaCokie = {
//   max : 16,
//   min : 2,
//   averageCo : 4.6,
//   hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

//   getaverageco : function(min, max){
//     this.culNum = getRandomInt(min , max);
//   }
// };
// var total4 = 0;
// var ulEl4 = document.createElement('ul');
// for (var f=0;f<limaCokie.hours.length;f++){
//   var randomNum4 = getRandomInt(2 , 16);
//   var totalCo4 =  parseFloat(randomNum4*limaCokie.averageCo).toFixed(2);
//   var score4 = `time ${limaCokie.hours[f]} : ${totalCo4} cokies`;
//   console.log(score4);
//   var liEl4 = document.createElement('li');
//   liEl4.textContent = `Time : ${limaCokie.hours[f]} : ${totalCo4}`;
//   ulEl4.appendChild(liEl4);
//   total4 = total4 + totalCo4;
//   console.log(total4);
// }


// var insideEl4 = document.getElementById('lima');
// var h2El4 = document.createElement('h2');
// insideEl4.appendChild(h2El4);
// h2El4.textContent = 'Lima';
// insideEl4.appendChild(ulEl4);
