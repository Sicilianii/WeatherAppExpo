import {View, Text, SafeAreaView, Image, TouchableOpacity} from "react-native";
import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import ArrowSVG from '../assets/images/Arrow'
import {useRouter, Link} from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Index() {




    const router = useRouter();

    return (
            <SafeAreaView className={'h-full bg-slate-950'}>
                <View className={'h-full flex items-center justify-center'}>
                    <StatusBar style={'auto'} />
                    <Image className={'w-44 h-44'} source={require('../assets/images/umbrela.png')}  />
                    <Text className="mt-14 text-6xl text-slate-200 font-semibold font-['Helvetica']">Breeze</Text>
                    <Text className="mt-2 text-2xl font-extralight text-slate-400 font-['Helvetica']">Weather App</Text>
                        <TouchableOpacity  className={'mt-20'} onPress={ () => { router.push('/Home')}}>
                            <ArrowSVG />
                        </TouchableOpacity>
                </View>
            </SafeAreaView>
    );
}