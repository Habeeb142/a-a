//making express available::::::::::::::::::::::::::::::::::::::::::::::::
var express = require('express');
const server = express();
var request = require('request');
var path = require("path");
//connecting to locahost::::::::::::::::::::::::::::::::::::::::::::::::::
const port = server.listen(process.env.PORT || 3000, ()=>{
    console.log("app is listening to port sir!");
});

//setting engine to ejs::::::::::::::::::::::::::::::::::::::::::::::::::
server.set('view engine', 'ejs');


//middlewares:::
server.use(express.static(__dirname+'/public'));

//requiring body-parser::::::::::::::::::::::::::::::::::::::::::::::::::::
var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));




// Serve static files....
server.use(express.static(__dirname + '/dist/biolaahmed'));

// Send all requests to index.html for mustaphahabeeb.herokuapp.com::::::::::::
server.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/biolaahmed/index.html'));
});
