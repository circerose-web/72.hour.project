import { useEffect, useState } from "react";
const baseURL = "https://openweathermap.org/current"
const key = "f60d8d247402a3278d13719c0a5e74d9"
const date = "2020-05-06"
const Weather = ({lat, long}) => {
    const [results, setResults] = useState({});
    useEffect(() =>{ 
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            const url = `${baseURL}?lon=${long}&lat=${lat}&date=${date}&dim=0.15&api_key=${key}`;
            fetch(url)
            .then(res => res.json())
            .then(json =>
                setResults(json))
            .catch(err => console.log(err));
        })
    }, []);
    console.log("RESULTS", results);
    return (
        <div>
            <h2>Weather</h2>
            {lat}
            {long}
            <img src={results.url}  style={{width: "200px"}}/>
        </div>
    )
}
export default Weather