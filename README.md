# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## TDD
Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

Test: "It should omit the word 'zoinks'."
Code: wordFilter("zoinks")
Expected Output: ""

Test: "It should omit the word 'muppeteer'."
Code: wordFilter("muppeteer")
Expected Output: ""

Test: "It should omit the word 'biffaroni'."
Code: wordFilter("biffaroni")
Expected Output: ""

Test: "It should omit the word 'loopdaloop'."
Code: wordFilter("loopdaloop")
Expected Output: ""

Test: "It should omit offensive words. Even when entered twice"
Code: wordFilter("loopdaloop loopdaloop")
Expected Output: ""

Test: "It should omit all the offensive words even when they have different capitalizations"
Code: wordFilter("sentence LooPdaloop word")
Expected Output: "sentence  word"

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_