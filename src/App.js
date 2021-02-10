import { useEffect, useState } from "react";
import Restaurant from './components/Restaurant';
import Weather from './components/Weather';
import Nasa from './components/Nasa';
import "./App.css"; 
import Navbar from './components/Navbar';

const App = () => {
  const [location, setLocation] = useState({latitude: 0, longitude: 0})
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((pos)=> {
      console.log(pos)
      setLocation(
        {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        }  
      )
    });
  },[])
  return (
    <div className="App">
      {location.latitude}
      {location.longitude}
      <Navbar />
      <Nasa long={location.longitude} lat={location.latitude}/>
      <Weather long={location.longitude} lat={location.latitude}/>
      <Restaurant long={location.longitude} lat={location.latitude}/>
    </div>
  )
}

export default App;