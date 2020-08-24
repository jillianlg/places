// ## Test Driven Development:
// * Describe: places()

// * Test 1: "Return alert for enter data"
// * _Expect: (places("USA")).toEqual("Whoops!...missing data");_

// * Test 2: "Return multiple clickable destinations from user input."_
// * _Expect: (places("Washington, Utah")).toEqual("Washington, USA" "Utah, USA");

// * Test 3: "Clickable destionations retrun a list of user data".
// * _Expect: (places("Washington, USA")).toEqual("USA" "Washington" "Seattle" "Space Needle" "June 2019" "Notes: Went with Mom.");_

// Business Interface



// User Interface



// ## Specs
// | Spec | Description | Input | Output |
// | :-------------     | :------------- | :------------- |:------------- |
// | 0 | **Homepage** | User accesses localhost:5004 | Homepage with user input form |
// | 1 |**The program will collect user travel data.** | User input: "Country" "State" "City" "Landmark" "Dates" "Notes"| Output: "USA" "Washington" "Seattle" "Space Needle" "June 2019" "Notes: Went with Mom."|
// | 2 |**The program will display multiple places.** | Page Display: "Washington, USA" |  |
// | 3 |**The program will allow user to click each place to reveal loaction data.** | User input: "Washington, USA" | Page Display: "Seattle, Space Needle, June 2019, Notes: Went with Mom." |
