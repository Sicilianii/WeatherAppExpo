import React, {useEffect ,useState} from 'react';
import {SafeAreaView, View, ScrollView, Button, TextInput} from "react-native";

import ListCities from '../components/ListCities';

export default function SearchCity() {
    return (
        <SafeAreaView className={'h-full w-full bg-slate-950'}>
            <ScrollView>
                <View className={'flex items-center justify-start w-full h-fit p-5 box-border'}>
                    <View className={'flex flex-row w-full justify-between items-center'}>
                        <TextInput
                            className={'w-3/4 m-0 p-4 box-border h-fit bg-slate-700 rounded-2xl text-[18px] text-white '}
                            // onChangeText={onChangeText}
                            // value={'Search Citys'}
                            placeholder={'Search for cities'}
                            placeholderTextColor={'#9399a2ff'}
                        />
                        <Button
                            // onPress={onPressLearnMore}
                            title="Cancel"
                            color="#FFF"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                </View>
                <View className={'flex justify-start w-full h-full p-5 box-border '}>
                    <ListCities />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}