const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
  input: fs.createReadStream('myfile.txt'),
  output: process.stdout,
  console: false,
  highWaterMark: 1024 // set buffer size to 1KB
});

readInterface.on('line', function(line) {
  console.log(line);
});


//Task3:

const fs = require('fs');

fs.rename('myfile.txt', 'info.txt', (err) => {
  if (err) throw err;
  console.log('File renamed successfully');
});


//Task4

const fs = require('fs');

fs.unlink('info.txt', (err) => {
  if (err) throw err;
  console.log('File removed successfully');
});


//Task5 as sync
const fs = require('fs');
const data = fs.readFileSync('data.json');
const jsonData = JSON.parse(data);
console.log(jsonData);

//Task5 as async
const fs = require('fs');
fs.readFile('data.json', (err, data) => {
  if (err) throw err;
  const jsonData = JSON.parse(data);
  console.log(jsonData);
});

//Task6
const fs = require('fs');
fs.writeFile('info.txt', 'hello iti', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});


//Task7
const fs = require('fs');
fs.mkdir('myDir', (err) => {
  if (err) throw err;
  console.log('Directory created!');
});