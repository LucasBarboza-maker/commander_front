import * as React from 'react';
import {View, StatusBar } from 'react-native';
import Utils from '../../assets/Utils/colors.json'
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';


export default function GlobalStatusBar(){
    return(    
    <View style={{height:StatusBar.currentHeight, backgroundColor:Utils.main_color, width:'100%'}}>
        <ExpoStatusBar style="light"></ExpoStatusBar>
    </View>
    );
}