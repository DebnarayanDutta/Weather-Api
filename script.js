let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let div2 = document.getElementById('div2')
let error =document.getElementById('error')
let location1 = document.getElementById('location-text1')
let lat2 = document.getElementById('lat-text2')
let TimeZone3 = document.getElementById('timezone-text3')
let WindSpeed4 = document.getElementById('windspeed-text4')
let Pressure5 = document.getElementById('pressure-text5')
let Humidity6 = document.getElementById('humidity-text6')
let WindDirection7 = document.getElementById('windDirection-text7')
let UVindex8 = document.getElementById('uvIndex-text8')
let FeelsLike9 = document.getElementById('feelslike-text9')
let Long10 = document.getElementById('long-text10')


function btn(){
let a=input1.value
let b=input2.value
error.innerText = ''

if(a !== '' && b !== ''){
   // let data = fetch(`http://api.weatherstack.com/current?access_key=${b}&query=${a}`)
   let data = fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${a}?unitGroup=metric&key=${b}&contentType=json`)
    data
    .then(pro => pro.json())
    .then(weather => {
     
     location1.innerText= weather.address
     
     lat2.innerText= weather.latitude
     
     TimeZone3.innerText= weather.timezone
     
     WindSpeed4.innerText= weather.days[0].windspeed
    
     Pressure5.innerText= weather.currentConditions.pressure
     
     Humidity6.innerText= weather.currentConditions.humidity
    
     WindDirection7.innerText= weather.currentConditions.winddir
    
     UVindex8.innerText= weather.days[0].uvindex
     
     FeelsLike9.innerText= weather.currentConditions.feelslike
     
     Long10.innerText= weather.longitude
    
     
     
     error.innerText=' '

    }).catch(err => {
        error.innerText = 'no result found';
    })
}else {
    
    error.innerText='Empty input not allowed'

    location1.innerText= ''
     
     lat2.innerText= ''
     
     TimeZone3.innerText= ''
     
     WindSpeed4.innerText= ''
     
     Pressure5.innerText= ''
     
     Humidity6.innerText= ''
    
     WindDirection7.innerText= ''
    
     UVindex8.innerText= ''
     
     FeelsLike9.innerText= ''
     
     Long10.innerText= ''

  //  console.log('not allowed')
}
}