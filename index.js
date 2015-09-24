'use strict';

let colors = require('colors');
let Time = require('./time');

let time = new Time();

console.log(time.getPretty().green);