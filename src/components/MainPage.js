import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from './Card';

export default function MainPage(){
const [apod, setApod] = useState();
const [date, setDate] = useState('2020-03-18');
console.log(apod);
useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
    .then(response => {
        setApod(response.data);
        
    })
    .catch(error => {
        console.log('Huston we have a problem',error);
    });
},[date]);
    return (
        <div>
            <button onClick={() => setDate('2020-03-17')}>Yesterday</button>
            <Card imgUrl={apod}/>     
        </div>
    )
}