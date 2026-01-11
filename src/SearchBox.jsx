import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo})  
{
 let[city,setCity]=useState("");
 let[error,setError]=useState(false);

const API_URL ="https:api.openweathermap.org/data/2.5/weather"
const API_KEY= "f5d5d69b7c320e23a80eff34390fe95c"

let getWeatherInfo = async()=>{
    try{
   
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
     let jsonResponse=await response.json();
     let result={
        city:city,
        temp:jsonResponse.main.temp,
         tempMin: jsonResponse.main.temp_min,
         tempMax: jsonResponse.main.temp_max,
         humidity: jsonResponse.main.humidity,
         feelsLike: jsonResponse.main.feels_like,
         weather: jsonResponse.weather[0].description

    }
    console.log(result);
    return result;
    } catch(error) {
     throw error;
          
    }
 
}

    
    let handlChange=  (evt)=> {
        setCity(evt.target.value);
    }

    let handlesubmit = async(evt)=>{
        try{
             evt.preventDefault();
        console.log(city);
        setCity("");
     let newInfo = await getWeatherInfo();
     updateInfo(newInfo);

        }catch(error){
             setError(true)
        }
        
    }

return(
    <>
    <form onSubmit={handlesubmit}>
     <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlChange} fullWidth
  sx={{
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "10px",

    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      fontSize: "16px",
      "& fieldset": {
        borderColor: "#90caf9",
        borderWidth: "2px",
      },

      "&:hover fieldset": {
        borderColor: "#42a5f5",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#1976d2",
        boxShadow: "0 0 10px rgba(25, 118, 210, 0.5)",
      }
    },

    "& .MuiInputLabel-root": {
      color: "#1976d2",
      fontWeight: "600",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#0d47a1",
    }
  }}/><br></br><br></br>
     <Button variant="contained" type='submit' >Search</Button>
     {error && <p style={{color:"red"}}>No such place existst!</p>}
     <br></br><br></br>
    
    </form>


    </>
)



}