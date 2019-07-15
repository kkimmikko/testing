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
    input: fs.createReadStream('combatlog.txt'),
    output: process.stdout,
    console: false
});
var options = {
  host: "localhost",
  port: 80,
  path: '/resource?id=foo&bar=baz',
  method: 'POST'
};
var buffer = []
rd.on('line', function(line) {
   if (line[0] == '{') {
     buffer = []
     buffer.push(line)
  } else if (line[0] == '}') {
     // convert buffer to json
     var type = parseInt(buffer[1].split(':')[1]) 
     console.log('found type: ' + type)
     if (type == 2 || type == 3) {
             var inflictor = buffer[4].split(':')[1].trim()
             if (inflictor == 'modifier_rune_arcane') {
              // call vmix api
              options.path = 'my new vmix path to close the overlay'
              console.log("Whatever")
              //http.request(options, function (res) {
              //})
              }
             
   }
  } else {
     buffer.push(line)
  }
   });

//process.stdin.resume();