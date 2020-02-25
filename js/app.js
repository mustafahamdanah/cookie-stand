'use strict';

// construction function

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
function Salmon(name ,max ,min,averageCo){
  this.name = name,
  this.max = max,
  this.min = min,
  this.averageco = averageCo;
  this.total = 0;
  this.totalCookies = [];

}

Salmon.prototype.getaverageco = function(min, max){
  this.culNum = getRandomInt(min , max);
};

Salmon.prototype.result = function (){
  this.getaverageco();
  //   var ulEl = document.createElement('ul');
  for (var i=0;i<hours.length;i++){
    var randomNum = getRandomInt(this.min , this.max);
    // console.log(randomNum);
    var totalCo = Math.floor(randomNum * this.averageco);
    this.totalCookies.push(totalCo);


    this.total = this.total + totalCo;
    // console.log(this.total);
  }

};


var seattle = new Salmon('seatlle' ,65,23,6.3);
seattle.result();
//console.log(seattle.result());

var tokyo = new Salmon('tokyo' ,24,3,1.2);
tokyo.result();


var dubai = new Salmon('dubai' ,38,11,3.7);
dubai.result();

var paris = new Salmon('paris' ,38,20,2.3);
paris.result();

var lima = new Salmon('lima',16,2,4.6);
lima.result();
var locationgg =[seattle,tokyo,dubai,paris,lima];
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

for(var k=0;k <locationgg.length;k++){
  var tbody = document.createElement('tbody');
  tableElm.appendChild(tbody);
  var tr2 = document.createElement('tr');
  tbody.appendChild(tr2);
  var td1 = document.createElement('td');
  tr2.appendChild(td1);
  td1.textContent = locationgg[k].name;
  for(var m=0;m <hours.length;m++){
    td1 = document.createElement('td');
    tr2.appendChild(td1);
    td1.textContent = locationgg[k].totalCookies[m];
  }
  td1 = document.createElement('td');
  tr2.appendChild(td1);
  td1.textContent = locationgg[k].total;
}


td1 = document.createElement('td');
tr3.appendChild(td1);
td1.textContent = 'total';
for(var l=0;0<hours.length;l++){
  var tfooter = document.createElement('tfoot');
  tableElm.appendChild(tfooter);
  var tr3 = document.createElement('tr');
  tfooter.appendChild(tr3);
  td1 = document.createElement('td');
  tr3.appendChild(td1)
}


