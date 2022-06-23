var fs = require('fs');

// //reads a file (sync code executed line by line)
// var readMe = fs.readFileSync('readme.txt', 'utf8');
// console.log(readMe);

// //reads a file, stores it in variable fs and writes it to writeme.txt
// var readMe = fs.readFileSync('readme.txt', 'utf8');
// fs.writeFileSync('writeme.txt', readMe);

// //reads a file (async code is not executed line by line)
// fs.readFile('readme.txt', 'utf8', function(err,data){
//     console.log(data)
// });

//writes a file from variable data 
fs.readFile('readme.txt', 'utf8', function(data){
    fs.writeFile('writeme.txt', data);
});