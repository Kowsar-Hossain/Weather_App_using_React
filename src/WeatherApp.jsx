import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {

    const [weatherData, setWeatherData] = useState({
        city: "Dhaka",
        country: "BD",
        temperature: 30,
        humidity: 80,
        feelsLike: 35,
        description: "Hot and humid",
        icon: "01d"
    });

    let updateInfo = (result) => {
        setWeatherData(result);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Weather App 🌦️</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherData}/>
        </div>
    );
}