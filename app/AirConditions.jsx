import {SafeAreaView,Text, View, ScrollView} from "react-native";
import SVG_ICON from "../components/Ret_SVG_icons";
import React, {useEffect, useState} from "react";
import ArrowLeft from "../assets/icons_weather/ArrowLeft";

export default function AirConditions() {


    const [STORE, setWeatherDATA] = useState([]);
    useEffect(() => {
        const options = {
            method: 'GET',
        };
        fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Мурманск?unitGroup=metric&key=6Y4QLX3E5R472YCD2T6M7JN3D&contentType=json', options)
            .then(response => response.json())
            .then(data => { setWeatherDATA(data) })
            .catch(error => console.error(error));
    }, []);

    return (
        <SafeAreaView className={'h-full w-full bg-slate-950'}>
            <ScrollView>
                <View className={'flex items-center justify-start w-full h-full p-5 box-border'}>
                    <ArrowLeft className={'absolute top-5 left-5'}/>
                    <Text className={"font-['Helvetica'] text-slate-400 text-lg uppercase"}>Air Conditions</Text>
                    <Text className={"font-['Helvetica'] text-slate-200 text-5xl mt-14 font-semibold"}> { (RENDER(STORE.address)).replace(/"/g, '') } </Text>
                    <Text className={"font-['Helvetica'] text-slate-400 mt-2 text-lg"}>Precipitation: { Math.round(RENDER(STORE.days[0].precip) * 100) } %</Text>
                    <SVG_ICON className={'mt-5'} width="150" height="150"
                              icons={RENDER(STORE.days[0].icon)}
                              snowParam={Number(STORE.days[0].snow)}
                              rainParam={Number(STORE.days[0].precip)}
                              sizeSVG={150}
                    />
                    <Text className={"font-['Helvetica'] text-white text-6xl mt-5 mb-10"}>{Math.round(RENDER(STORE.currentConditions.temp))}&deg;</Text>
                    <View className={'mt-10 w-full h-fit flex flex-row flex-wrap gap-4 justify-around'}>

                        <View className={'p-4 bg-slate-700 rounded-2xl w-36 flex flex-col'}>
                            <Text className={"font-['Helvetica'] text-slate-400 text-sm uppercase"}>uv index</Text>
                            <Text className={"font-['Helvetica'] text-white text-2xl"}>{ Math.round(RENDER(STORE.days[0].uvindex)) * 10 } %</Text>
                        </View>

                        <View className={'p-4 bg-slate-700 rounded-2xl w-36 flex flex-col'}>
                            <Text className={"font-['Helvetica'] text-slate-400 text-sm uppercase"}>wind</Text>
                            <Text className={"font-['Helvetica'] text-white text-2xl"}>{ Math.round(RENDER(STORE.days[0].windspeed) / 3.6)  } m/s</Text>
                        </View>

                        <View className={'p-4 bg-slate-700 rounded-2xl w-36 flex flex-col'}>
                            <Text className={"font-['Helvetica'] text-slate-400 text-sm uppercase"}>hudmidity</Text>
                            <Text className={"font-['Helvetica'] text-white text-2xl"}>{ Math.round(RENDER(STORE.days[0].humidity)) } %</Text>
                        </View>

                        <View className={'p-4 bg-slate-700 rounded-2xl w-36 flex flex-col'}>
                            <Text className={"font-['Helvetica'] text-slate-400 text-sm uppercase"}>visibility</Text>
                            <Text className={"font-['Helvetica'] text-white text-2xl"}>{ Math.round(RENDER(STORE.days[0].visibility)) } km</Text>
                        </View>

                        <View className={'p-4 bg-slate-700 rounded-2xl w-36 flex flex-col'}>
                            <Text className={"font-['Helvetica'] text-slate-400 text-sm uppercase"}>feels like</Text>
                            <Text className={"font-['Helvetica'] text-white text-2xl"}>{ Math.round(RENDER(STORE.days[0].feelslike)) }&deg;</Text>
                        </View>

                        <View className={'p-4 bg-slate-700 rounded-2xl w-36 flex flex-col'}>
                            <Text className={"font-['Helvetica'] text-slate-400 text-sm uppercase"}>Precipitation</Text>
                            <Text className={"font-['Helvetica'] text-white text-2xl"}>{ Math.round(RENDER(STORE.days[0].precip) * 100) } %</Text>
                        </View>

                        <View className={'p-4 bg-slate-700 rounded-2xl w-36 flex flex-col'}>
                            <Text className={"font-['Helvetica'] text-slate-400 text-sm uppercase"}>pressure</Text>
                            <Text className={"font-['Helvetica'] text-white text-2xl"}>{ Math.round(RENDER(STORE.days[0].pressure)) } hPa</Text>
                        </View>

                        <View className={'p-4 bg-slate-700 rounded-2xl w-36 flex flex-col'}>
                            <Text className={"font-['Helvetica'] text-slate-400 text-sm uppercase"}>sunset</Text>
                            <Text className={"font-['Helvetica'] text-white text-2xl"}>{ (RENDER(STORE.days[0].sunset)).replace(/"/g, '').slice(0,-3) }</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}