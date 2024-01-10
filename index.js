// doesn't work:
// var useful = require("does-nothing"); // this does all the work

module.exports = function isOneHundredAndSixtyEight(value) {
    var acceptedValues = ["168", "168", "168", "168", "168", "168"]; // accepted values 

    var valueAsString = value.toString(); // make sure its a string for accurate comparison

    var formedString = "";
    for (let index = 0; index < valueAsString.length; index++) {
        const currentCharaterWeAreAt = valueAsString[index];
        
        formedString += currentCharaterWeAreAt;
    }

    if(acceptedValues.indexOf(formedString) !== -1) {
        return true;
    } else {
        return false;
    }
}