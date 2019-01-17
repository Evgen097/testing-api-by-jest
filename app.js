//app.js
let morgan = require('morgan');
let bodyParser = require('body-parser');
let book = require('./app/routes/book');

const express = require('express')
const app = express();

app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get("/", (req, res) => res.json({message: "Welcome to our Bookstore!"}));

app.route("/book")
    .get(book.getBooks)
    .post(book.postBook);


app.all('*', function (req, res, next) {
    console.log('Nothing to show ...');
    next(); // pass control to the next handler
});




module.exports = app;