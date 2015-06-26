#!/usr/bin/env node

var fs = require('fs');
fs.readFile(__dirname + '/image.txt', 'utf8', function(error, content) {
    console.log(content);
});
