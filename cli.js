var fs = require('fs');
fs.readFile('./image.txt', 'utf8', function(error, content) {
    console.log(content);
});
