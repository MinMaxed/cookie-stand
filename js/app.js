'use strict';

var hoursOpen =  ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8am'];

var allStores = [];

var storeTable = document.getElementById('stores');

function Store(location,minCust, maxCust,cookiePerCust) {

  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiePerCust = cookiePerCust;
  this.totalSales = 0;
  this.salesAtEachHour = [];
  allStores.push(this);
}

Store.prototype.salesPerHour = function() {
  for (var i=0; i<hoursOpen.length; i++) {
    var customersPerHour = Math.random()*(this.maxCust-this.minCust) + this.minCust;

    var cookiesPerHour = Math.floor(customersPerHour*this.cookiePerCust);
    this.salesAtEachHour.push(cookiesPerHour);
    this.totalSales += cookiesPerHour;
  }
};

Store.prototype.render = function () {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement.textContent = this.location;
  trElement.appendChild(tdElement);

  for (var i = 0; i < hoursOpen.length; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.salesAtEachHour[i];
    trElement.appendChild(tdElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.totalSales;
  trElement.appendChild(tdElement);
  
  storeTable.appendChild(trElement);
};

var firstAndPike = new Store('1st and pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 30, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);


firstAndPike.salesPerHour();
firstAndPike.render();

seaTacAirport.salesPerHour();
seaTacAirport.render();

seattleCenter.salesPerHour();
seattleCenter.render();

capitolHill.salesPerHour();
capitolHill.render();

alki.salesPerHour();
alki.render();



// var firstAndPike = {
//   customersMin: 23,
//   customersMax: 65,
//   cookiePerCustomer: 6.3,
//   totalSales: 0,
//   salesPerHours: function() {
//     var store1 = document.getElementById('firstAndPike');
//     for (var i=0; i<hoursOpen.length; i++) {

//       var customersPerHour = Math.random()*(this.customersMax-this.customersMin) + this.customersMin;

//       var cookiesPerHour = customersPerHour*this.cookiePerCustomer;
//       this.totalSales += cookiesPerHour;
//       var salesElement = document.createElement('li');
//       salesElement.textContent = hoursOpen[i] + ' ' + Math.floor(cookiesPerHour) + ' cookies sold.';
//       store1.appendChild(salesElement);
//     }
//     var total = document.createElement('li');
//     total.textContent = 'total' + ' ' + Math.floor(this.totalSales) + ' cookies sold';
//     store1.appendChild(total);
//   }
// };

// var seaTacAirport = {
//   customersMin: 3,
//   customersMax: 24,
//   cookiePerCustomer:1.2,
//   totalSales: 0,
//   salesPerHours: function() {
//     var store2 = document.getElementById('seaTacAirport');

//     for (var i=0; i<hoursOpen.length; i++) {
//       var customersPerHour = Math.random()*(this.customersMax - this.customersMin) + this.customersMin;

//       var cookiesPerHour = customersPerHour*this.cookiePerCustomer;
//       this.totalSales += cookiesPerHour;
//       var salesElement = document.createElement('li');
//       salesElement.textContent = hoursOpen[i] + ' ' + Math.floor(cookiesPerHour) + ' cookies sold.';
//       store2.appendChild(salesElement);
//     }
//     var total = document.createElement('li');
//     total.textContent = 'total' + ' ' + Math.floor(this.totalSales) + ' cookies sold';
//     store2.appendChild(total);
//   }
// };

// var seattleCenter = {
//   customersMin: 11,
//   customersMax: 38,
//   cookiesPerCustomer: 3.7,
//   totalSales: 0,
//   salesPerHours: function() {
//     var store3 = document.getElementById('seattleCenter');

//     for(var i=0; i<hoursOpen.length; i++) {
//       var customersPerHour = Math.random()*(this.customersMax-this.customersMin) + this.customersMin;

//       var cookiesPerHour = customersPerHour*this.cookiesPerCustomer;
//       this.totalSales += cookiesPerHour;

//       var salesElement = document.createElement('li');
//       salesElement.textContent = hoursOpen[i] + ' ' + Math.floor(cookiesPerHour) + ' cookies sold.';
//       store3.appendChild(salesElement);
//     }
//     var total = document.createElement('li');
//     total.textContent = 'total' + ' ' + Math.floor(this.totalSales) + ' cookies sold';
//     store3.appendChild(total);
//   }
// };

// var capitolHill = {
//   customersMin: 20,
//   customersMax: 38,
//   cookiePerCustomer: 2.3,
//   totalSales: 0,
//   salesPerHours: function() {
//     var store4 = document.getElementById('capitolHill');

//     for(var i=0; i < hoursOpen.length; i++) {
//       var customersPerHour = Math.random()*(this.customersMax-this.customersMin);

//       var cookiesPerHour = customersPerHour*this.cookiePerCustomer;
//       this.totalSales += cookiesPerHour;

//       var salesElement = document.createElement('li');
//       salesElement.textContent = hoursOpen[i] + ' ' + Math.floor(cookiesPerHour) + ' cookies sold.';
//       store4.appendChild(salesElement);
//     }
//     var total = document.createElement('li');
//     total.textContent = 'total' + ' ' + Math.floor(this.totalSales) + ' cookies sold';
//     store4.appendChild(total);
//   }
// };

// var alki = {
//   customersMin: 2,
//   customersMax: 16,
//   cookiePerCustomer: 4.6,
//   totalSales: 0,
//   salesPerHours: function() {
//     var store5 = document.getElementById('alki');

//     for(var i=0; i < hoursOpen.length; i++) {
//       var customersPerHour = Math.random()*(this.customersMax-this.customersMin);

//       var cookiesPerHour = customersPerHour*this.cookiePerCustomer;
//       this.totalSales += cookiesPerHour;

//       var salesElement = document.createElement('li');
//       salesElement.textContent = hoursOpen[i] + ' ' + Math.floor(cookiesPerHour) + ' cookies sold.';
//       store5.appendChild(salesElement);
//     }
//     var total = document.createElement('li');
//     total.textContent = 'total' + ' ' + Math.floor(this.totalSales) + ' cookies sold';
//     store5.appendChild(total);
//   }
// };



// firstAndPike.salesPerHours();
// seaTacAirport.salesPerHours();
// seattleCenter.salesPerHours();
// capitolHill.salesPerHours();
// alki.salesPerHours();