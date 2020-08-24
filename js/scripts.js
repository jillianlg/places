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
        if (this.places[i].id == id) {
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


// User Interface logic
let travel = new Travel();

function displayPlacesDetails(travelToDisplay){
  let placesList = $("ul#places");
  let htmlForPlaceInfo = "";
  travelToDisplay.places.forEach(function(place){
    htmlForPlaceInfo += "<li id=" + place.id + ">" + place.country + " " + place.cityName + "</li>";
  });
  placesList.html(htmlForPlaceInfo);
  displayPlacesDetails(travel);  
};

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const inputtedCountryName = $("input#country").val();
    const inputtedStateName = $("input#state").val();
    const inputtedLandmarkName = $("input#landmark").val();
    const inputtedDateRange = $("input#dateRange").val();
    const inputtedNotes = $("input#notes").val();

    let newPlace = new Place(inputtedCountryName, inputtedStateName, inputtedLandmarkName, inputtedDateRange, inputtedNotes);
    travel.addPlace(newPlace);
    displayPlacesDetails(travel);
    
  


  });
});
