# is-one-hundred-and-sixty-eight
An extensive NPM package to check if a number is really 168.

## Installation
It's magic.
```bash
npm install is-one-hundred-and-sixty-eight
```

## Usage
You can use this pretty easily
```javascript
const isTheNumberOneHundredAndSixtyEight = require("is-one-hundred-and-sixty-eight");
    
isTheNumberOneHundredAndSixtyEight(168);
// => true
    
isTheNumberOneHundredAndSixtyEight("168");
// => true
    
isTheNumberOneHundredAndSixtyEight(123);
// => false
    
isTheNumberOneHundredAndSixtyEight("a terrible number");
// => false
```