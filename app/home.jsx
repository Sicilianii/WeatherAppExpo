import React, {useEffect ,useState} from 'react';
import {SafeAreaView, Text, View, ScrollView, Button} from "react-native";

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
import CloudRainstorm from "../assets/icons_weather/CloudWindy";
import RainstormAndThunderstorm from "../assets/icons_weather/WindyAndThunderstorm";
import RainstormAndRain from "../assets/icons_weather/WindyAndRain";
import RainstormAndSnow from "../assets/icons_weather/RainstormAndSnow";
import Wind from "../assets/icons_weather/Wind";
import ChanceOfRain from "../assets/icons_weather/ChanceOfRain";
import RealFell from "../assets/icons_weather/RealFell";
import UvIndex from "../assets/icons_weather/UV_Index";
import SVG_ICON from "../components/Ret_SVG_icons";


export default function Home({STORE, RENDER}) {




    let date = new Date();
    let days = ['Sun','Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const getDays = (num = 0) => {
        let currentDay = (Number(date.getDay()) + Number(num))
        return days[currentDay > 6 ? currentDay % 7 : currentDay]
    };

    return (

            <SafeAreaView className={'h-full w-full bg-slate-950'}>
                <ScrollView>
                    <View className={'flex items-center justify-start w-full h-full p-5 box-border'}>
                        <Text className={"font-['Helvetica'] text-slate-200 text-5xl mt-14 font-semibold"}> { (RENDER(STORE.address)).replace(/"/g, '') } </Text>
                        <Text className={"font-['Helvetica'] text-slate-400 mt-2 text-lg"}>Precipitation: { Math.round(RENDER(STORE.days[0].precip) * 100) } %</Text>
                        <SVG_ICON className={'mt-5'} width="150" height="150"
                            icons={RENDER(STORE.days[0].icon)}
                            snowParam={Number(STORE.days[0].snow)}
                            rainParam={Number(STORE.days[0].precip)}
                            sizeSVG={150}
                        />
                        <Text className={"font-['Helvetica'] text-white text-6xl mt-5"}>{Math.round(RENDER(STORE.currentConditions.temp))}&deg;</Text>
                        <View className={'mt-10 w-full h-fit bg-slate-700 rounded-2xl p-5'}>
                            <Text className={"font-['Helvetica'] text-slate-400 text-lg uppercase"}>Today's forecast</Text>
                            <View className={'flex flex-row justify-around mt-4'}>
                                <View className={'justify-center items-center gap-3 '}>
                                    <Text className={"font-['Helvetica'] text-slate-400 text-xl"}> { (RENDER(STORE.days[0].hours[8].datetime)).replace(/"/g, '').slice(0,-3) } </Text>
                                    <SVG_ICON
                                        icons={RENDER(STORE.days[0].hours[8].icon)}
                                        snowParam={Number(STORE.days[0].hours[8].snow)}
                                        rainParam={Number(STORE.days[0].hours[8].precip)}
                                        sizeSVG={50}
                                    />
                                    <Text className={"font-['Helvetica'] text-slate-400 text-xl"}>{ Math.round(RENDER(STORE.days[0].hours[14].temp)) }&deg;</Text>
                                </View>
                                <View className={'justify-center items-center gap-3 '}>
                                    <Text className={"font-['Helvetica'] text-slate-400 text-xl"}>{ (RENDER(STORE.days[0].hours[14].datetime)).replace(/"/g, '').slice(0,-3) }</Text>
                                    <SVG_ICON
                                        icons={RENDER(STORE.days[0].hours[14].icon)}
                                        snowParam={Number(STORE.days[0].hours[14].snow)}
                                        rainParam={Number(STORE.days[0].hours[14].precip)}
                                        sizeSVG={50}
                                    />
                                    <Text className={"font-['Helvetica'] text-slate-400 text-xl"}>{ Math.round(RENDER(STORE.days[0].hours[14].temp)) }&deg;</Text>
                                </View>
                                <View className={'justify-start items-center gap-3'}>
                                    <Text className={"font-['Helvetica'] text-slate-400 text-xl"}>{ (RENDER(STORE.days[0].hours[23].datetime)).replace(/"/g, '').slice(0,-3) }</Text>
                                    <SVG_ICON
                                        icons={RENDER(STORE.days[0].hours[23].icon)}
                                        snowParam={Number(STORE.days[0].hours[23].snow)}
                                        rainParam={Number(STORE.days[0].hours[23].precip)}
                                        sizeSVG={50}
                                    />
                                    <Text className={"font-['Helvetica'] text-slate-400 text-xl"}>{ Math.round(RENDER(STORE.days[0].hours[23].temp)) }&deg;</Text>
                                </View>
                            </View>
                        </View>

                        <View className={'mt-10 w-full h-fit bg-slate-700 rounded-2xl p-5'}>
                            <Text className={"font-['Helvetica'] text-slate-400 text-lg uppercase"}>7-day forecast</Text>
                            <View className={"flex flex-col h-fit gap-3 mt-1"}>
                                <View className={"flex flex-row justify-between w-full items-center gap-2"}>
                                    <Text className={"w-1/6 font-['Helvetica'] text-slate-400 text-lg"}> { getDays() } </Text>
                                    <Snow className={"w-1/4"} width="40" height="40"/>
                                    <Text className={"w-1/4 text-center font-['Helvetica'] text-slate-400 text-lg"}>Snowy</Text>
                                    <Text className={"w-1/4 text-right pr-2 font-['Helvetica'] text-slate-400 text-lg"}>{ Math.round(RENDER(STORE.days[0].tempmin)) }&deg; / { Math.round(RENDER(STORE.days[0].tempmax)) }&deg;</Text>
                                </View>
                                <View className={"flex flex-row justify-between w-full items-center gap-2"}>
                                    <Text className={"w-1/6 font-['Helvetica'] text-slate-400 text-lg"}>{ getDays(1) }</Text>
                                    <Snowfall className={"w-1/4"} width="40" height="40"/>
                                    <Text className={"w-1/4 text-center font-['Helvetica'] text-slate-400 text-lg"}>Snowfall</Text>
                                    <Text className={"w-1/4 text-right pr-2 font-['Helvetica'] text-slate-400 text-lg"}>{ Math.round(RENDER(STORE.days[1].tempmin)) }&deg; / { Math.round(RENDER(STORE.days[1].tempmax)) }&deg;</Text>
                                </View>
                                <View className={"flex flex-row justify-between w-full items-center gap-2"}>
                                    <Text className={"w-1/6 font-['Helvetica'] text-slate-400 text-lg"}>{ getDays(2) }</Text>
                                    <Snowfall className={"w-1/4"} width="40" height="40"/>
                                    <Text className={"w-1/4 text-center font-['Helvetica'] text-slate-400 text-lg"}>Snowfall</Text>
                                    <Text className={"w-1/4 text-right pr-2 font-['Helvetica'] text-slate-400 text-lg"}>{ Math.round(RENDER(STORE.days[2].tempmin)) }&deg; / { Math.round(RENDER(STORE.days[2].tempmax)) }&deg;</Text>
                                </View>
                                <View className={"flex flex-row justify-between w-full items-center gap-2"}>
                                    <Text className={"w-1/6 font-['Helvetica'] text-slate-400 text-lg"}>{ getDays(3) }</Text>
                                    <Snow className={"w-1/4"} width="40" height="40"/>
                                    <Text className={"w-1/4 text-center font-['Helvetica'] text-slate-400 text-lg"}>Snowy</Text>
                                    <Text className={"w-1/4 text-right pr-2 font-['Helvetica'] text-slate-400 text-lg"}>{ Math.round(RENDER(STORE.days[3].tempmin)) }&deg; / { Math.round(RENDER(STORE.days[3].tempmax)) }&deg;</Text>
                                </View>
                                <View className={"flex flex-row justify-between w-full items-center gap-2"}>
                                    <Text className={"w-1/6 font-['Helvetica'] text-slate-400 text-lg"}>{ getDays(4) }</Text>
                                    <RainstormAndSnow className={"w-1/4"} width="40" height="40"/>
                                    <Text className={"w-1/4 text-center font-['Helvetica'] text-slate-400 text-lg"}>Snowstorm</Text>
                                    <Text className={"w-1/4 text-right pr-2 font-['Helvetica'] text-slate-400 text-lg"}>{ Math.round(RENDER(STORE.days[4].tempmin)) }&deg; / { Math.round(RENDER(STORE.days[4].tempmax)) }&deg;</Text>
                                </View>
                                <View className={"flex flex-row justify-between w-full items-center gap-2"}>
                                    <Text className={"w-1/6 font-['Helvetica'] text-slate-400 text-lg"}>{ getDays(5) }</Text>
                                    <RainstormAndSnow className={"w-1/4"} width="40" height="40"/>
                                    <Text className={"w-1/4 text-center font-['Helvetica'] text-slate-400 text-lg"}>Snowstorm</Text>
                                    <Text className={"w-1/4 text-right pr-2 font-['Helvetica'] text-slate-400 text-lg"}>{ Math.round(RENDER(STORE.days[5].tempmin)) }&deg; / { Math.round(RENDER(STORE.days[5].tempmax)) }&deg;</Text>
                                </View>
                                <View className={"flex flex-row justify-between w-full items-center gap-2"}>
                                    <Text className={"w-1/6 font-['Helvetica'] text-slate-400 text-lg"}>{ getDays(6) }</Text>
                                    <Snow className={"w-1/4"} width="40" height="40"/>
                                    <Text className={"w-1/4 text-center font-['Helvetica'] text-slate-400 text-lg"}>Snowy</Text>
                                    <Text className={"w-1/4 text-right pr-2 font-['Helvetica'] text-slate-400 text-lg"}>{ Math.round(RENDER(STORE.days[6].tempmin)) }&deg; / { Math.round(RENDER(STORE.days[6].tempmax)) }&deg;</Text>
                                </View>
                            </View>
                        </View>
                        <View className={'mt-10 w-full h-fit bg-slate-700 rounded-2xl p-5'}>
                            <View className={"flex flex-row items-center justify-between mb-4"}>
                                <Text className={"font-['Helvetica'] text-slate-400 text-lg uppercase"}>Air conditions</Text>
                                <Button title={'See more'} className={"border border-slate-300 hover:border-slate-400"} color="#fff"/>
                            </View>
                            <View className={"flex flex-row h-fit  mt-1 flex-wrap gap-5 justify-between"}>
                                <View className={"flex flex-row items-center w-2/5 j"}>
                                    <RealFell className={"mr-2"} width="40" height="40"/>
                                    <View className={"flex column"}>
                                        <Text className={"mb-1 font-['Helvetica'] text-slate-400 text-lg"}>Real Feel</Text>
                                        <Text className={"font-['Helvetica'] text-slate-400 text-lg"}>{ Math.round(RENDER(STORE.currentConditions.feelslike)) }&deg;</Text>
                                    </View>
                                </View>
                                <View className={"flex flex-row items-center w-2/5 j"}>
                                    <Wind className={"mr-2"} width="40" height="40"/>
                                    <View className={"flex column"}>
                                        <Text className={"mb-1 font-['Helvetica'] text-slate-400 text-lg"}>Wind</Text>
                                        <Text className={"font-['Helvetica'] text-slate-400 text-lg"}>{ Math.round(RENDER(STORE.currentConditions.windspeed) / 3.6)  } m/s</Text>
                                    </View>
                                </View>
                                <View className={"flex flex-row items-center w-2/5 j"}>
                                    <ChanceOfRain className={"mr-2"} width="40" height="40"/>
                                    <View className={"flex column"}>
                                        <Text className={"mb-1 font-['Helvetica'] text-slate-400 text-lg"}>Precipitation</Text>
                                        <Text className={"font-['Helvetica'] text-slate-400 text-lg"}>{ Math.round(RENDER(STORE.days[0].precip) * 100) } %</Text>
                                    </View>
                                </View>

                                <View className={"flex flex-row items-center w-2/5 j"}>
                                    <UvIndex className={"mr-2"} width="40" height="40"/>
                                    <View className={"flex flex-col"}>
                                        <Text className={"mb-1 font-['Helvetica'] text-slate-400 text-lg"}>UV Index</Text>
                                        <Text className={"font-['Helvetica'] text-slate-400 text-lg"}>{ Math.round(RENDER(STORE.currentConditions.uvindex)) * 10 } %</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

    );
}