# _Mr. Robogers, the Friendly Robot._

#### By _**Nick Sullivan**_

#### _A friendly robot's attempt at conversation._

## Technologies Used

* __

## Description

_This website will receive the user's name and any number of the user's choice. When these two are submitted, the user will see a friendly greeting, as well as a string of numbers. The string of numbers includes all number between 0 and the inputted number, with number including 1, 2, and 3, replaced with different friendly robot phrases._

## Setup Instructions

* _Open your terminal and navigate to the folder you'd like to download the files into._
* _Run the command below_
> git clone https://github.com/nicholassull/mr-robogers.git
* _Open index.html_

## Specs
#### Describe: arrayMaker()
```
Test: It should console.log the value of i for each run of the loop.
Code:arrayMaker("3")
Expected Result: 0, 1, 2, 3

Test: It should create an array with all values between 0 and the given number as strings.
Code:arrayMaker("3")
Expected Result: ['0', '1', '2', '3']
```
#### Describe: friendlyRobot()
```
Test: If an element in the array contains '0', it should console.log("Found it!);
Code:friendlyRobot(['1', '0', '20', '3'])
Expected Result: 
'Found it!'
'Found it!'

Test: It should .push() values of inputted array into newArray, but if an element in the array contains '3', push "Won't you be my neighbor?" instead. Return newArray
Code: friendlyRobot(['1', '2', '3', '4', '33']) 
Expected Result: ['1', '2', 'Won't you be my neighbor?', '4', 'Won't you be my neighbor?']

Test: It should include an else if statement for an element that contains '2', then .push('Boop!") to newArray
Code: friendlyRobot(['1', '2', '3', '4', '204']) 
Expected Result: ['1', 'Boop!', 'Won't you be my neighbor?', '4', 'Boop!']

Test: It should include an else if statement for an element that contains '1', then .push('Beep!") to newArray
Code: friendlyRobot(['1', '2', '3', '4', '204']) 
Expected Result: [ 'Beep!', 'Boop!', 'Won't you be my neighbor?', '4', 'Boop!' ]

Test: It should return one string containing the specified values instead of an array.
Code: friendlyRobot(['1', '2', '3', '4', '204']) 
Expected Result: 'Beep! Boop! Won't you be my neighbor? 4 Boop!' 
```
## Known Bugs

* _No known bugs at this time._

## License

Copyright (c) _11/20/2021_ _by Nick Sullivan_


_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._