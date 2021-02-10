import React from 'react';
import {useEffect, useState} from 'react'; //{useEffect, useState}
import RestaurantName from './Card';
import '../styles/Restaurant.css'
// import Location from App.js props

const Restaurant = (props) => {
    const api_key = '709f6af520f78f9d8f74668b7bc17270';
    const lat = props.lat
    const long= props.long
    const [restaurant, setRestaurant] = useState([]);
    const restaurantData = async () => {
        let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}&${api_key}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'user-key': api_key,
                Accept: 'application/json'
            }
        });

        const restaurants = await response.json();
        const restaurantInfo = restaurants.nearby_restaurants;
        setRestaurant(restaurantInfo);
        // useEffect(() => {
            // restaurantData();
        // }, [lat, long]);
    }

    useEffect(() => {
        restaurantData();
    }, [lat, long]);
    return (
        <div className="rest-today">
            <h1>Where's Dinner?</h1>
            {restaurant.map(name => <RestaurantName name={name.restaurant.name} id={name.restaurant.id}/>)}
        </div>
    );
};
export default Restaurant;