import * as React from 'react';
import Colors from '../../../assets/Utils/colors.json';
import {Pressable, Text} from 'react-native';
import GoogleIconSvg from "../../SVGComponents/GoogleIcon.js";
import FacebookIconSvg from "../../SVGComponents/FacebookIcon";

function getBrandImage(brandName){
    if(brandName == "google"){
        return(
            <GoogleIconSvg/>
        );
    }else if(brandName == "facebook"){
        return(
            <FacebookIconSvg/>
        );
    }
}

export default function BrandButton({width, height, text, brandName, UpperMarginQTD}) {
    return(
        <Pressable onPress={() => console.log(brandName)} style={{width: width, height:height, borderRadius:10, borderColor:Colors.border_opaque,borderWidth:3, flexDirection:'row', justifyContent:'center', alignItems: 'center', marginTop:UpperMarginQTD}}>
           {getBrandImage(brandName)}
           <Text style={{color:Colors.text_opaque, fontSize:20, marginLeft:10}}>{text}</Text>
        </Pressable>
    )
}