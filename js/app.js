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
    var Store2 = document.getElementById('storefront2');

    for (var i=0; i<hoursOpen.length; i++) {
      var customersPerHour = Math.random()*(this.customersMax - this.customersMin) + this.customersMin;

      var cookiesPerHour = customersPerHour*this.cookiePerCustomer;

      var salesElement = document.createElement('li');
      salesElement.textContent = hoursOpen[i] + ' ' + Math.round(cookiesPerHour);
      Store2.appendChild(salesElement);
    }
  },
};

firstAndPike.salesPerHours();
seaTacAirport.salesPerHours();