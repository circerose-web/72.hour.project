import { useEffect, useState } from "react";

import Nasa from './components/Nasa'
// import Weather from './components/Weather'
// import Zomato from './components/Resturant'

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
      <Nasa long={location.longitude} lat={location.latitude}/>
      {/* <Weather long={location.longitude} lat={location.latitude}/>
      <Zomato long={location.longitude} lat={location.latitude}/> */}
    </div>
  )
}

export default App;