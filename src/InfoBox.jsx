import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';



export default function InfoBox({info})
{
const INIT_URL= "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const Cold_URL="https://images.unsplash.com/photo-1579847641267-5445b760b991?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const RAIN_URL="https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


return(
   <div className="InfoBox">
    <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>80 
            ? RAIN_URL 
            :info.temp>15
            ?HOT_URL : 
            Cold_URL
        }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {
            info.humidity>80 
            ? <ThunderstormIcon/>
            :info.temp>15
            ?<SunnyIcon/> : 
            <AcUnitIcon/>
            }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"} >
           <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Tem={info.tempMin}&deg;C</p>
            <p>Ma Tem={info.tempMax}&deg;C</p>
            <p>The Weather can be descibed as <i>{info.weather}</i>and feels like={info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>

</div>



   </div>
    )
}