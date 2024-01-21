import {Image, SafeAreaView, Text, View, ScrollView, Switch, Button} from "react-native";
import Clouds from "../assets/icons_weather/Clouds";
import CloudAndSun from "../assets/icons_weather/Cloud_and_Sun";
import CloudsSun from "../assets/icons_weather/2Clouds1Sun";
import SunAndRainbow from "../assets/icons_weather/SunAndRainbow";
import CloudAndRain from "../assets/icons_weather/CloudAndRain";
import RainWithThunderstorm from "../assets/icons_weather/RainWithThunderstorm";
import Thunderstorm from "../assets/icons_weather/Thunderstorm";
import Snow from "../assets/icons_weather/Snow";
import Snowfall from "../assets/icons_weather/Snowfall";
import CloudAndMoon from "../assets/icons_weather/CloudAndMoon";
import MoonAndSnow from "../assets/icons_weather/MoonAndSnow";
import MoonRainThunderstorm from "../assets/icons_weather/MoonRainThunderstorm";
import MoonAndSnowfall from "../assets/icons_weather/MoonAndSnowfall";
import MoonAndRain from "../assets/icons_weather/MoonAndRain";
import MoonAndThunderstorm from "../assets/icons_weather/MoonAndThunderstorm";
import CloudWindy from "../assets/icons_weather/CloudWindy";
import WindyAndThunderstorm from "../assets/icons_weather/WindyAndThunderstorm";
import RainstormAndRain from "../assets/icons_weather/WindyAndRain";
import Snowstorm from "../assets/icons_weather/RainstormAndSnow";
import Wind from "../assets/icons_weather/Wind";
import ChanceOfRain from "../assets/icons_weather/ChanceOfRain";
import RealFell from "../assets/icons_weather/RealFell";
import UvIndex from "../assets/icons_weather/UV_Index";
import {useState} from "react";
import Moon from "../assets/icons_weather/Moon";

//clear-night
//clear-day
// fog

export default function SVG_ICON({icons = 'clear-day', snowParam = null, rainParam = null, sizeSVG = 25}) {
    let current_SVG;
    switch (icons) {
        case 'partly-cloudy-day':
            current_SVG = <CloudsSun width={sizeSVG} height={sizeSVG}/>
            break;
        case 'cloudy':
            current_SVG = <Clouds width={sizeSVG} height={sizeSVG}/>
            break;
        case 'clear-day':
            current_SVG = <CloudAndSun width={sizeSVG} height={sizeSVG}/>
            break;
        case 'clear-day-rainbow':
            current_SVG = <SunAndRainbow width={sizeSVG} height={sizeSVG}/>
            break;
        case 'rain':
            current_SVG = ((rainParam < 10) ? <CloudAndRain width={sizeSVG} height={sizeSVG}/> : <CloudWindy width={sizeSVG} height={sizeSVG}/>);
            current_SVG = ((rainParam < 20) ? <CloudWindy width={sizeSVG} height={sizeSVG}/> : <RainstormAndRain width={sizeSVG} height={sizeSVG}/>);
            break;
        // case '':
        //     current_SVG = <RainWithThunderstorm width="50" height="50" />
        //     break;
        // case '':
        //     current_SVG = <Thunderstorm width="50" height="50"/>
        //     break;
        case 'snow':
            current_SVG = ((snowParam < 5) ? <Snow width={sizeSVG} height={sizeSVG}/> : <Snowfall width={sizeSVG} height={sizeSVG}/>)
            break;
        case 'partly-cloudy-night':
            current_SVG = <CloudAndMoon width={sizeSVG} height={sizeSVG}/>
            break;
        // case '':
        //     current_SVG = <MoonAndSnow width="50" height="50"/>
        //     break;
        // case '':
        //     current_SVG = <MoonRainThunderstorm width="50" height="50"/>
        //     break;
        // case '':
        //     current_SVG = <MoonAndSnowfall width="50" height="50"/>
        //     break;
        // case '':
        //     current_SVG = <MoonAndRain width="50" height="50"/>
        //     break;
        // case '':
        //     current_SVG = <MoonAndThunderstorm width="50" height="50"/>
        //     break;
        // case '':
        //     current_SVG = <WindyAndThunderstorm width="50" height="50"/>
        //     break;
        case 'clear-night':
            current_SVG = <Moon width={sizeSVG} height={sizeSVG}/>
            break;
        default:
            current_SVG = <CloudsSun width={sizeSVG} height={sizeSVG}/>
            break;
    }

    return (
        <Text> { current_SVG } </Text>
    );
}

