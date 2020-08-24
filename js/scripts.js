// Business Interface

// User Interface



## Specs
| Spec | Description | Input | Output |
| :-------------     | :------------- | :------------- |:------------- |
| 0 | **Homepage** | User accesses localhost:5004 | Homepage with user input form |
| 1 |**The program will return a prompt if the user input is Nan.** | User input: "seven" | Output: "Whoops!..." |
| 2 |**The program will return a range of numbers from 0 to the users inputted number** | User input: "5" | Output: "0, 1, 2, 3, 4, 5" |
| 3 |**The program will identfy if the users inputted number contains a 1 and convert it to "Beep".** | User input: "11" | Output: "Beep" |
| 4 |**The program will identfy if the users inputted number contains a 2 and convert it to "Boop".** | User input: "26" | Output: "Boop" |
| 5 |**The program will identfy if the users inputted number contains a 3 and convert it to "Won't you be my neighbor?".** | User input: "30" | Output: "Won't you be my neighbor?" |
| 6 |**The program will return an output in order of priority with 3 taking priority over 2 and 2 taking priority over 1.** | User input: "13" | Output: "Won't you be my neighbor?" |
| 7 |**The program will.** | User input: "4" | Page Display: "0, Beep, Boop, Won't you be my neighbor?, 4" |

## Test Driven Development:
* Describe: neighborhood()

* Test 1: "Return alert for invalid number"
* _Expect: (neighborhood("seven")).toEqual("Whoops!..."");_
* _Expect: (neighborhood()).toEqual("Whoops!..."");_

* Test 2: "Return a range of numbers from 0 to the users inputted number."_
* _Expect: (neighborhood(5)).toEqual(0, 1, 2, 3, 4, 5);

* Test 3: "If users inputted number contains a 1 convert it to 'Beep'".
* _Expect: (neighborhood(11)).toEqual(0, Beep, 2, 3, 4, 5, 6, 7, 8, 9, 10, Beep);_

* Test 4: If users inputted number contains a 2 convert it to 'Boop'"._
* _Expect: (neighborhood(12)).toEqual(0, Beep, Boop, 3, 4, 5, 6, 7, 8, 9, 10, Beep, Boop);

* Test 5: "If users inputted number contains a 3 convert it to 'Won't you be my neighbor?'".
* _Expect: (neighborhood(6)).toEqual(0, Beep, Boop, "Won't you be my neighbor?", 4, 5, 6);_

* Test 6: "Return in order of 3 taking priority over 2 and 2 taking priority over 1."
* _Expect: (neighborhood(13)).toEqual(0, Beep, Boop, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, Beep, Boop, "Won't you be my neighbor?");_