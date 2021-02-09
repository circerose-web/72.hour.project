import { Route } from "react-router-dom";
import { useEffect, useState } from "react";


import "./App.css";
import Restaurant from "./components/Restaurant";
import Navbar from "./components/Navbar";

const App = () => {
  const [pos, setPos] = useState({latitude: 0, longitude: 0})
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((pos)=> {
      console.log(pos)
      setPos(
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
      {pos.latitude}
      {pos.longitude}
       {/* <Restaurant long={location.longitude} lat={location.latitude}/> */}
      <Navbar />
      <Restaurant pos = {pos}/>
    </div>
  )
};

export default App;