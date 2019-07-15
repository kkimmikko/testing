/* var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('combatlog1.txt')
  });
  
  lineReader.on('line', function (line) {
    if ('line' === "type: 4");
      console.log('Line from file:', line);
  }); */

//var Lazy=require("lazy");
//new Lazy(process.stdin);
var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('combatlog1.txt'),
    output: process.stdout,
    console: false
});

rd.on('line', function(line) {
    console.log(line);
});

//process.stdin.resume();