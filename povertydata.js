// Generated by CoffeeScript 1.10.0
(function() {
  var callback, fs, path;

  fs = require('fs');

  path = 'est14_WA.txt';

  fs.readFile(path, callback = function(err, data) {
    if (err) {
      return console.log(err);
    } else {
      return console.log(data.toString().split("\n"));
    }
  });

}).call(this);
