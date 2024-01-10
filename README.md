# is-one-hundred-and-sixty-eight
An extensive NPM package to check if a number is really 168.

## Usage
You can use this pretty easily
```
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