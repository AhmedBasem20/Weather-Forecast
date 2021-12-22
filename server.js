projectData = {};

const express = require('express');
const app = express();

//Dependencies
const bodyParser = require('body-parser');
//configure express to use body-parser as middle-ware.
app.use(express.urlencoded({extended: false }));
app.use(express.json());
//Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Initialize the main project folder
app.use(express.static('website'));

const port = 8000;
const server = app.listen(port, listening);
function listening(){
    console.log('Server is running...');
    console.log(`running on localhost: ${port}`);
};
  const data = [];
  app.post('/add', addMovie);
  function addMovie(req,res){
    data.push(req.body);
    console.log(data);
  };
  app.get('/', function(req,res){
    res.send(api.temp)
  });