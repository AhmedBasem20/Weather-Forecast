let projectData = {};

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
  //Post request to get the data from the client side and store it on the projectData object.
  let data = {};
  app.post('/', addData);
  function addData(req,res){
    data = {
      temprature: req.body.temprature,
      newDate: req.body.newDate,
      mood: req.body.mood
    }
    console.log(data);
    projectData = data;
    console.log('projectData: ');
    console.log(projectData);
  };
  //Get request to send the stored data on the server to the cient side again
  app.get('/data', function(req,res){
    res.send(projectData);
  });