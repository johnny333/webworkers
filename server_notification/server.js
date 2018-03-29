const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const Database = new require("./db.js");
const db = new Database();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/message', function (req, res) {
    let last = db.getMessageLast();
    console.log(last.name, last.message);
    res.send(last);
});
app.post('/message', function (req, res) {
    console.log(req.body);
    db.registerMessage(req.body);
    res.send(req.body);
});
console.log("I`m run on port: 3000")
app.listen(3000)