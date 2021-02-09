import React from 'react';
import {useEffect, useState} from 'react'; //{useEffect, useState}
import RestaurantName from './RestaurantName';
// import Location from App.js props

const Restaurant = ({pos}) => {
    const api_key = '709f6af520f78f9d8f74668b7bc17270';
    const [restaurant, setRestaurant] = useState([]);
    const restaurantData = async () => {
        let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${pos.lat}&lon=${pos.long}&${api_key}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'user-key': api_key,
                'Accept': 'application/json'
            }
        });

        const restaurants = await response.json();
        const restaurantInfo = restaurants.nearby_restaurants;
        setRestaurant(restaurantInfo);
    }

    useEffect(() => {
        restaurantData();
    }, [pos.lat, pos.long]);
    return (
        <div>
            <h1>Restaurants Near Me</h1>
            {restaurant.map(name => <RestaurantName name={name.restaurant.name} id={name.restaurant.id}/>)}
        </div>
    );
};
export default Restaurant;