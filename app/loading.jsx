import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import ArrowSVG from "../assets/images/Arrow";
import React from "react";

export default function Loading() {
    return (
        <SafeAreaView className={'h-full bg-slate-950'}>
            <View className={'h-full flex items-center justify-center'}>
                <StatusBar style={'auto'} />
                <Image className={'w-44 h-44'} source={require('../assets/images/umbrela.png')}  />
                <Text className="mt-14 text-6xl text-slate-200 font-semibold font-['Helvetica']">Loading...</Text>
            </View>
        </SafeAreaView>
    );
}