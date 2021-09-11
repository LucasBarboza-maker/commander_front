import * as React from 'react';
import Colors from '../../../assets/Utils/colors.json';
import {Pressable, Text} from 'react-native';

export function Button({width, height, text, navigation, routeName, UpperMarginQTD, bgColor, color}) {
    return(
        <Pressable onPress={() => navigation.navigate(routeName)}  style={{backgroundColor:bgColor, width: width, height:height, borderRadius:10, flexDirection:'row', justifyContent:'center', alignItems: 'center', marginTop:UpperMarginQTD}}>
           <Text style={{color:color, fontSize:20}}>{text}</Text>
        </Pressable>
    )
}

export function GhostButton({width, height, text, navigation, routeName, UpperMarginQTD, borderColor, color}) {
    return(
        <Pressable onPress={() => navigation.navigate(routeName)}  style={{backgroundColor:'transparent', width: width, height:height, borderRadius:5, flexDirection:'row', justifyContent:'center', alignItems: 'center', marginTop:UpperMarginQTD, borderWidth:1, borderColor:borderColor}}>
           <Text style={{color:color, fontSize:20}}>{text}</Text>
        </Pressable>
    )
}