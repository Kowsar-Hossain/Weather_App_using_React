import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {

    let HOT_URL =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331";

    let COLD_URL =
    "https://images.unsplash.com/photo-1483664852095-d6cc6870702d";

    let RAIN_URL =
    "https://images.unsplash.com/photo-1501696461415-6bd6660c6742";

    let imageUrl = HOT_URL;

    if(info.humidity > 80){
        imageUrl = RAIN_URL;
    } else if(info.temperature < 15){
        imageUrl = COLD_URL;
    }

    const iconUrl =
    `https://openweathermap.org/img/wn/${info.icon}@4x.png`;

    return (

        <div style={{
            display:"flex",
            justifyContent:"center",
            marginTop:"30px"
        }}>

        <Card sx={{
            width: 500,
            boxShadow: 5,
            borderRadius: 3
        }}>

            <CardMedia
                sx={{ height: 220 }}
                image={imageUrl}
            />

            <CardContent>

                <Typography
                    gutterBottom
                    variant="h4"
                    align="center"
                >
                    {info.city}, {info.country}
                </Typography>

                <div style={{textAlign:"center"}}>
                    <img src={iconUrl} />
                </div>

                <Typography variant="h6">
                    🌡 Temperature: {info.temperature}°C
                </Typography>

                <Typography variant="h6">
                    💧 Humidity: {info.humidity}%
                </Typography>

                <Typography variant="h6">
                    🤒 Feels Like: {info.feelsLike}°C
                </Typography>

                <Typography variant="h6">
                    🌤 Weather: {info.description}
                </Typography>

            </CardContent>

        </Card>

        </div>
    )
}