import React, {useEffect ,useState} from 'react';
import {Image, SafeAreaView, Text, View, ScrollView, Switch, Button} from "react-native";



export default function API() {
    const RENDERy = (DATA) => { return JSON.stringify(DATA)}
    const [WeatherDATA, setWeatherDATA] = useState([]);
    useEffect(() => {
        const options = {
            method: 'GET',
        };
        fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Кендари?unitGroup=metric&key=6Y4QLX3E5R472YCD2T6M7JN3D&contentType=json', options)
            .then(response => response.json())
            .then(data => { setWeatherDATA(data) })
            .catch(error => console.error(error));
    }, []);

    return (
        <View>
            <Text>
                {RENDERy(WeatherDATA)}
            </Text>
        </View>
    );
}