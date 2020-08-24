// Business Interface

function Places() {
    this.places = [];

function Places(country, stateName, cityName, landmark, dateRange, notes) {
    this.country = country;
    this.stateName = stateName;
    this.cityName = cityName;
    this.landmark = landmark;
    this.dateRange = dateRange;
    this.notes = notes;
}
let place1 = new Places("USA", "Washington", "Seattle", "Space Needle", "2012", "With Friends");

// User Interface

// Alert moved from Business Interface
// if (this.places.length(); === 0){
//   console.log("Whoops! You forgot to enter something. Try again!");
// } else {
//   console.log("success!");
// }
// }


// ## Specs
// | Spec | Description | Input | Output |
// | :-------------     | :------------- | :------------- |:------------- |
// | 1 | **User can create Places object | UI: var place1 = new Places(); typeof(place1) | output: "object" ex: place1.country = "USA" |
// | 2 |**The program will display multiple places.** | Page Display: "Washington, USA" |  |
// | 3 |**The program will allow user to click each place to reveal loaction data.** | User input: "Washington, USA" | Page Display: "Seattle, Space Needle, June 2019, Notes: Went with Mom." |
// | 4 | **Homepage** | User accesses localhost:5004 | Homepage with user input form |
