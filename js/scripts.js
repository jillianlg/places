// Business Logic for Website
function Travel() {
  this.places = [];
  this.placeId = 0;
}

  Travel.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.places.push(place);
  }

  Travel.prototype.assignId = function() {
    this.placeId += 1;
    return this.placeId;
  }
  
  Travel.prototype.findPlace = function(id) {
    for (let i=0; i< this.places.length; i++) {
      if (this.places[i]) {
        if (this.place[i].id == id) {
          return this.places[i];
        }
      }
    };
    return false;
  }

// Business Logic for Places

function Place(country, stateName, cityName, landmark, dateRange, notes) {
    this.country = country;
    this.stateName = stateName;
    this.cityName = cityName;
    this.landmark = landmark;
    this.dateRange = dateRange;
    this.notes = notes;
}
// let city1 = new Place("USA", "Washington", "Seattle", "Space Needle", "2012", "With Friends");
// let city2 = new Place("USA", "Oregon", "Portland", "Mulnomah Falls", "2011", "With Family");
// Travel.addPlace (city1);
// Travel.addPlace (city2);

// User Interface

// Alert moved from Business Interface
// if (this.places.length(); === 0){
//   console.log("Whoops! You forgot to enter something. Try again!");
// } else {
//   console.log("success!");
// }
// }

