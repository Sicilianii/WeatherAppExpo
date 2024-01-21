import {Text, View, SafeAreaView, ScrollView, Switch} from "react-native";
import React, {useState} from "react";

export default function Settingss({STORE}) {

    const [Settingss, SetSettingss] = useState(false)
    const toggleSwitch = () => SetSettingss(pervstat => !pervstat);

    return (
        <SafeAreaView className={'h-full w-full bg-slate-950'}>
            <ScrollView>
                <View className={'flex items-start justify-start w-full h-full p-5 box-border'}>
                    <Text className={"font-['Helvetica'] text-slate-200 text-[34px] mt-4 ml-0 font-semibold"}>Settings</Text>
                    <View className={'mt-2 w-full h-fit'}>
                        <Text className={"font-['Helvetica'] text-slate-400 mt-8 text-lg font-semibold"}>Units</Text>
                        <View className={'p-4 bg-slate-700 rounded-2xl mt-2 w-full h-fit'}>
                            <View>
                                <Text className={"font-['Helvetica'] text-slate-400 text-lg uppercase"}>temperature</Text>
                            </View>
                            <View>
                                <Text className={"font-['Helvetica'] text-slate-400 text-lg uppercase"}>wind speed</Text>
                            </View>
                            <View>
                                <Text className={"font-['Helvetica'] text-slate-400 text-lg uppercase"}>pressure</Text>
                            </View>
                            <View>
                                <Text className={"font-['Helvetica'] text-slate-400 text-lg uppercase"}>precipitation</Text>
                            </View>
                            <View>
                                <Text className={"font-['Helvetica'] text-slate-400 text-lg uppercase"}>distance</Text>
                            </View>
                        </View>
                    </View>
                    <View className={'mt-2 w-full h-fit'}>
                        <Text className={"font-['Helvetica'] text-slate-200 mt-8 text-lg font-semibold"}>Notifications</Text>
                        <View className={'p-4 bg-slate-700 rounded-2xl mt-2 w-full h-fit flex-row justify-between'}>
                           <View>
                               <Text className={"font-['Helvetica'] text-slate-300 text-lg"}>Notifications</Text>
                               <Text className={"font-['Helvetica'] text-slate-400 text-lg mt-2"}>Be aware  of the weather</Text>
                           </View>
                            <Switch
                                className={''}
                                trackColor={{false: '#0f172a', true: '#86d2cd'}}
                                thumbColor={Settingss ? '#f5dd4b' : '#e0e0e0'}
                                onValueChange={toggleSwitch}
                                value={Settingss}
                            />
                        </View>
                    </View>
                    <View className={'mt-2 w-full h-fit'}>
                        <Text className={"font-['Helvetica'] text-slate-400 mt-8 text-lg font-semibold"}>General</Text>
                        <View className={'w-full h-fit flex-col bg-slate-700 rounded-2xl p-4'}>
                            <View className={'w-full h-fit flex-row justify-between items-center pb-6 '}>
                                <View>
                                    <Text className={"font-['Helvetica'] text-slate-300 text-lg"}>12-Hour Time</Text>
                                </View>
                                <Switch
                                    className={''}
                                    trackColor={{false: '#0f172a', true: '#86d2cd'}}
                                    thumbColor={Settingss ? '#f5dd4b' : '#e0e0e0'}
                                    onValueChange={toggleSwitch}
                                    value={Settingss}
                                />
                            </View>
                            <View className={'pt-4 w-full h-fit flex-row justify-between items-center border-t-[1px] border-[#86d2cd]'}>
                                <View>
                                    <Text className={"font-['Helvetica'] text-slate-300 text-lg"}>Location</Text>
                                    <Text className={"font-['Helvetica'] text-slate-400 text-lg mt-2"}>Get weather of your location</Text>
                                </View>
                                <Switch
                                    className={''}
                                    trackColor={{false: '#0f172a', true: '#86d2cd'}}
                                    thumbColor={Settingss ? '#f5dd4b' : '#e0e0e0'}
                                    onValueChange={toggleSwitch}
                                    value={Settingss}
                                />
                            </View>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}