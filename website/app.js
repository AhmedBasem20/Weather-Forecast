// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();





document.getElementById('generate').addEventListener('click',execute);
function execute(t){
let zipCode = document.getElementById('zip').value;
let baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=8ed93be197e1e48e18975fcf31a992bc&units=metric`;
let mood = document.getElementById('feelings').value;
    getZip(baseURL);
};
let getZip = async (baseURL, zipCode, key)=>{
  const res = await fetch(baseURL)
  try {

    const data = await res.json();
    console.log(data.main.temp)
    return data;
      }  catch(error) {
    console.log("error", error);
    
  }
}