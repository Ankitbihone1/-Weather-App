
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp()
{
const[weatherInfo,setWeatherInfo]=useState({
city:"Wonderland",
feelsLike: 24.88,
humidity: 24,
temp: 25.63,
tempMax: 25.63,
tempMin: 25.63,
weather: "scattered clouds",
        
    })

let updateInfo =(newInfo)=>{
    setWeatherInfo(newInfo);
}


    return(
<div>
  <h2>Weather App by Ankit</h2>
  <SearchBox updateInfo={updateInfo}/>
  <InfoBox info={weatherInfo}/>

</div>

    )



}