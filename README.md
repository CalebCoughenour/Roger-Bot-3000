
# _Roger Bot 3000_

#### By _**Caleb Coughenour**_

#### _This webpage will ask for a number from the user and will respond with it being rogerfied._

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_

## Description

_This webpage will ask the user for a number. The script will then count all the way up to that inputted number & display them, but it will also change certain numbers. If there is a "3" in the number, it will be changed to "Won't you be my neighbor?" If there's not a 3 but also has a 2, it will change the number to "Boop!" And if there's not a "2" or "3" but contains a "1", the number will be changed to "Beep!"._

## Setup/Installation Requirements

* Copy the repository URL from the repo named "Roger Bot 3000"
* In a shell program, clone the copied repository to your desktop
* You can do this using the "git clone" command
* Open the newly cloned directory named "Roger-Bot-3000"
* From the top of the directory, open index.html

## Known Bugs

* _No known bugs_

## License

Licensed under The [MIT](LICENSE)

Copyright (c) _4/1/22_ _Caleb Coughenour_




/ *********************************************************************************************** \


**Specs**

1. Return empty string if empty string is given
2. Count up to entered number
4. Check entered numbers if they contain 3, if true return "won't you be my neighbor?"
5. Check entered numbers if they contain 2, if true return "boop"
6. Check entered numbers if they contain 1, of true return "beep"
7. Change each number up to entered number with "3", "2" & "1" replaced with rules above
8. Return string


*counter()*

Test: "If given an empty string, return "Please enter a number""
Code: counter("")
Expected output: "Please enter a number"


Test: "When a number is entered, the array will count up to that number"
Code: counter("5")
Expected output: ["1", "2", "3", "4", "5"]


*rogifyNumbers()*

Test: "check all numbers, if contains 3, return "won't you be my neighbor?""
Code: rogifyNumbers("3")
Expected output: ["won't you be my neighbor?"]

Test: "check all numbers, if contains 2, return "boop""
Code: rogifyNumbers("2");
Expected output: ["boop"]

Test: "Check all numbers, if contains 1, return "beep""
code: rogifyNumbers("1");
Expected output: ["beep"]

Test: "when a number is entered, all numbers outside of rule will display in order"
Code: rogifyNumbers("6")
Expected output: "beep","boop","won't you be my neighbor","4","5","6"

Test: "
Code: rogifyNumbers("6")
Expected output: ["beep", "boop", "won't you be my neighbor", "4", "5", "6"]