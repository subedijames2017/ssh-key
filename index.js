var express = require('express');
var hbs  = require('express-handlebars');
const path = require('path');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//app.use((req,res,next)=>{
  //res.render('maintainance');
//})

app.get('/help', function (req, res) {
    res.render('about');
});
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
  res.render('home')
})

app.listen(8888,()=>{
  console.log("listning to the port 8888");
});
