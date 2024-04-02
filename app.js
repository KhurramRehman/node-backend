const express = require('express');

//express app
const app = express();

let path = './views/'

//listen for requests

app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>home page</p>')
    let filePath = path + 'index.html';
    res.sendFile(filePath, {root: __dirname});
})

app.get('/about', (req, res) => {
    let filePath = path + 'about.html';
    res.sendFile(filePath, {root: __dirname});
});

app.get('/about-us', (req, res) => {
    res.redirect('/about')
});

app.use((req, res) => {
    let filePath = path + '404.html'
    res.status(404).sendFile(filePath, {root: __dirname});
})