const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//read/write streams


// readStream.on('data', (chunk) => {
//     console.log('-----New chunk-----');
//     console.log(chunk);
//     console.log('\n\n');

//     writeStream.write('\n\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });


//read/write streams using pipes
readStream.pipe(writeStream);
