import { useEffect, useState } from "react";

const baseURL = "https://api.nasa.gov/planetary/earth/assets"
const key = "6yPaJQekyfz8gfaooNKIeKedasgHtUGTHBIeiTkf"
const date = "2020-05-06"
const Nasa = ({lat, long}) => {


    const [results, setResults] = useState({});

    useEffect(() =>{ 
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            const url = `${baseURL}?lon=${long}&lat=${lat}&dim=1.00&date=${date}&api_key=${key}`;

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
            <h2>Nasa</h2>
            {lat}
            {long}
            <img src={results.url}  style={{width: "400px"}}/>
        </div>
    )
}

export default Nasa;