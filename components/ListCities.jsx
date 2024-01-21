import SVG_ICON from "./Ret_SVG_icons";
import {Text, View} from "react-native";
import React, {useState} from "react";

export default function ListCities() {

    let [listCities, setListCities]  = useState([
        {
            name: 'London',
            time: '18:00',
            temp: 15,
            icon: 'partly-cloudy-day'
        },
        {
            name: 'Moscov',
            time: '18:00',
            temp: -10,
            icon: 'snow'
        },
        {
            name: 'Rostov-on-Don',
            time: '18:00',
            temp: 2,
            icon: 'rain'
        },
        {
            name: 'Volgograd',
            time: '18:00',
            temp: 5,
            icon: 'cloudy'
        },
        {
            name: 'Krasnodar',
            time: '18:00',
            temp: 10,
            icon: 'clear-day'
        }
    ]);

    return (
        listCities.map( (el, id) =>
            <View className={'p-4 bg-slate-700 rounded-2xl w-full flex justify-between flex-row mb-5 items-center'} key={id} >
                <SVG_ICON className={'w-1/4'}
                    icons={el.icon}
                    snowParam={0}
                    rainParam={0}
                    sizeSVG={50}
                />
                <View className={'flex flex-col justify-between gap-2 w-2/4'}>
                    <Text className={"font-['Helvetica'] text-white text-lg text-left"}>{ el.name }</Text>
                    <Text className={"font-['Helvetica'] text-slate-400 text-lg text-left"}>{ el.time }</Text>
                </View>
                <Text className={"font-['Helvetica'] text-white text-4xl w-1/4 text-right"}>{ el.temp } &deg;</Text>
            </View>
        )
    );
}

