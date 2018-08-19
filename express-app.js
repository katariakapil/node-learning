const express = require('express');
const hbs = require('hbs');

var app = express();

//hbs.registerPartial(__dirname + '/views/partials');

app.set('view engine',hbs);

app.use(express.static(__dirname +'/public'));
//middelware
app.use((req,res,next) => {
    //call application
    var now = new Date().toString();
    console.log(`request time ${now} ${req.method} ${req.url}`) ;
    next();

});

app.get('/', (req,res) => {

 /*   console.log("request to server");
  //  res.send("hello express");
    console.log(__dirname+'/public');

    var data = {
        "name":"Kapil",
        "age":"35"
    };
    res.send(data);
    */
});


app.get('/about', (req,res) => {

    res.render('about.hbs', {
        year : new Date().getFullYear(),
        aboutData : "This is data passed to template"
    });
});
//get port from heroku
const port = process.env.PORT || 3000;

app.listen(port);