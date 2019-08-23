# Beep Boop Exception Generator

#### Converts numeric input and displays exception values, {23-Aug-2019}

#### By **Christine Frank**

## Description

This application takes user numeric input and returns a range of numbers starting from 0 to the user's value. Specific execptions are displayed per the following rules, in order of precedence (least to greatest):
  1. Numbers containing a 1: all digits are replaced with "Beep!"
  2. Numbers containing a 2: all digits are replaced with "Boop!"
  3. Numbers containing a 3: all digits are replaced with
     "I'm sorry Dave, I'm afraid I can't do that."

## Setup/Installation Requirements

* Clone this repository
* At the local repository, copy the full path of the index.html file
* Open a new web browser
* Pasted the copied path into the browser

## Known Bugs

* No bugs known at this time

## Support and contact details

* Email: christine.braun13@gmail.com
* LinkedIn: https://www.linkedin.com/in/christine-frank/

## Application Specifications

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| The program disallows non-numeric input | "input string" | "Input not accepted. Please enter a number" |
| The program displays a range of numbers from 0 to the users inputted number | 5 | 0, 1, 2, 3, 4, 5 |
| The program displays the message "Beep!" to replace all numbers in the range containing a 1 | 1 | 0, "Beep!"|
| The program displays the message "Boop!" to replace all numbers in the range containing a 2 | 2 | 0, "Beep!", "Boop!" |
| The program displays the message "I'm sorry Dave. I'm afraid I can't do that." to replace all numbers in the range containing a 3 | 3 | 0, "Beep!", "Boop!", "I'm sorry Dave. I'm afraid I can't do that." |
| The program sets message precedence (lowest to highest) based on the following number order 1, 2, 3 | 12 | 0, "Beep!", "Boop!", "I'm sorry Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9, "Beep!", "Beep", "Boop!" |



## Technologies Used

* JavaScript
  * jQuery

### License

*This application is licensed under the MIT license.*

Copyright (c) 2019 **_Christine Frank_**
