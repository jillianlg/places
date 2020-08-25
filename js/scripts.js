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

  Travel.prototype.deletePlace = function(id) {
    for (let i=0; i< this.places.length; i++) {
      if (this.places[i]) {
        if (this.places[i].id == id) {
          delete this.places[i];
          return true;
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
    htmlForPlaceInfo += "<li id=" + place.id + ">" + place.country + " " + place.cityName;
  });
  placesList.html(htmlForPlaceInfo);  
};


function showPlace(placeId) {
  const place = travel.findPlace(placeId);
  $("#show-place").show();
  $(".country").html(place.country);
  $(".state").html(place.stateName);
  $(".city").html(place.cityName);
  $(".landmark").html(place.landmark);
  $(".dateRange").html(place.dateRange);
  $(".notes").html(place.notes);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + + place.id + ">Delete</button>");


}

function attachPlaceListeners() {
  $("ul#places").on("click", "li", function(){
    showPlace(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function(){
    travel.deletePlace(this.id);
    $("#show-place").hide();
    displayPlacesDetails(travel);
  });
};

$(document).ready(function(){
  attachPlaceListeners();
  $("#formOne").submit(function(event){
    event.preventDefault();
    const inputtedCountryName = $("input#country").val();
    const inputtedStateName = $("input#state").val();
    const inputtedCityName = $("input#city").val();
    const inputtedLandmarkName = $("input#landmark").val();
    const inputtedDateRange = $("input#dateRange").val();
    const inputtedNotes = $("input#notes").val();

    let newPlace = new Place(inputtedCountryName, inputtedStateName, inputtedCityName, inputtedLandmarkName, inputtedDateRange, inputtedNotes);
    travel.addPlace(newPlace);
    displayPlacesDetails(travel);
    
  


  });
});
