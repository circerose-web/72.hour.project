import { useEffect, useState } from "react";
import weather from './components/weather';
//import Navbar from './components/Navbar';
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
export default App;