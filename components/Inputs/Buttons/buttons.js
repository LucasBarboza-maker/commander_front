import * as React from 'react';
import Colors from '../../../assets/Utils/colors.json';
import {Pressable, Text} from 'react-native';

export default function Button({width, height, text, navigation, routeName, UpperMarginQTD, bgColor, color}) {
    console.log(routeName);
    return(
        <Pressable onPress={() => navigation.navigate(routeName)}  style={{backgroundColor:bgColor, width: width, height:height, borderRadius:10, flexDirection:'row', justifyContent:'center', alignItems: 'center', marginTop:UpperMarginQTD}}>
           <Text style={{color:color, fontSize:20}}>{text}</Text>
        </Pressable>
    )
}