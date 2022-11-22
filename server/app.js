/* import modulo express */
var express = require('express');

var app = express();

const path = require('path');

app.get("/", function(req,res){

   res.sendFile(path.join(__dirname,"../views/index.html"));
   
   });

app.get('/about', function(req,res){
   res.send("<h1> About </h1>");
});


 app.listen(3000, function(){
    console.log("server attivo sulla porta: 3000");
 });

