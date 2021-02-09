import "./App.css"; 
import {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Restaurant from './components/Restaurant'

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