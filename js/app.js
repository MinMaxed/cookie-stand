'use strict';

//global variables
var hoursOpen =  ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8am'];
var allStores = [];
var storeTable = document.getElementById('stores');
var storeForm = document.getElementById('storeForm');


//top row with labels for collumns
function header() {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = 'Store';
  trElement.appendChild(thElement);

  for (var i = 0; i < hoursOpen.length; i++) {
    thElement = document.createElement('th');

    thElement.textContent = hoursOpen[i];
    trElement.appendChild(thElement);
  }

  thElement = document.createElement('th');
  thElement.textContent = 'Total';
  trElement.appendChild(thElement);

  storeTable.appendChild(trElement);
}


//store constructor function
function Store(location,minCustomers, maxCustomers,AvgSale) {

  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.AvgSale = AvgSale;
  this.totalSales = 0;
  this.salesAtEachHour = [];
  allStores.push(this);
}

// generates numbers/sales
Store.prototype.salesPerHour = function() {
  for (var i = 0; i < hoursOpen.length; i++) {
    var customersPerHour = Math.random()*(this.maxCustomers-this.minCustomers)+this.minCustomers;

    var cookiesPerHour = Math.floor(customersPerHour*this.AvgSale);
    this.salesAtEachHour.push(cookiesPerHour);
    this.totalSales += cookiesPerHour;
  }
};

//display numbers
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

// footer/totals
function footer() {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'Hourly Totals';
  trElement.appendChild(tdElement);

  var totalSales = 0;

  for (var i = 0; i < hoursOpen.length;i++) {
    var hourlyTotal = 0;

    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].salesAtEachHour[i];
    }
    tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    trElement.appendChild(tdElement);
    totalSales += hourlyTotal;
  }
  tdElement = document.createElement('td');
  tdElement.textContent = totalSales;
  trElement.appendChild(tdElement);

  storeTable.appendChild(trElement);
}

// function to calculate all store sales
function salesAllStores() {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].salesPerHour();
  }
}

//function to render stores in table
function renderAllStores() {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

//event listener's callback function
function addNewStore(event) {
  event.preventDefault();

  var newStoreLocation = event.target.storeLocation.value;
  var newMinCustomer = event.target.storeMinCust.value;
  var newMaxCustomer = event.target.storeMaxCust.value;
  var newAvgSale = event.target.storeAvgSale.value;

  var newStore = new Store(newStoreLocation, newMinCustomer, newMaxCustomer, newAvgSale);

  newStore.salesPerHour();


  storeTable.innerHTML = '',
  header();
  renderAllStores();
  footer();

}

// event listener (form type, callback function)
storeForm.addEventListener('submit', addNewStore);

//established stores
new Store('1st and pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 30, 2.3);
new Store('Alki', 2, 16, 4.6);

//initial calculations and rendering
header();
salesAllStores();
renderAllStores();
footer();
