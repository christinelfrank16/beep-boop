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
| ------------- |:-------------:| :-----------:|
| The program disallows non-numeric input in number input field | "input string" | "Please enter a number" |
| The program ignores content after the first word in the name input| "hi my name is christine" | "hi" |
| The program removes non-alphabetic content and capitalizes the first letter of the name input | "chri!$%stine frank" | "Christine" |
| The program displays a range of numbers from 0 to the users inputted number | 5 | 0, 1, 2, 3, 4, 5 |
| The program displays the range of numbers as a list | 5 | 0<br> 1<br>2<br>3<br>4<br>5 |
| The program displays the message "Beep!" to replace all numbers in the range containing a 1 | 1 | 0<br>"Beep!"|
| The program displays the message "Boop!" to replace all numbers in the range containing a 2 | 2 | 0<br>"Beep!"<br>"Boop!" |
| The program displays the message "I'm sorry Dave. I'm afraid I can't do that." to replace all numbers in the range containing a 3 | 3 | 0<br>"Beep!"<br>"Boop!"<br>"I'm sorry Dave. I'm afraid I can't do that." |
| The program displays the message "I'm sorry Dave. I'm afraid I can't do that." with 'Dave' replaced by the user's name at all numbers in the range divisible by 3 AND containing a 3 | "chris"<br>13 |  0<br>"Beep!"<br>"Boop!"<br>"I'm sorry Chris. I'm afraid I can't do that."<br>4<br>5<br>6<br>7<br>8<br>9<br>"Beep!"<br>"Beep"<br>"Boop!"<br>"I'm sorry Dave. I'm afraid I can't do that."|
| The program sets message precedence (lowest to highest) based on the following number order 1, 2, 3 | 12 | 0<br>"Beep!"<br>"Boop!"<br>"I'm sorry Dave. I'm afraid I can't do that."<br>4<br>5<br>6<br>7<br>8<br>9<br>"Beep!"<br>"Beep"<br>"Boop!" |
| The program displays the count of each range value, grouping numbers under one value | 4 | 0<br>"Beep!"<br>"Boop!"<br>"I'm sorry Dave. I'm afraid I can't do that."<br>4<br><br> Value : Count <br>Numbers : 2<br>Beep! : 1<br>Boop! : 1<br>I'm sorry ... : 1|
| The program displays the frequency of each range value, grouping numbers under one value | 4 | 0<br>"Beep!"<br>"Boop!"<br>"I'm sorry Dave. I'm afraid I can't do that."<br>4<br><br> Value : Count : Frequency<br>Numbers : 2 : 20%<br>Beep! : 1 : 10%<br>Boop! : 1 : 10%<br>I'm sorry ... : 1 : 10%|
| The program displays the count and frequency of range values with special font effects | 4 | 0<br>"Beep!"<br>"Boop!"<br>"I'm sorry Dave. I'm afraid I can't do that." (class = other)<br>4<br><br> Value : Count : Frequency<br>Numbers : 2 : 20%<br> Special Font Effects : 1 : 10%<br>Beep! : 1 : 10%<br>Boop! : 1 : 10%<br>I'm sorry ... : 1 : 10%|



## Technologies Used

* JavaScript
  * jQuery

### License

*This application is licensed under the MIT license.*

Copyright (c) 2019 **_Christine Frank_**
