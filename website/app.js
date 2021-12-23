// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
let zipCode = "";
let baseURL = "";
let mood = "";
let temprature ='';
let city = '';
let country = '';

document.getElementById('generate').addEventListener('click',execute);
function execute(t){
 zipCode = document.getElementById('zip').value;
 baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=8ed93be197e1e48e18975fcf31a992bc&units=metric`;
 mood = document.getElementById('feelings').value;
    getTemp(baseURL)
    .then(function(temprature){
      postData('/',{temprature:temprature, newDate:newDate, mood:mood});
      updateUI();
    });
    
};
let getTemp = async (baseURL)=>{
  const res = await fetch(baseURL);
  try {

    const data = await res.json();
    temprature = data.main.temp;
    city = data.name;
    country = data.sys.country;

    return temprature;
      }  
  catch(error) {

    console.log("error", error);  
    
  }
}
const postData = async (url = '', data = {})=>{
  const response = await fetch(url,{
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    let newData = await response.json();
    console.log(newData);
    return newData;
  }
  catch(error){
    console.log('error',error);
  }
};

const updateUI = async ()=>{
  const request = await fetch('/data')
  try {
    const output = await request.json();
    console.log(output.mood);
    document.getElementById('date').textContent = output.newDate;
    document.getElementById('temp').textContent = output.temprature + '°';
    document.getElementById('content').textContent ='Feelings: '+ output.mood;
    document.getElementById('city').textContent = city+', '+country;

  }
  catch(error) {
    console.log('error: ', error);
  }
};
