import * as React from 'react';
import Colors from '../../../assets/Utils/colors.json';
import {Pressable, Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import ArrowLeftSvgWhite from "../../SVGComponents/ArrowLeftIconWhite";

export function BackButtonAbsolute({width, height, PageName, navigation}) {
    return(
        <Pressable onPress={() => navigation.navigate(PageName)} style={{ width: width, height:height, borderRadius:10, flexDirection:'row', justifyContent:'center', alignItems: 'center',position:'absolute', left:-20}}>
           <ArrowLeftSvg/>
           <Text style={{color:Colors.back_button_color, fontWeight:'bold', fontSize:20}}>Voltar</Text>
        </Pressable>
    )
}

export function BackButton({width, height, navigation, color}) {
    return(
        <Pressable onPress={() => navigation.goBack()} style={{ width: width, height:height, borderRadius:10, flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
           <ArrowLeftSvg/>
           <Text style={{color:color, fontWeight:'bold', fontSize:20}}>Voltar</Text>
        </Pressable>
    )
}
export function BackButtonWhite({width, height, PageName, color, navigation}) {
    return(

        
        <Pressable onPress={() => navigation.goBack()} style={{ width: width, height:height, borderRadius:10, flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
           <ArrowLeftSvgWhite/>
           <Text style={{color:color, fontWeight:'bold', fontSize:20}}>Voltar</Text>
        </Pressable>
    )
}