# Universal Tester

Simple class to test functions written in node js

## Installation
`npm i universal-tester`

## Usage
```javascript
const Tester = require('universal-tester');
let tester = new Tester();
```

### test(functionOutput, expectedOutput, functionName)
Add tests to tester class

`functionOutput` - output of the function

`expectedOutput` - expected output of the function

`functionName` - name of the function


```javascript
function helloWorld(){
  return 'Hello, World!';
}

tester.test(helloWorld(), 'Hello, World!', 'helloWorld');

```

### printResults()
Prints test results. For passed tests, "PASSED" is printed with the test number and function that was run. For failed tests, "FAILED" is printed with test number, function name, as well as the outputs.

```
Test 1 (helloWorld)  PASSED


1/1 tests passed
```
