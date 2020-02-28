/*
Simple NodeJS Azure Test
To run locally, don't forget to exec "npm install" in your directory to install dependency modules
*/

// Include ExpressJS framework
const express = require('express');
const app = express();

//This is a comment change
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//body parser middleware
app.use(express.urlencoded({
    extended: trues
}));

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.post('/',(req,res)=>{
    console.log(req.body.name,req.body.stuff);

    res.render('welcome.ejs',{
        name: req.body.name,
        stuff:req.body.age
    })
})

app.listen(process.env.PORT||5000,console.log('5000'))
