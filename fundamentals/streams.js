const fs = require('fs')

let readStream = fs.createReadStream('./docs/text2.txt', {encoding: 'utf-8'})
let writeStream = fs.createWriteStream('./docs/text4.txt')

// readStream.on('data', (chunk) =>{
//     console.log('-----NEW CHUNK------');
//     console.log(chunk);
//     writeStream.write(chunk);

// })

readStream.pipe(writeStream)

