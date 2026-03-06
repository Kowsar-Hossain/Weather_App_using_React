import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9b5647346854ada6dfbf36145d9d9703";

    let getWeather = async (city) => {

        try {
            let url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

            let response = await fetch(url);
            let data = await response.json();

            if (data.cod !== 200) {
                throw new Error("City not found");
            }

            let result = {
                city: data.name,
                country: data.sys.country,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                description: data.weather[0].description,
                icon: data.weather[0].icon
            };

            updateInfo(result);
            setError(false);

        } catch (err) {
            console.log(err);
            setError(true);
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        getWeather(city);
        setCity("");
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <TextField
                    label="City name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />

                <br /><br />

                <Button variant="contained" type="submit">
                    Search
                </Button>

            </form>

            {error && <p style={{color:"red"}}>City not found!</p>}

        </div>
    );
}