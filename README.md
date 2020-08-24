# _Places You've Been_

#### _Application collects and displays user travel data, 08.24.2020_

#### By _**Jillian Gibson and Michael Watts**_

## Description

_This HTML demonstrates the fundamental understanding of creating objects in JavaScript and building out business logic with specs by hiding/showing user data regarding travel locations in clickable lists. 

## Specs
| Spec | Description | Input | Output |
| :-------------     | :------------- | :------------- |:------------- |
| 0 | **Homepage** | User accesses localhost:5004 | Homepage with user input form |
| 1 |**The program will collect user travel data.** | User input: "Country" "State" "City" "Landmark" "Dates" "Notes"| Output: "USA" "Washington" "Seattle" "Space Needle" "June 2019" "Notes: Went with Mom."|
| 2 |**The program will display multiple places.** | Page Display: "Washington, USA" |  |
| 3 |**The program will allow user to click each place to reveal loaction data.** | User input: "Washington, USA" | Page Display: "Seattle, Space Needle, June 2019, Notes: Went with Mom." |

## Test Driven Development:
* Describe: places()

* Test 1: "Return alert for enter data"
* _Expect: (places("USA")).toEqual("Whoops!...missing data");_

* Test 2: "Return multiple clickable destinations from user input."_
* _Expect: (places("Washington, Utah")).toEqual("Washington, USA" "Utah, USA");

* Test 3: "Clickable destionations retrun a list of user data".
* _Expect: (places("Washington, USA")).toEqual("USA" "Washington" "Seattle" "Space Needle" "June 2019" "Notes: Went with Mom.");_

## Setup/Installation Requirements

* _Clone down repository from Git Hub to machine._
* _Navigate to root directory._
* _Open index.html in text editor to view code._
* _Launch index.html to in browser to display.._


## Known Bugs

_No known bugs._

## Support and contact details

_Questions or comments can be directed to [Jillian Gibson](jillian.l.gibson@gmail.com) or [Michael Watts](wattsjmichael@gmail.com)._

## Technologies Used

* _HTML_
* _JavaScript_
* _Bootstrap_
* _jQuery_

### License

*_This software operates under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license._*

Copyright (c) 20202 **_Jillian Gibson and Michael Watts_**