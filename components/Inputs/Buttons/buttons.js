import * as React from 'react';
import Colors from '../../../assets/Utils/colors.json';
import {Pressable, Text} from 'react-native';

export default function Button({width, height, text, UpperMarginQTD}) {
    return(
        <Pressable onPress={() => console.log(text)} style={{backgroundColor:Colors.main_color, width: width, height:height, borderRadius:10, flexDirection:'row', justifyContent:'center', alignItems: 'center', marginTop:UpperMarginQTD}}>
           <Text style={{color:Colors.white_color, backgroundColor:Colors.main_color,fontSize:20, marginLeft:10}}>{text}</Text>
        </Pressable>
    )
}