import { useEffect, useState } from "react";
import weather from './components/weather';
import "./App.css"; 
import Navbar from './components/Navbar';
import Restaurant from './components/Restaurant';

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
      test
      {location.latitude}
      {location.longitude}
      <weather long={location.longitude} lat={location.latitude}/>
    </div>
  )
}

const App = () => {

  const [pos, setPos] = useState({lat: 0, long: 0});
  const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoords)
      } else {
        alert('GeoLocation not enabled');
      }
    }
  const getCoords = (position) => {
      console.log(position)
      setPos({
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
    }
    useEffect(() => {
      getLocation();
    }, [])
  return (
    <div>
      <Navbar />
      <Restaurant pos={pos}/>
    </div>
  );
};

export default App;