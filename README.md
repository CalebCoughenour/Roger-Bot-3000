
**Specs**

1. Return empty string if empty string is given
2. Count up to entered number
4. Check entered numbers if they contain 3, if true return "won't you be my neighbor?"
5. Check entered numbers if they contain 2, if true return "boop"
6. Check entered numbers if they contain 1, of true return "beep"
7. Change each number up to entered number with "3", "2" & "1" replaced with rules above
8. Return string


counter()

Test: "If given an empty string, return "Please enter a number""
Code: counter("")
Expected output: "Please enter a number"


Test: "When a number is entered, the array will count up to that number"
Code: counter("5")
Expected output: ["1", "2", "3", "4", "5"]


rogifyNumbers()

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
Expected output: ["beep", "boop", "won't you be my neighbor", "4", "5", "6"]