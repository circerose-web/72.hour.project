import React, {Component, useState, UseEffect} from 'react';
import '../styles/Restaurant.css';


class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat : null, 
            lon : null,
            key: "709f6af520f78f9d8f74668b7bc17270",
            restaurantsList: []
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }
    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
          alert("Geolocation is not supported by this browser");
        }
    }

componentDidMount() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                lat: (position.coords.latitude),
                long: (position.coords.longitude)
            })
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            
            fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.lat}&lon=${this.state.long}&apikey=${this.state.key}`)
            .then((value) => {
                return value.json();
            }).then(json => {
                console.log(json.nearby_restaurants);
                restaurants(json.nearby_restaurants);
            });
        })


        let restaurants = (jsonData) => {
            let i = 0;
            while(i < jsonData.length) {
                const list = this.state.restaurantsList.slice();
                document.getElementById('restlist').innerHTML = list.toString();
                list[i] = jsonData[i].restaurant.name;
                this.setState({
                    restaurantsList: list
                })
                i++;
                }
            }   
        }
    }     
    render () {
        return(
            <div class='container'>
             <div class='restdisplay'>
                <h4 id='restlist'>{this.state.restaurantsList}</h4>
             </div>
             </div>
            )
    }
}

export default Restaurant;

