var hoursOpen =  ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8am'];

var firstAndPike = {
  storeLocation: '1st and Pike',
  customersMin: 23,
  customersMax: 65,
  cookiePerCustomer: 6.3,
  cookiesPerHour: this.customersPerHour*this.cookiePerCustomer,
  showStoreHours: function() {
    var Store1 = document.getElementById('storeFront1');
    for (var i=0; i<hoursOpen.length; i++) {
      var salesElement = document.createElement('li');
      salesElement.textContent = hoursOpen[i];
      Store1.appendChild(salesElement);
    }
  },
  customersPerHour: function() { 
    Math.random()*(this.customersMax-this.customersMin) + this.customersMin;
  },
};

firstAndPike.customersPerHour();
firstAndPike.showStoreHours();