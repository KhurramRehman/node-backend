const fs = require('fs')

//read files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

//write files
// fs.writeFile('./docs/blog1.txt', 'lawda lassan ninjas', () => {
//     console.log('file written successfully');
// })

//directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('directory created');
//     })
// }
// else {
//     fs.rmdir('./assets', () => {
//         console.log('directory removed');
//     })
// }

//delete files

if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file removed');
    })
}