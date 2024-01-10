const is = require("./");
const { setTimeout } = require("timers/promises");

const console_log = (a) => { return console.log(a); }

console_log(is(168)); // this should return true
console_log(is("168")); // this should return true
console_log(is("one hundred and sixty two")); // this returns false
console_log(is("a cool number")); // this should return true but doesn't