
**Specs**

1. Return empty string if empty string is given
2. Split entered numbers into an array
3. Count up to entered number
4. Check entered numbers to check if they contain 3, if true return "won't you be my neighbor?"
5. Check entered numbers to check if they contain 2, if true return "boop"
6. Check entered numbers to check if they contain 1, of true return "beep"
7. Change each number up to entered number with "3", "2" & "1" replaced with rules above
8. Return string


counter()

Test: "If given an empty string, return "Please enter a number""
Code: counter("")
Expected output: "Please enter a number"

Test: "Split number into an array"
code: counter("20")
Expected output: ["20"]

Test: "When a number is entered, the array will count up to that number"
Code: counter("5")
Expected output: ["1", "2", "3", "4", "5"]