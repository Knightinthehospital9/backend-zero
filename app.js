const express = require('express')
const app = express()
const port = 8888
app.set('views', './src/views/');
app.set('views engine', 'ejs')
require('dotenv').config();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')

})
app.get('/abc', (req, res) => {
    res.send('hello world Vu ngu')

})
app.get('/ngungu', (req, res) => {
    res.render('sample.ejs')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})