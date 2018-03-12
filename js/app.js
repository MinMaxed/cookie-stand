var hoursOpen =  ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8am'];

var firstAndPike = {
  customersMin: 23,
  customersMax: 65,
  cookiePerCustomer: 6.3,
  salesPerHours: function() {
    var Store1 = document.getElementById('storeFront1');

    for (var i=0; i<hoursOpen.length; i++) {

      var customersPerHour = Math.random()*(this.customersMax-this.customersMin) + this.customersMin;

      var cookiesPerHour = customersPerHour*this.cookiePerCustomer;
      var salesElement = document.createElement('li');
      salesElement.textContent = hoursOpen[i] + ' ' + Math.round(cookiesPerHour);
      Store1.appendChild(salesElement);
    }
  },
};

var seaTacAirport = {
  customersMin: 3,
  customersMax: 24,
  cookiePerCustomer:1.2,
  salesPerHours: function() {
    var store2 = document.getElementById('storeFront2');

    for (var i=0; i<hoursOpen.length; i++) {
      var customersPerHour = Math.random()*(this.customersMax - this.customersMin) + this.customersMin;

      var cookiesPerHour = customersPerHour*this.cookiePerCustomer;

      var salesElement = document.createElement('li');
      salesElement.textContent = hoursOpen[i] + ' ' + Math.round(cookiesPerHour);
      store2.appendChild(salesElement);
    }
  },
};

var seattleCenter = {
  customersMin: 11,
  customersMax: 38, 
  cookiesPerCustomer: 3.7,
  salesPerHours: function() {
    var store3 = document.getElementById('storeFront3');

    for(var i=0; i<hoursOpen.length; i++) {
      var customersPerHour = Math.random()*(this.customersMax-this.customersMin) + this.customersMin;

      var cookiesPerHour = customersPerHour*this.cookiesPerCustomer;

      var salesElement = document.createElement('li');
      salesElement.textContent = hoursOpen[i] + ' ' + Math.round(cookiesPerHour);
      store3.appendChild(salesElement);
    }
  }
};

firstAndPike.salesPerHours();
seaTacAirport.salesPerHours();
seattleCenter.salesPerHours();