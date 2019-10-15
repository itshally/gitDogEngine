const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static('views'))

app.use("/views", express.static(path.join(__dirname, 'views')));

app.set('view engine', 'pug');

app.get('/', (request, response) => {
     response.render('index')
})

app.get('/about', (request, response) => {
     response.render('about')
})

app.get('/gallery', (request, response) => {
     response.render('gallery')
})

app.listen(PORT, () => {
     console.log('app listens to http://localhost:' + PORT)
})